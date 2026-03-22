import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter });

async function clearDataBase() {
  await prisma.$transaction(async (x) => {
    await x.organizationMemberShip.deleteMany();
    await x.organization.deleteMany();
    await x.user.deleteMany();
  })
}

async function main() {
  await clearDataBase();
  const [john, jane, organization] = await prisma.$transaction(
    async (prisma) => {
      const john = await prisma.user.create({
        data: {
          email: 'john.doe@mail.com',
          firstName: 'John',
          lastName: 'Doe',
          password: 'qwerty',
          role: 'USER',
          telephone: '123456789',
        },
      });

      const jane = await prisma.user.create({
        data: {
          email: 'jane.doe@mail.com',
          firstName: 'Jane',
          lastName: 'Doe',
          password: 'qwerty',
          role: 'USER',
          telephone: '123456789',
        },
      });

      const organization = await prisma.organization.create({
        data: {
          name: 'Test Org',
          memberShips: {
            create: [{ userId: john.id }, { userId: jane.id }],
          },
        },
      });

      return [john, jane, organization];
    },
  );

  console.log([john, jane, organization]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });