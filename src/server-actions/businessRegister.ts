"use server";

import { ZodError } from "zod";
import { prisma } from "../../prisma/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { SendVerification } from "./authActions";
import { $Enums, Prisma } from "@prisma/client";
import { businessUserSchema } from "@/lib/zod";

export const businessRegister = async (formData: {
  name: string;
  jobTitle: string;
  email: string;
  website: string;
  businessName: string;
  phoneNumber: string;
  userType: $Enums.UserType | Prisma.EnumUserTypeFilter<"users"> | undefined;
}) => {
  try {
    const {
      name,
      jobTitle,
      email,
      website,
      businessName,
      phoneNumber,
      userType,
    } = await businessUserSchema.parseAsync(formData);

    const whereClause =
      userType === "BUSINESS_USER"
        ? {
            userDetails: {
              website: website,
            },
          }
        : {
            email: email,
          };

    console.log(whereClause, userType);

    const existingBusiness = await prisma.users.findFirst({
      where: whereClause,
    });

    if (existingBusiness) {
      throw new Error(
        userType === "BUSINESS_USER"
          ? "Business already exists with the given website."
          : "User already exists"
      );
    }

    const business = await prisma.users.create({
      data: {
        firstName: name,
        email,
        userType: "BUSINESS_USER",
        userDetails: {
          create: {
            phone: phoneNumber,
            jobTitle,
            website,
            companyName: businessName,
          },
        },
      },
    });

    // const token = await signToken(business);
    // cookies().set("business-token", token, {
    //   path: "/business",
    //   domain: process.env.domain,
    //   maxAge: 300,
    //   httpOnly: true,
    //   secure: false,
    // });

    if (!business) {
      throw new Error("Something went wrong, try again");
    }

    await SendVerification(business.id);

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
