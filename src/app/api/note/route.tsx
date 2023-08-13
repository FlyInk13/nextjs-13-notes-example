import { NextRequest, NextResponse } from "next/server";
import { ServerNoteAPI } from "@/lib/server/ServerNoteAPI";

export async function POST(request: NextRequest) {
  const serverNoteApi = ServerNoteAPI.create();
  const id = request.nextUrl.searchParams.get('id');

  if (!id || !id.length) {
    return NextResponse.json({ error: 'invalid id' }, { status: 400 });
  }

  await serverNoteApi.saveNote(id, await request.text())

  return NextResponse.json({ response: 1 });
}

export async function GET(request: NextRequest) {
  const serverNoteApi = ServerNoteAPI.create();
  const id = request.nextUrl.searchParams.get('id');

  if (!id || !id.length) {
    return NextResponse.json({ error: 'invalid id' }, { status: 400 });
  }

  return NextResponse.json({
    id: await serverNoteApi.getNote(String(id))
  });
}

