import { NextRequest, NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";
// import { getSession } from "next-auth/react";

// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
  // Your custom middleware logic goes here
  // console.log(req);
});

// export async function middleware(req: NextRequest) {
//   const session = await getSession({ req });
//   const { pathname } = req.nextUrl;

//   if (pathname.startsWith("/admin")) {
//     if (!session || session.user?.role !== "admin") {
//       return NextResponse.redirect("/admin/login");
//     }
//   } else if (pathname.startsWith("/user")) {
//     if (!session || session.user?.role !== "user") {
//       return NextResponse.redirect("/user/login");
//     }
//   }

//   return NextResponse.next();
// }
