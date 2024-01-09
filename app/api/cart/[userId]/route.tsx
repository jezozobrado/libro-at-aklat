import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

interface Params {
  params: { id: string };
}

interface ParamsGet {
  params: { userId: string };
}

export async function GET(request: NextRequest, { params }: ParamsGet) {
  const book = await prisma.user.findMany({
    where: { id: params.userId },
    include: { cart: true },
  });

  return NextResponse.json(book);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const body = await request.json();

  console.log(body);

  //   if (!body.title) return NextResponse.json({ error: "Title is required" });

  return NextResponse.json(body);
}
