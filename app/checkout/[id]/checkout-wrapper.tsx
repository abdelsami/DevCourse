import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import CheckoutPageClient from "./checkout-client";

export default async function CheckoutWrapper({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const course = await prisma.course.findUnique({
    where: { id },
  });

  if (!course) return notFound();

  return <CheckoutPageClient course={course} />;
}
