// app/api/courses/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
    try {
        const courses = await prisma.course.findMany();
        return NextResponse.json(courses);
    } catch (error) {
        console.error('GET /api/courses error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
