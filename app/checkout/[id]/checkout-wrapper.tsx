// import { prisma } from "@/lib/db";

import { notFound } from "next/navigation";
import CheckoutPageClient from "./checkout-client";

export default async function CheckoutWrapper({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id , " << << id")
  // const course = await prisma.course.findUnique({
  //   where: { id },
  // });
  const course = [{}]

  if (!course) return notFound();
             // @ts-expect-error type-error

  return <CheckoutPageClient course={course} />;
}
