import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.course.createMany({
    data: [
      {
        title: "Beginner Python",
        ref: 1001,
        price: 9.99,
        originalPrice: 12.99,
        description: "Learn Python from scratch.",
        category: "Programming",
        level: "Beginner",
        duration: "6 weeks",
      },
      {
        title: "Advanced Node.js",
        ref: 1002,
        price: 19.99,
        originalPrice: 22.99,
        description: "Deep dive into backend development.",
        category: "Programming",
        level: "Advanced",
        duration: "8 weeks",
      },
      {
        title: "UI/UX Design",
        ref: 1003,
        price: 29.99,
        originalPrice: 34.99,
        description: "Design modern user interfaces.",
        category: "Design",
        level: "Intermediate",
        duration: "5 weeks",
      },
      {
        title: "React for Beginners",
        ref: 1004,
        price: 28.99,
        originalPrice: 35.99,
        description: "Build dynamic frontends with React.",
        category: "Web Development",
        level: "Beginner",
        duration: "4 weeks",
      },
      {
        title: "Data Structures",
        ref: 1005,
        price: 39.99,
        originalPrice: 44.99,
        description: "Understand core CS concepts.",
        category: "Computer Science",
        level: "Intermediate",
        duration: "6 weeks",
      },
      {
        title: "Photoshop Masterclass",
        ref: 1006,
        price: 49.99,
        originalPrice: 59.99,
        description: "Master Adobe Photoshop.",
        category: "Design",
        level: "Advanced",
        duration: "7 weeks",
      },
      {
        title: "Intro to AI",
        ref: 1007,
        price: 69.99,
        originalPrice: 79.99,
        description: "Get started with Artificial Intelligence.",
        category: "AI",
        level: "Beginner",
        duration: "6 weeks",
      },
      {
        title: "Docker & Kubernetes",
        ref: 1008,
        price: 38.99,
        originalPrice: 45.99,
        description: "Containerize your applications.",
        category: "DevOps",
        level: "Advanced",
        duration: "8 weeks",
      },
      {
        title: "SQL for Analysts",
        ref: 1009,
        price: 49.99,
        originalPrice: 59.99,
        description: "Learn SQL for data analysis.",
        category: "Data",
        level: "Intermediate",
        duration: "4 weeks",
      },
      {
        title: "Digital Marketing 101",
        ref: 1010,
        price: 49.99,
        originalPrice: 59.99,
        description: "Understand digital strategies.",
        category: "Marketing",
        level: "Beginner",
        duration: "3 weeks",
      },
      {
        title: "Cybersecurity Basics",
        ref: 1011,
        price: 59.99,
        originalPrice: 69.99,
        description: "Learn how to secure systems.",
        category: "Security",
        level: "Beginner",
        duration: "5 weeks",
      },
      {
        title: "Rust Programming",
        ref: 1012,
        price: 99.99,
        originalPrice: 129.99,
        description: "Explore systems programming with Rust.",
        category: "Programming",
        level: "Advanced",
        duration: "7 weeks",
      },
    ],
  });

  console.log("✅ Seeded 12 courses");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
