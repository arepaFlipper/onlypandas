import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(req: NextRequest) {
  // Only check auth for protected routes
  const protectedRoutes = ["/dashboard", "/profile"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (!isProtectedRoute) {
    return NextResponse.next(); // Allow public pages
  }

  // Authentication check
  const session = getKindeServerSession();
  const isUserAuthenticated = await session.isAuthenticated();

  if (!isUserAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Define protected pages
};

