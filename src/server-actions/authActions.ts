"use server";
import { signIn } from "@/auth";
import { hash } from "bcryptjs";
import { prisma } from "../../prisma/prisma";
import { ZodError } from "zod";
import { signupSchema } from "../lib/zod";

interface formData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
  country: String;
  postalCode: number;
  province: string;
  city: string;
}

export const signupHandler = async (formData: FormData) => {
  // try {
  //   const {
  //     firstName,
  //     lastName,
  //     address,
  //     country,
  //     postalCode,
  //     province,
  //     city,
  //     email,
  //     password,
  //     confirmPassword,
  //   } = await signupSchema.parseAsync(formData);
  //   const user = await prisma.users.findFirst({
  //     where: {
  //       email: email,
  //     },
  //   });
  //   if (user) {
  //     throw new Error("Email already exists");
  //   }
  //   const hashedPassword = await hash(password, 12);
  //   const newUser = await prisma.users.create({
  //     data: {
  //       username:"",
  //       email,
  //       password: hashedPassword,
  //       role:"jdfjgjh"
  //     },
  //   });
  //   if (!newUser) {
  //     throw new Error("Something went wrong, try again");
  //   }
  //   // Redirect to sign in after successful signup
  //   // redirect("/auth/signin");
  //   return;
  // } catch (error: any) {
  //   if (error instanceof ZodError) {
  //     console.error(error.errors[0].message);
  //     return error.errors[0].message;
  //   } else {
  //     console.error(error.message || error);
  //     return String(error.message || error);
  //   }
  // }
};

export const loginHandler = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  } catch (error: any) {
    const err = error.cause;
    return err;
  }
};
