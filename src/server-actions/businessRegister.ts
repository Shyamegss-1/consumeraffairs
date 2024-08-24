"use server";

import { ZodError } from "zod";
import { prisma } from "../../prisma/prisma";

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
