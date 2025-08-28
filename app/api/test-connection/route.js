import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET(request) {
  try {
    const client = await clientPromise;
    await client.db("admin").command({ ping: 1 });

    return NextResponse.json({ message: "Successfully connected to MongoDB!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to connect to MongoDB." }, { status: 500 });
  }
}