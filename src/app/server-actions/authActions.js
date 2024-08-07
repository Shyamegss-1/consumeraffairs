"use server";
import { signIn } from "@/auth";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "../../prisma/prisma";
import { log } from "console";
import { ZodError } from "zod";

export const signupHandler = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (!email || !password || !name) {
    throw new Error("Please fill all the fields");
  }
  if (password !== confirmPassword) {
    throw new Error("Password and confirm password do not match");
  }

  const user = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  if (user) {
    throw new Error("Email already exists");
  }
  // ... create user
  const hashedPassword = await hash(password, 12);
  const newUser = await prisma.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
    },
  });
  if (!newUser) {
    throw new Error("Something went wrong, try again");
  }
  redirect("/auth/signin");
};

export const loginHandler = async ({ username, password }) => {
  try {
    await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  } catch (error) {
    const err = error.cause
    return err
  }
};
