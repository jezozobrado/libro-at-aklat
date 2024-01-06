import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Body {
  title: string;
  author: string;
}

export async function GET(request: NextRequest) {
  const books = await prisma.book.findMany();
  return NextResponse.json(books);
}

export async function POST(request: NextRequest) {
  const body: Body = await request.json();

  if (!body.title)
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  return NextResponse.json({ title: body.title, author: body.author });
}
