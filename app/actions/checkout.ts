"use server"

import { prisma } from "@/lib/db"
import { z } from "zod"
import { revalidatePath } from "next/cache"

// Input validation schema
const orderSchema = z.object({
    courseId: z.string(),
    fullName: z
        .string()
        .min(2, "Full name must be at least 2 characters")
        .max(100, "Full name must be less than 100 characters")
        .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 characters")
        .max(20, "Phone number must be less than 20 characters")
        .regex(/^\+?[\d\s\-$$$$]+$/, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
    notes: z.string().max(500, "Notes must be less than 500 characters").optional(),
    paymentMethod: z.string(),
    amount: z.number().positive("Amount must be positive"),
})

export async function createOrder(data: z.infer<typeof orderSchema>) {
    try {
        // Validate input data
        const validatedData = orderSchema.parse(data)

        // Sanitize data
        const sanitizedData = {
            ...validatedData,
            fullName: validatedData.fullName.trim(),
            phone: validatedData.phone.trim(),
            email: validatedData.email.trim().toLowerCase(),
            notes: validatedData.notes?.trim() || "",
        }

        // Check if course exists
        const course = await prisma.course.findUnique({
            where: { id: sanitizedData.courseId },
        })

        if (!course) {
            return { success: false, error: "Course not found" }
        }

        // Create order in database
        const order = await prisma.order.create({
            data: {
                courseId: sanitizedData.courseId,
                fullName: sanitizedData.fullName,
                phone: sanitizedData.phone,
                email: sanitizedData.email,
                notes: sanitizedData.notes,
                paymentMethod: sanitizedData.paymentMethod,
                amount: sanitizedData.amount,
                status: "pending",
                createdAt: new Date(),
            },
        })

        // Revalidate relevant pages
        revalidatePath("/")
        revalidatePath("/courses")

        return {
            success: true,
            orderId: order.id,
            message: "Order created successfully",
        }
    } catch (error) {
        console.error("Order creation error:", error)

        if (error instanceof z.ZodError) {
            return {
                success: false,
                error: error.errors[0]?.message || "Invalid input data",
            }
        }

        return {
            success: false,
            error: "Failed to create order. Please try again.",
        }
    }
}
