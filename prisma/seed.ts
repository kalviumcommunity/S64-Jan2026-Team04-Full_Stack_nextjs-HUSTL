import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 1️⃣ Create users
  const student = await prisma.user.upsert({
    where: { email: "student@hustl.com" },
    update: {},
    create: {
      name: "Student User",
      email: "student@hustl.com",
      password: "hashed_password",
      role: Role.STUDENT,
    },
  });

  const mentor = await prisma.user.upsert({
    where: { email: "mentor@hustl.com" },
    update: {},
    create: {
      name: "Mentor User",
      email: "mentor@hustl.com",
      password: "hashed_password",
      role: Role.MENTOR,
    },
  });

  // 2️⃣ Create internship
  const internship = await prisma.internship.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Frontend Developer Intern",
      description: "Work on UI using React and Next.js",
      minimumScore: 60,
      status: "OPEN",
    },
  });

  // 3️⃣ Create application
  await prisma.application.create({
    data: {
      userId: student.id,
      internshipId: internship.id,
      status: "APPLIED",
    },
  });

  console.log("Database seeded successfully");
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
