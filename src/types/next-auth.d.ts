import { UserType } from "@prisma/client";
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      userType?: UserType;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    userType?: UserType;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userType?: UserType;
  }
}
