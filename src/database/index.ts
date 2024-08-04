import { Pool } from "pg"

const{DATABASE_URL}=process.env

export const sql = new Pool({
  connectionString: DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})