"use server";
import { ZodError } from "zod";
import { prisma } from "../../prisma/prisma";
import jwt from "jsonwebtoken";
import { SendVerification } from "./authActions";
import { $Enums, Prisma } from "@prisma/client";
import { businessUserSchema } from "@/lib/zod";
import { hash } from "bcryptjs";
import { sendMultipleEmails } from "@/lib/mailer";
import { auth } from "@/auth";
import { toast } from "sonner";

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
        listing: {
          create: {
            name: businessName,
            email: email,
            slug: website.replaceAll(".", "-"),
            website_link: website,
            claim: true,
            about: "",
            address: "",
            verify_code: "0",
            status: true,
            logo: null,
            date: Date(),
          },
        },
      },
    });

    if (!business) {
      throw new Error("Something went wrong, try again");
    }
    // const listing = await prisma.listing.create({
    //   data:{
    //     about:"",
    //     email:"",
    //     name:"",
    //     slug:"",
    //     website_link:"",
    //     claim:true
    //   }
    // })

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
      throw { status: false, message: "Business user not found" };
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

export const handleUpdateBusinessProfile = async (formData: any) => {
  try {
    const session = await auth();
    if (!session) {
      return { status: false, message: "Session Expired!." };
    }

    const businessUser = await prisma.users.update({
      where: {
        id: Number(session.user.id),
      },
      data: {
        listing: {
          update: {
            where: {
              id: Number(formData.id),
            },
            data: {
              about: formData.about,
              address: formData.address,
              banner: formData.banner,
              businessCategory: formData.businessCategory,
              category_id: formData.businessCategory,
              city: formData.city,
              country: formData.country,
              companyName: formData.businessName,
              countryCode: formData.countryCode,
              emailID_1: formData.emailID_1,
              emailID_2: formData.emailID_2,
              emailID_3: formData.emailID_3,
              emailID_1_purpose: formData.emailID_1_purpose,
              emailID_2_purpose: formData.emailID_2_purpose,
              emailID_3_purpose: formData.emailID_3_purpose,
              companyNumber: formData.companyNumber,
              logo: formData.logo,
              jobTitle: formData.jobRole,
            },
          },
        },
      },
      select: {
        listing: true,
      },
    });
    if (!businessUser) {
      return { status: false, message: "Business Profile updation failed!" };
    }
    return { status: true, message: "Business Profile updated successfully" };
  } catch (error: any) {
    toast.error(String(error));
  }
};

export const uploadPromotions = (formData: FormData) => {
  console.log(formData);
};
