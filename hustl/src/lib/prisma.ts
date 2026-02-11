import { PrismaClient } from "@prisma/client";
import { getSecrets } from "./secret";

export let prisma: PrismaClient;

export async function getPrisma() {
  if (!prisma) {
    const secrets = await getSecrets();

    prisma = new PrismaClient({
      datasources: {
        db: {
          url: secrets.DATABASE_URL,
        },
      },
    });
  }

  return prisma;
}
