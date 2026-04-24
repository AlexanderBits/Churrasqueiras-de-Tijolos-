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
      description: "A clássica churrasqueira de tijolinho que é referência no Rio. Construída com tijolos refratários de alta qualidade, garante o melhor churrasco para sua família. Design atemporal e durabilidade extrema.",
      price: 0,
      category: "Tradicional",
      images: {
        create: [
          { url: "/produtos/tradicional.png" },
        ]
      }
    },
    {
      name: "Conjunto Gourmet Iglu",
      slug: "conjunto-gourmet-iglu",
      description: "O ápice do lazer. Combina nossa churrasqueira padrão com um forno de pizza tipo Iglu integrado. Perfeito para quem ama churrasco e pizza com o verdadeiro sabor da lenha.",
      price: 0,
      category: "Gourmet",
      images: {
        create: [
          { url: "/produtos/gourmet.png" },
        ]
      }
    },
    {
      name: "Churrasqueira Predial Caixote",
      slug: "churrasqueira-predial",
      description: "Desenvolvida especialmente para apartamentos e coberturas. O modelo caixote (reto) otimiza o espaço mantendo a eficiência térmica e a estética moderna que o seu prédio exige.",
      price: 0,
      category: "Predial",
      images: {
        create: [
          { url: "/produtos/predial_nova.jpg" },
        ]
      }
    },
    {
      name: "Churrasqueira Rústica",
      slug: "churrasqueira-rustica",
      description: "Para quem busca um visual mais encorpado e artesanal. Acabamento rústico que remete às fazendas, ideal para áreas externas amplas e decorações que valorizam o natural.",
      price: 0,
      category: "Rústica",
      images: {
        create: [
          { url: "/produtos/rustica.png" },
        ]
      }
    },
    {
      name: "Conjunto Caipira Completo",
      slug: "conjunto-caipira-completo",
      description: "Churrasqueira, forno a lenha caipira e fogão. O conjunto completo para quem não abre mão da culinária tradicional. Tudo em um único projeto integrado e harmonioso.",
      price: 0,
      category: "Caipira",
      images: {
        create: [
          { url: "/produtos/caipira_nova.jpg" },
        ]
      }
    },
    {
      name: "Projeto Sob Medida Premium",
      slug: "projeto-sob-medida",
      description: "Não importa o tamanho do seu espaço, nós projetamos a solução ideal. Churrasqueiras personalizadas com largura e altura adaptadas à sua necessidade específica.",
      price: 0,
      category: "Sob Medida",
      images: {
        create: [
          { url: "/produtos/sobmedida.png" },
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
