"use server";
import { ZodError } from "zod";
import { prisma } from "../../prisma/prisma";
import jwt from "jsonwebtoken";
import { SendVerification } from "./authActions";
import { $Enums, Prisma } from "@prisma/client";
import { businessUserSchema } from "@/lib/zod";
import { hash } from "bcryptjs";
import { sendMultipleEmails } from "@/lib/mailer";

export const businessRegister = async (
  formData: {
    name: string;
    jobTitle: string;
    email: string;
    website: string;
    businessName: string;
    phoneNumber: string;
    userType: $Enums.UserType | Prisma.EnumUserTypeFilter<"users"> | undefined;
  },
  claimUrl: string | null
) => {
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

    if (!business) {
      throw new Error("Something went wrong, try again");
    }

    await SendVerification(business.id, claimUrl);

    return { status: true, userId: business.id };
  } catch (error: any) {
    if (error instanceof ZodError) {
      return { status: false, message: error.errors[0].message };
    } else {
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

export const changeBusinessPassword = async (
  data: any,
  claimUrl: string | null
) => {
  try {
    const { password, userId } = data;
    const hashedPassword = await hash(password, 12);
    // console.log(hashedPassword, userId);
    const user = await prisma.users.findFirst({
      where: {
        id: Number(userId),
      },
    });

    if (!user) {
      throw { status: false, message: "Business user not found" }
    }
    const business = await prisma.users.update({
      where: {
        id: Number(userId),
        verify: true,
        userType: "BUSINESS_USER",
      },
      data: {
        password: hashedPassword,
        cpassword: hashedPassword,
        domain: claimUrl,
      },
    });

    if (!business) {
      return { status: false, message: "Something went wrong, try again" };
    }

    console.log(claimUrl, "claimUrl");

    if (claimUrl) {
      const existListing = await prisma.listing.findFirst({
        where: {
          website_link: claimUrl,
        },
      });

      const listing = await prisma.listing.update({
        where: { id: existListing?.id, website_link: claimUrl },
        data: {
          userid: business.id,
          claim: true,
        },
      });

      if (listing) {
        sendMultipleEmails(
          {
            email: business.email,
            subject: `Business Claim For [${claimUrl}] : Consumer Affairs`,
            text: `Your claim for [${claimUrl}] has been successfully done on consumer affairs.`,
          },
          {
            email: "Sonitegss@gmail.com",
            subject: `New Business Claim Added For [${claimUrl}]`,
            text: `New Business Claim Added Added successfully with consumer affairs.`,
          }
        );
      }
      return {
        status: true,
        userId: business.id,
        listing: listing,
        message: `You have successfully claimed [${claimUrl}]`,
      };
    } else {
      sendMultipleEmails(
        {
          email: business.email,
          subject: "Account Verification : Consumer Affairs",
          text: `Your account has been created successfully with consumer affairs.`,
        },
        {
          email: "Sonitegss@gmail.com",
          subject: "New Business User Added",
          text: `New Business User Added successfully with consumer affairs.`,
        }
      );
      return {
        status: true,
        message: "Your account has been created successfully.",
      };
    }
  } catch (error) {
    return { status: false, message: String(error) };
  }
};
