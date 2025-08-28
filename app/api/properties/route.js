import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

// Function to ADD a new property (you already have this)
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("bizvibez");

    const propertyData = await request.json();
    const result = await db.collection("properties").insertOne(propertyData);

    return NextResponse.json({ message: "Property added successfully", data: result }, { status: 201 });
  } catch (error) {
    console.error("Failed to add property", error);
    return NextResponse.json({ message: "Failed to add property." }, { status: 500 });
  }
}

// --- ADD THIS NEW FUNCTION ---
// Function to GET all properties
export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("bizvibez");

    // Fetch all documents from the "properties" collection
    const properties = await db.collection("properties").find({}).toArray();

    // Return a success response with the properties data
    return NextResponse.json({ properties: properties }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch properties", error);
    return NextResponse.json({ message: "Failed to fetch properties." }, { status: 500 });
  }
}