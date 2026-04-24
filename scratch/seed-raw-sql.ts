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
      description: "A clássica churrasqueira de tijolinho que é referência no Rio. Construída com tijolos refratários de alta qualidade, garante o melhor churrasco para sua família. Design atemporal e durabilidade extrema.",
      price: 0,
      category: "Tradicional",
      image: "/produtos/tradicional.png"
    },
    {
      id: "prod2",
      name: "Conjunto Gourmet Iglu",
      slug: "conjunto-gourmet-iglu",
      description: "O ápice do lazer. Combina nossa churrasqueira padrão com um forno de pizza tipo Iglu integrado. Perfeito para quem ama churrasco e pizza com o verdadeiro sabor da lenha.",
      price: 0,
      category: "Gourmet",
      image: "/produtos/gourmet.png"
    },
    {
      id: "prod3",
      name: "Churrasqueira Predial Caixote",
      slug: "churrasqueira-predial",
      description: "Desenvolvida especialmente para apartamentos e coberturas. O modelo caixote (reto) otimiza o espaço mantendo a eficiência térmica e a estética moderna que o seu prédio exige.",
      price: 0,
      category: "Predial",
      image: "/produtos/predial_nova.jpg"
    },
    {
      id: "prod4",
      name: "Churrasqueira Rústica",
      slug: "churrasqueira-rustica",
      description: "Para quem busca um visual mais encorpado e artesanal. Acabamento rústico que remete às fazendas, ideal para áreas externas amplas e decorações que valorizam o natural.",
      price: 0,
      category: "Rústica",
      image: "/produtos/rustica.png"
    },
    {
      id: "prod5",
      name: "Conjunto Caipira Completo",
      slug: "conjunto-caipira-completo",
      description: "Churrasqueira, forno a lenha caipira e fogão. O conjunto completo para quem não abre mão da culinária tradicional. Tudo em um único projeto integrado e harmonioso.",
      price: 0,
      category: "Caipira",
      image: "/produtos/caipira_nova.jpg"
    },
    {
      id: "prod6",
      name: "Projeto Sob Medida Premium",
      slug: "projeto-sob-medida",
      description: "Não importa o tamanho do seu espaço, nós projetamos a solução ideal. Churrasqueiras personalizadas com largura e altura adaptadas à sua necessidade específica.",
      price: 0,
      category: "Sob Medida",
      image: "/produtos/sobmedida.png"
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
