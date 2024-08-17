"use server";
import { signIn } from "@/auth";
import { compare, hash } from "bcryptjs";
import { prisma } from "../../prisma/prisma";
import { ZodError } from "zod";
import { signupSchema } from "../lib/zod";

interface formData {
  firstName: string;
  lastName: string;
  // address: string;
  // zip: string;
  // province: string;
  // city: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signupHandler = async (formData: formData) => {
  try {
    // console.log(formData, "formData");
    const {
      firstName,
      lastName,
      // address,
      // zip,
      // province,
      // city,
      email,
      password,
      confirmPassword,
    } = await signupSchema.parseAsync(formData);
    const user = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    if (user) {
      throw new Error("Email already exists");
    }
    const hashedPassword = await hash(password, 12);
    const isMatch = await compare(password, hashedPassword);
    console.log(password, hashedPassword, isMatch, "isMatch");

    const newUser = await prisma.users.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        cpassword: hashedPassword,
        role_id: 1,
      },
    });
    if (!newUser) {
      throw new Error("Something went wrong, try again");
    }
    // Redirect to sign in after successful signup
    // redirect("/auth/signin");
    return;
  } catch (error: any) {
    if (error instanceof ZodError) {
      // console.error(error.errors[0].message);
      return error.errors[0].message;
    } else {
      // console.error(error.message || error);
      return String(error.message || error);
    }
  }
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
