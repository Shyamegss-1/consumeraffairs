import GitHub from "next-auth/providers/github"
import { CredentialsSignin, type NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CreadentialProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "../prisma/prisma";

export default {  
    providers: [
    //   // OAuth authentication providers
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      CreadentialProvider({
        name: "credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        authorize: async (credentials) => {
          const { email, password } = credentials;
          if (!email || typeof email !== "string" || !password || typeof password !== "string") {
            throw new Error("Please provide both email and password");
          }
          const user = await prisma.users.findFirst({
            where: {
              email: email,
            },
          });
  
          if (!user) {
            throw new CredentialsSignin("Invalid email or password");
          }
  
          if (!user.password) {
            throw new CredentialsSignin("Invalid email or password");
          }
  
          const isMatch = await compare(password, user.password);
  
          if (!isMatch) {
            throw new CredentialsSignin("Invalid email or password");
          }
  
          if (password !== "passcode")
            throw new CredentialsSignin({
              cause: "Password does not match",
            });
          else return { ...user, password: undefined, id: String(user.id) };
        },
      }),
    ],
     } satisfies NextAuthConfig