import { NextResponse } from 'next/server';
import { query } from '@/lib/db-pg';

export async function GET() {
  try {
    const courses = await query('SELECT * FROM "Course"');
    return NextResponse.json(courses);
  } catch (error) {
    console.error('GET /api/courses error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}