import { NextRequest, NextResponse } from "next/server";
import { getNote, saveNote } from "@/ServerAction/ServerNoteAPI";

export async function POST(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');

  if (!id || !id.length) {
    return NextResponse.json({ error: 'invalid id' }, { status: 400 });
  }

  await saveNote(id, await request.text())

  return NextResponse.json({ response: 1 });
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');

  if (!id || !id.length) {
    return NextResponse.json({ error: 'invalid id' }, { status: 400 });
  }

  return NextResponse.json({
    id: await getNote(String(id))
  });
}

