import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: { slug: string[] };
}

export function GET(request: NextRequest, { params }: Params) {
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
