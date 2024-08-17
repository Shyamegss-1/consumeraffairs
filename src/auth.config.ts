import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "../prisma/prisma";
import { NextAuthConfig } from "next-auth";

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
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please provide both email and password");
        }

        const user = await prisma.users.findFirst({
          where: { email: credentials.email },
        });

        if (!user || typeof user.password !== "string") {
          throw new Error("Invalid email or password");
        }

        if (typeof credentials.password !== "string") {
          throw new Error("Invalid credentials");
        }

        const isMatch = await compare(credentials.password, user.password);
        if (!isMatch) {
          throw new Error("Invalid email or password");
        }
        return { ...user, id: user.id.toString() };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
          name: token.name,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default authOptions;
