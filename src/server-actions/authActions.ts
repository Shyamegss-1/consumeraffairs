"use server";
import { auth, signIn, signOut } from "@/auth";
import { compare, hash } from "bcryptjs";
import { prisma } from "../../prisma/prisma";
import { any, ZodError } from "zod";
import { signupSchema } from "../lib/zod";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import bcryptjs from "bcryptjs";
import { sendEmail, sendMultipleEmails } from "@/lib/mailer";
import { emailVerificationTemplate } from "@/emails/emailTemplates";

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

export const SendVerification = async (
  userId: number,
  claimUrl: string | null
) => {
  try {
    const verificationToken = await bcryptjs.hash(userId.toString(), 10);
    const user = await prisma.users.update({
      select: {
        email: true,
        verificationToken: true,
        firstName: true,
      },
      where: {
        id: userId,
      },
      data: {
        verificationToken: verificationToken,
      },
    });

    await sendMultipleEmails({
      email: user.email,
      subject: "Verify your email",
      // text:"Verify your email"
      html: emailVerificationTemplate
        .replaceAll("{{userName}}", user.firstName)
        .replaceAll(
          "{{verification_link}}",
          claimUrl
            ? `${process.env.DOMAIN}/verifyemail?token=${verificationToken}&claimUrl=${claimUrl}`
            : `${process.env.DOMAIN}/verifyemail?token=${verificationToken}`
        ),
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

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
        userType: "USER",
      },
    });
    if (user) {
      throw new Error("Email already exists");
    }
    const hashedPassword = await hash(password, 12);
    const isMatch = await compare(password, hashedPassword);
    // console.log(password, hashedPassword, isMatch, "isMatch");

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

    await SendVerification(newUser.id, null);
    // Redirect to sign in after successful signup
    // redirect("/auth/signin");
    return { status: true, userId: newUser.id };
  } catch (error: any) {
    if (error instanceof ZodError) {
      // console.error(error.errors[0].message);
      return { status: false, message: error.errors[0].message };
    } else {
      // console.error(error.message || error);
      return { status: false, message: String(error.message || error) };
    }
  }
};

export const loginHandler = async ({
  email,
  password,
  userType,
}: {
  email: string;
  password: string;
  userType: string;
}) => {
  try {
    const res = await signIn("credentials", {
      email,
      password,
      userType,
      redirect: false,
    });

    // if (res?.ok) {
    //   // Manually update the session
    //   const session = await getSession({ broadcast: true });
    //   console.log("Session after login:", session);
    // }
    // const session = await getSession({ broadcast: true });
    // console.log(res, "loginres");

    return {
      status: true,
      message: "Logged in successfully",
      res,
    };
  } catch (error: any) {
    const err = error.cause;
    return { status: false, message: err };
  }
};

export const logoutHandler = async () => {
  try {
    const res = await signOut();
    return {
      status: true,
      message: "Logout Successfully",
    };
  } catch (error) {
    console.log(error);
  }
};
