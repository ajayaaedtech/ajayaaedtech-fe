import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  // 🔍 Debug log — visible in your terminal (not browser console)
  console.log("🧩 Middleware check:");
  console.log("Path:", pathname);
  console.log("Token:", token || "❌ No token found");

  // Normal logic for route protection
  if (!token && pathname.startsWith("/dashboard")) {
    console.log("➡️ Redirecting to /auth (no token)");
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (token && pathname.startsWith("/auth")) {
    console.log("➡️ Redirecting to /dashboard (token exists)");
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
