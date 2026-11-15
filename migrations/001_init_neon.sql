-- TechVibe Home / Neon PostgreSQL schema
-- Safe to run repeatedly; creates tables only and does not delete existing data.
BEGIN;

CREATE TABLE IF NOT EXISTS records (
  id TEXT PRIMARY KEY,
  type TEXT,
  title TEXT,
  robot TEXT,
  board TEXT,
  status TEXT,
  updated_at TEXT,
  data TEXT
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  expiry BIGINT
);

CREATE TABLE IF NOT EXISTS customers (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS customer_sessions (
  token_hash TEXT PRIMARY KEY,
  customer_id TEXT NOT NULL,
  expiry BIGINT NOT NULL
);

CREATE TABLE IF NOT EXISTS shop_orders (
  id TEXT PRIMARY KEY,
  customer_id TEXT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  note TEXT,
  status TEXT NOT NULL,
  total INTEGER NOT NULL,
  items TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_records_type_title ON records (type, title);
CREATE INDEX IF NOT EXISTS idx_records_updated_at ON records (updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_shop_orders_created_at ON shop_orders (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_shop_orders_customer_id ON shop_orders (customer_id);
CREATE INDEX IF NOT EXISTS idx_customer_sessions_customer_id ON customer_sessions (customer_id);

COMMIT;
