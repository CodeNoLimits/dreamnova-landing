import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Track NFC scans
  if (pathname.startsWith("/portal/unlock")) {
    const key = request.nextUrl.searchParams.get("key");
    if (key) {
      console.log(`[NFC Scan Tracked] Nova Key ID: ${key} at ${new Date().toISOString()}`);
    }
  }

  // Protect dashboard routes (basic check for now, real auth to be implemented)
  if (pathname.startsWith("/dashboard")) {
    // Future: Check authentication token/session
    // For now, just log the access attempt
    console.log(`[Dashboard Access] ${pathname} at ${new Date().toISOString()}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Track portal unlock page
    "/portal/unlock",
    // Protect dashboard routes
    "/dashboard/:path*",
  ],
};
