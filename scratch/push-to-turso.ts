import { createClient } from "@libsql/client";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN must be set in .env.local");
  process.exit(1);
}

async function main() {
  const client = createClient({ url, authToken });
  const sqlFile = path.join(process.cwd(), "prisma", "schema.sql");
  let sql = fs.readFileSync(sqlFile, "utf8");
  
  // Basic cleanup for Windows/PowerShell redirection weirdness
  if (sql.includes("\0")) {
     sql = fs.readFileSync(sqlFile, "utf16le");
  }
  
  // Remove BOM
  sql = sql.replace(/^\uFEFF/, '');

  console.log("Applying schema to Turso...");
  
  // Split the SQL into individual statements
  const statements = sql
    .split(";")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  for (const statement of statements) {
    console.log(`Executing: ${statement.substring(0, 50)}...`);
    await client.execute(statement);
  }

  console.log("Schema applied successfully!");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
