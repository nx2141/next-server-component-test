import { NextResponse } from "next/server";

export async function GET() {
  console.log("API /api/test was called");
  return NextResponse.json({ message: "Hello from Next.js!" });
}
