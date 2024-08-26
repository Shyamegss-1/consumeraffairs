"use server";

import { ZodError } from "zod";
import { prisma } from "../../prisma/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const businessRegister = async (formData: {
  name: string;
  jobTitle: string;
  email: string;
  website: string;
  businessName: string;
  phoneNumber: string;
}) => {
  try {
    const { name, jobTitle, email, website, businessName, phoneNumber } =
      formData;

    const existingBusiness = await prisma.business_users.findFirst({
      where: {
        website: website,
      },
    });

    if (existingBusiness) {
      throw new Error("Business already exists with the given website.");
    }

    const business = await prisma.business_users.create({
      data: {
        firstName: name,
        jobTitle,
        phone: phoneNumber,
        website,
        email,
        companyName: businessName,
        accountType: "normail",
      },
    });

    const token = await signToken(business);
    cookies().set("business-token", token, {
      path: "/business",
      domain: process.env.domain,
      maxAge: 300,
      httpOnly: true,
      secure: false,
    });

    if (!business) {
      throw new Error("Something went wrong, try again");
    }
    console.log(business);
    return { status: true, userId: business.id };
  } catch (error: any) {
    console.error(error);
    if (error instanceof ZodError) {
      // console.error(error.errors[0].message);
      return { status: false, message: error.errors[0].message };
    } else {
      // console.error(error.message || error);
      return { status: false, message: String(error.message || error) };
    }
  }
};

const secret = process.env.JWT_SECRET as string;

export const signToken = (data: any) => {
  return jwt.sign({ ...data }, secret, {
    expiresIn: "1d",
  });
};
