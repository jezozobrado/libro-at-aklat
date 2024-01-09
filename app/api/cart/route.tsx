import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { Book } from "@/app/models/book";

interface Body {
  title: string;
  author: string;
}

export async function GET(request: NextRequest, params: { userId: string }) {
  // const body = await request.json();
  // const searchParams = request.nextUrl.searchParams;
  if (!params.userId)
    return NextResponse.json(
      { error: "User is unauthenticated" },
      { status: 400 }
    );

  const cart = prisma.user.findUnique({
    where: { id: params.userId },
    include: { cart: true },
  });

  return NextResponse.json(cart);
}

// export async function POST(request: NextRequest) {
//   const body = await request.json();

//   if (!body.id)
//     return NextResponse.json(
//       { error: "User is unauthenticated" },
//       { status: 400 }
//     );

//   await prisma.user.create({});
//   return NextResponse.json({ title: body.title, author: body.author });
// }

export async function PUT(request: NextRequest) {
  const body = await request.json();
  if (!body.id)
    return NextResponse.json(
      { error: "User is unauthenticated" },
      { status: 400 }
    );

  const books = await prisma.user.update({
    where: { id: body.id },
    data: {
      cart: {
        connect: body.cart.map((id: string) => ({ id })),
      },
    },
  });

  return NextResponse.json(books);
}
