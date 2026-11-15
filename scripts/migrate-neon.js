import 'dotenv/config';
import pg from 'pg';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
if(!process.env.DATABASE_URL) { console.error('Missing DATABASE_URL'); process.exit(1); }
const pool=new pg.Pool({connectionString:process.env.DATABASE_URL, max:2, connectionTimeoutMillis:10000});
const client=await pool.connect();
try {
  await client.query('BEGIN');
  const migration=await fs.readFile(path.join(root,'migrations/001_init_neon.sql'),'utf8');
  await client.query(migration);
  const catalog=JSON.parse(await fs.readFile(path.join(root,'data/robots.seed.json'),'utf8'));
  let created=0, skipped=0;
  for(const robot of catalog) {
    const existing=await client.query("SELECT id FROM records WHERE type='robots' AND title=$1 LIMIT 1",[robot.title]);
    if(existing.rowCount){skipped++;continue;}
    const id=(await client.query("SELECT md5('techvibe:robot:' || $1) AS id",[robot.title])).rows[0].id;
    await client.query('INSERT INTO records(id,type,title,robot,board,status,updated_at,data) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',[
      id,'robots',robot.title,robot.title,'','Giới thiệu',new Date().toISOString(),JSON.stringify({...robot,public:true,seeded:true})
    ]);
    created++;
  }
  await client.query('COMMIT');
  console.log('Neon migration successful: 5 tables, '+created+' robots inserted, '+skipped+' already present.');
} catch(error) {
  await client.query('ROLLBACK');
  console.error('Neon migration failed:',error.message);
  process.exitCode=1;
} finally {client.release();await pool.end();}
