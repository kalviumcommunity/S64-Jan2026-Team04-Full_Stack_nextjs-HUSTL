import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function createApplication(
  userId: number,
  internshipId: number
) {
  return prisma.$transaction(
    async (tx: Prisma.TransactionClient) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
        select: { id: true },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const internship = await tx.internship.findUnique({
        where: { id: internshipId },
        select: { id: true },
      });

      if (!internship) {
        throw new Error("Internship not found");
      }

      return tx.application.create({
        data: {
          userId,
          internshipId,
          status: "PENDING",
        },
      });
    }
  );
}
