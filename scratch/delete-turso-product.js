const { createClient } = require('@libsql/client');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error("TURSO_DATABASE_URL or TURSO_AUTH_TOKEN not found in .env.local");
  process.exit(1);
}

const client = createClient({ url, authToken });

async function main() {
  console.log("Deleting product from Turso...");
  
  // Delete the product
  const result = await client.execute({
    sql: "DELETE FROM Product WHERE name = ? OR slug = ?",
    args: ["Predial com Forno e Bancada", "predial-forno-bancada"]
  });
  
  console.log(`Deleted ${result.rowsAffected} products from Turso.`);

  // Delete product images
  const imgResult = await client.execute({
    sql: "DELETE FROM ProductImage WHERE url LIKE ?",
    args: ["%Churrasqueira_Forno-Caipia_ou_50kg_Bancada%"]
  });
  
  console.log(`Deleted ${imgResult.rowsAffected} product images from Turso.`);
}

main().catch(console.error).finally(() => client.close());
