import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: { params: Promise<{ kindeAuth: string }> }) {
  const { kindeAuth } = await params;
  const jar = await cookies();

  if (kindeAuth === "login") {
    jar.set("demo_logged_in", "true", { path: "/", httpOnly: true });
  } else if (kindeAuth === "logout") {
    jar.delete("demo_logged_in");
  }

  // Relative Location: the browser resolves it against the URL it is actually on,
  // so it works behind Docker port mapping (3033 -> 3000) and on Vercel alike.
  return new NextResponse(null, { status: 307, headers: { Location: "/" } });
}
