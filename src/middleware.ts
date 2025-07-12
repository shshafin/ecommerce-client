import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AuthRoutes = ["/login", "/register"];

const roleBasedRoutes = {
  user: [/^\/profile/, /^\/cart/],
  admin: [/^\/admin/, /^\/cart/],
};

type Role = keyof typeof roleBasedRoutes;

// Simulated getCurrentUser function (replace later with actual logic)
async function getCurrentUser() {
  console.log("Simulated user retrieval");
  return { role: "user" }; // change this to "admin" for testing
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser();

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if (user?.role && roleBasedRoutes[user.role as Role]) {
    const routes = roleBasedRoutes[user.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/profile",
    "/profile/:path*",
    "/admin",
    "/admin/:path*",
    "/cart",
    "/cart/:path*",
  ],
};
