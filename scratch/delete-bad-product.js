const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.product.deleteMany({
    where: {
      OR: [
        { name: 'Predial com Forno e Bancada' },
        { slug: 'predial-forno-bancada' }
      ]
    }
  });
  console.log(`Deleted ${result.count} products.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
