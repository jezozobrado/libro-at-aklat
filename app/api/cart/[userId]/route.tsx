import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

interface Params {
  params: { userId: string };
}

export async function GET(request: NextRequest, { params }: Params) {
  const book = await prisma.user.findMany({
    where: { id: params.userId },
    include: { cart: true },
  });

  return NextResponse.json(book);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const body = await request.json();
  // const user = await prisma.user.update({
  //   where: { email: "alice@prisma.io" },
  //   data: {
  //     posts: {
  //       disconnect: [{ id: 44 }, { id: 46 }],
  //     },
  //   },
  // });

  const cart = await prisma.user.update({
    where: { id: params.userId },
    data: {
      cart: { disconnect: [{ id: body.bookId }] },
    },
  });

  // const body = await request.json();

  console.log(cart);

  //   if (!body.title) return NextResponse.json({ error: "Title is required" });

  return NextResponse.json(cart);
}
