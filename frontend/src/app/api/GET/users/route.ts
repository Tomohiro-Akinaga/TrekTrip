import User from "@/db/models/User";
import connectMongoDB from "@/db/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}
