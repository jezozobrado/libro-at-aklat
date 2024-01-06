import { NextRequest, NextResponse } from "next/server";

interface Body {
  title: string;
  author: string;
}

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      title: "ulul",
      author: "mamamo",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body: Body = await request.json();

  if (!body.title)
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  return NextResponse.json({ title: body.title, author: body.author });
}
