import User from "@/db/models/User";
import connectMongoDB from "@/db/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name } = await request.json();
  await connectMongoDB();
  await User.create({ name });
  return NextResponse.json({ message: "Created New User" }, { status: 201 });
}
