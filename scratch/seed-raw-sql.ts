import { createClient } from "@libsql/client";
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

  console.log("Start seeding Turso with raw SQL...");

  // Delete existing
  await client.execute("DELETE FROM ProductImage;");
  await client.execute("DELETE FROM Product;");

  const products = [
    {
      id: "prod1",
      name: "Churrasqueira Tradicional",
      slug: "churrasqueira-tradicional",
      description: "Nossa churrasqueira tradicional de tijolinhos aparentes. O modelo clássico perfeito para qualquer varanda ou quintal no Rio de Janeiro.",
      price: 2490.00,
      category: "Tradicional",
      image: "https://images.unsplash.com/photo-1590779032729-28c94eb1c28c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "prod2",
      name: "Modelo Gourmet Luxo",
      slug: "modelo-gourmet-luxo",
      description: "Para clientes exigentes que buscam a mais alta sofisticação. Combina tijolos refratários premium e acabamentos em granito.",
      price: 6890.00,
      category: "Gourmet Luxo",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "prod3",
      name: "Churrasqueira Rústica Campeira",
      slug: "churrasqueira-rustica",
      description: "Inspirada no visual campeiro com detalhes em dormente e forjada de ferro maciço.",
      price: 4200.00,
      category: "Rústica",
      image: "https://images.unsplash.com/photo-1582294437299-158140dbb51f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "prod4",
      name: "Projeto 100% Sob Medida",
      slug: "projeto-sob-medida",
      description: "Criamos a churrasqueira perfeita para o espaço exato que você tem.",
      price: 8500.00,
      category: "Sob Medida",
      image: "https://images.unsplash.com/photo-1548325995-1f9db67d02dc?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  for (const p of products) {
    console.log(`Inserting product: ${p.name}`);
    await client.execute({
      sql: "INSERT INTO Product (id, name, slug, description, price, category, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)",
      args: [p.id, p.name, p.slug, p.description, p.price, p.category, new Date().toISOString()]
    });
    
    await client.execute({
      sql: "INSERT INTO ProductImage (id, url, productId) VALUES (?, ?, ?)",
      args: [`img_${p.id}`, p.image, p.id]
    });
  }

  console.log("Seeding Turso with raw SQL finished successfully!");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
