import { NextResponse } from "next/server";
import {
  THREAD_COOKIE,
  deleteThread,
  loadThread,
  readThreadToken,
  threadPersistenceEnabled,
} from "@/lib/chat/threadStore";

export const runtime = "nodejs";

function cookieValue(req: Request, name: string): string | undefined {
  const header = req.headers.get("cookie");
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const [k, ...rest] = part.trim().split("=");
    if (k === name) return rest.join("=");
  }
  return undefined;
}

/**
 * Returns the conversation belonging to the caller's own thread cookie, and
 * nothing else. There is no id parameter by design: the only thread readable
 * is the one whose signed cookie the browser presents.
 */
export async function GET(req: Request): Promise<NextResponse> {
  if (!threadPersistenceEnabled()) {
    return NextResponse.json({ messages: [], persisted: false });
  }

  const id = readThreadToken(cookieValue(req, THREAD_COOKIE));
  if (!id) return NextResponse.json({ messages: [], persisted: true });

  const messages = await loadThread(id);
  return NextResponse.json({ messages, persisted: true });
}

/** Clears the stored conversation when the student resets the chat. */
export async function DELETE(req: Request): Promise<NextResponse> {
  const id = readThreadToken(cookieValue(req, THREAD_COOKIE));
  if (id) await deleteThread(id);
  return NextResponse.json({ ok: true });
}
