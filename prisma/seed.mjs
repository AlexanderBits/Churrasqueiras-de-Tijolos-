import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const databaseUrl = process.env.DATABASE_URL || "file:./dev.db";
const adapter = new PrismaBetterSqlite3({ url: databaseUrl });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Start seeding...");

  // Limpar os produtos antigos (cascade limpa ProductImage também se configurado, senao limpar manual)
  await prisma.productImage.deleteMany({});
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
          { url: "/produtos/tradicional.png" },
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
          { url: "/produtos/gourmet.png" },
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
          { url: "/produtos/rustica.png" },
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

  console.log("Seeding finished.");
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
