import pg from 'pg';
export class PgCompat {
  constructor(url) {
    if (!url) throw new Error('DATABASE_URL is required for PostgreSQL');
    this.pool = new pg.Pool({connectionString:url,ssl:{rejectUnauthorized:false},max:5,connectionTimeoutMillis:10000});
  }
  async init(){
    await this.pool.query('SELECT 1');
    await this.pool.query(`CREATE TABLE IF NOT EXISTS records(id TEXT PRIMARY KEY,type TEXT,title TEXT,robot TEXT,board TEXT,status TEXT,updated_at TEXT,data TEXT);
CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY,expiry BIGINT);
CREATE TABLE IF NOT EXISTS customers(id TEXT PRIMARY KEY,email TEXT UNIQUE NOT NULL,name TEXT NOT NULL,phone TEXT,password_hash TEXT NOT NULL,created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS customer_sessions(token_hash TEXT PRIMARY KEY,customer_id TEXT NOT NULL,expiry BIGINT NOT NULL);
CREATE TABLE IF NOT EXISTS shop_orders(id TEXT PRIMARY KEY,customer_id TEXT,name TEXT NOT NULL,phone TEXT NOT NULL,email TEXT NOT NULL,address TEXT NOT NULL,note TEXT,status TEXT NOT NULL,total INTEGER NOT NULL,items TEXT NOT NULL,created_at TEXT NOT NULL)`);
  }
  prepare(sql) {
    const text = sql.replace(/\?/g,(_,offset)=>'$'+(sql.slice(0,offset).match(/\?/g)||[]).length+ (sql[offset]==='?'?0:1));
    // Replace sequential SQLite placeholders with PostgreSQL positional placeholders.
    let index=0;
    const query=sql.replace(/\?/g,()=>'$'+(++index));
    const execute=async args=>this.pool.query(query,args);
    return {
      get:async(...args)=>(await execute(args)).rows[0],
      all:async(...args)=>(await execute(args)).rows,
      run:async(...args)=>({changes:(await execute(args)).rowCount})
    };
  }
  async close(){await this.pool.end()}
}
