import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "../prisma/prisma";
import { CredentialsSignin, NextAuthConfig } from "next-auth";
import { ZodError } from "zod";
import { signinSchema } from "./lib/zod";
import { UserType } from "@prisma/client";
import { sendMultipleEmails } from "./lib/mailer";
import bcryptjs from "bcryptjs";
import { emailVerificationTemplate } from "./emails/emailTemplates";

const authOptions: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password, userType } = await signinSchema.parseAsync(
            credentials
          );
          const user = await prisma.users.findFirst({
            where: {
              email,
              userType: userType as UserType | undefined,
            },
          });

          if (!user || !user.email || !user.password) {
            throw new CredentialsSignin({
              cause: "Invalid email or password.",
            });
          }
          const isMatch = await compare(password, user.password);
          console.log(password, user.password, isMatch);

          if (!isMatch) {
            throw new CredentialsSignin({
              cause: "Invalid email or password.",
            });
          }

          if (!user.verify) {
           
            throw new CredentialsSignin({
              cause:
                "Email verification required. Please check your inbox for a verification link to confirm your email.",
            });
          }

          return {
            ...user,
            id: String(user.id),
          };
        } catch (error) {
          console.log(error instanceof ZodError);

          if (error instanceof ZodError) {
            throw new CredentialsSignin({
              cause: error.errors[0].message,
            });
          } else {
            throw error;
          }
        }
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      console.log(isLoggedIn, nextUrl.origin,auth?.user, "isLoggedin");

      return true;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
          name: token.name,
          userType: (token as any).userType as UserType | undefined,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.name = user.name;
        token.userType = user.userType as UserType | undefined;
      }
      return token;
    },
  },
};

export default authOptions;
