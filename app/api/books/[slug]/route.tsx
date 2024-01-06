import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Params {
  params: { slug: string };
}

export async function GET(request: NextRequest, { params }: Params) {
  const book = await prisma.book.findUnique({ where: { slug: params.slug } });
  return NextResponse.json([
    {
      title: params.slug,
      author: "mamamo",
    },
  ]);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const body = await request.json();

  if (!body.title) return NextResponse.json({ error: "Title is required" });

  return NextResponse.json({ title: body.title, author: body.author });
}
