import { NextRequest, NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { getSession } from "next-auth/react";
// import { getSession } from "next-auth/react";

// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
  // Your custom middleware logic goes here
  // const session = await getSession()
  // const { pathname,origin } = new URL(req.url);
  // console.log(req.url, pathname,origin, "this is the url");
  // if (pathname.startsWith("/admin")) {
  //   return NextResponse.redirect(origin+"/admin/login");
  // } else if (pathname.startsWith("/business")) {
  //   return NextResponse.redirect(origin+"/business/login");
  // }
  // return NextResponse.next();
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
