import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

const client = createClient({ url: url!, authToken: authToken! });

async function main() {
  const result = await client.execute("SELECT * FROM Product");
  console.log(result.rows);
}

main().catch(console.error);
