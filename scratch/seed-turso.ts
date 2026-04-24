import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

process.env.DATABASE_URL = "file:./dev.db"; // Force dummy URL for Prisma engine

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

console.log("Loading env vars from .env.local...");
console.log("URL:", url ? `${url.substring(0, 15)}...` : "UNDEFINED");
console.log("Token:", authToken ? `${authToken.substring(0, 10)}...` : "UNDEFINED");

if (!url || !authToken) {
  console.error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN must be set in .env.local");
  process.exit(1);
}

const libsql = createClient({ url, authToken });
const adapter = new PrismaLibSql(libsql);
const prisma = new PrismaClient({ 
  adapter,
  log: ["query", "error", "warn"],
});

async function main() {
  console.log("Start seeding Turso...");

  // Limpar os produtos antigos
  await prisma.product.deleteMany({});

  const productsData = [
    {
      name: "Churrasqueira Tradicional",
      slug: "churrasqueira-tradicional",
      description: "Nossa churrasqueira tradicional de tijolinhos aparentes. O modelo clássico perfeito para qualquer varanda ou quintal no Rio de Janeiro. Refratário interno de alta eficiência e beleza atemporal.",
      price: 2490.00,
      category: "Tradicional",
      images: {
        create: [
          { url: "https://images.unsplash.com/photo-1590779032729-28c94eb1c28c?q=80&w=1000&auto=format&fit=crop" },
        ]
      }
    },
    {
      name: "Modelo Gourmet Luxo",
      slug: "modelo-gourmet-luxo",
      description: "Para clientes exigentes que buscam a mais alta sofisticação. Combina tijolos refratários premium, acabamentos em granito preto São Gabriel ou Mármore, vidro temperado nas laterais e coifa em inox.",
      price: 6890.00,
      category: "Gourmet Luxo",
      images: {
        create: [
          { url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" },
        ]
      }
    },
    {
      name: "Churrasqueira Rústica Campeira",
      slug: "churrasqueira-rustica",
      description: "Inspirada no visual campeiro com detalhes em dormente e forjada de ferro maciço. Assa a carne no estilo fuego lendo. Traz uma atmosfera quente e convidativa.",
      price: 4200.00,
      category: "Rústica",
      images: {
        create: [
          { url: "https://images.unsplash.com/photo-1582294437299-158140dbb51f?q=80&w=1000&auto=format&fit=crop" },
        ]
      }
    },
    {
      name: "Projeto 100% Sob Medida",
      slug: "projeto-sob-medida",
      description: "Criamos a churrasqueira perfeita para o espaço exato que você tem. Avaliamos a área de ventilação, fluxo de chaminé e design integrado à arquitetura atual da sua área gourmet.",
      price: 8500.00,
      category: "Sob Medida",
      images: {
        create: [
          { url: "https://images.unsplash.com/photo-1548325995-1f9db67d02dc?q=80&w=1000&auto=format&fit=crop" },
        ]
      }
    }
  ];

  for (const p of productsData) {
    const product = await prisma.product.create({
      data: p
    });
    console.log(`Created product with id: ${product.id}`);
  }

  console.log("Seeding Turso finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
