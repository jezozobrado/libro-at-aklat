import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
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
  const body: Book = await request.json();

  if (!body.title || !body.author || !body.image)
    return NextResponse.json({ error: "Info is missing" }, { status: 400 });

  const book = await prisma.book.create({
    data: body,
  });

  return NextResponse.json(book);
}
