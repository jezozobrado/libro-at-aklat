import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { Book } from "@/app/models/book";

interface Body {
  title: string;
  author: string;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const books = await prisma.book.findMany({
    where: {
      month: searchParams.get("month") || undefined,
      slug: searchParams.get("slug") || undefined,
      badge: searchParams.get("badge")
        ? parseInt(searchParams.get("badge")!)
        : undefined,
      genre: searchParams.get("genre")
        ? parseInt(searchParams.get("genre")!)
        : undefined,
    },
  });
  return NextResponse.json(books);
}

export async function POST(request: NextRequest) {
  const body: Body = await request.json();

  if (!body.title)
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  return NextResponse.json({ title: body.title, author: body.author });
}
