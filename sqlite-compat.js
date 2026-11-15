import Database from 'better-sqlite3';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
export class SqliteCompat {
  constructor(file=process.env.DB_PATH||path.join(path.dirname(fileURLToPath(import.meta.url)),'techvibe.sqlite')){
    this.db=new Database(file);
    this.db.pragma('journal_mode = WAL');
  }
  async init(){
    this.db.exec(`CREATE TABLE IF NOT EXISTS records(id TEXT PRIMARY KEY,type TEXT,title TEXT,robot TEXT,board TEXT,status TEXT,updated_at TEXT,data TEXT);
CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY,expiry INTEGER);
CREATE TABLE IF NOT EXISTS customers(id TEXT PRIMARY KEY,email TEXT UNIQUE NOT NULL,name TEXT NOT NULL,phone TEXT,password_hash TEXT NOT NULL,created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS customer_sessions(token_hash TEXT PRIMARY KEY,customer_id TEXT NOT NULL,expiry INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS shop_orders(id TEXT PRIMARY KEY,customer_id TEXT,name TEXT NOT NULL,phone TEXT NOT NULL,email TEXT NOT NULL,address TEXT NOT NULL,note TEXT,status TEXT NOT NULL,total INTEGER NOT NULL,items TEXT NOT NULL,created_at TEXT NOT NULL);`);
  }
  prepare(sql){
    const statement=this.db.prepare(sql);
    return {get:async(...args)=>statement.get(...args),all:async(...args)=>statement.all(...args),run:async(...args)=>statement.run(...args)};
  }
}
