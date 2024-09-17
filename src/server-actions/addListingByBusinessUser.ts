"use server";
import { prisma } from "../../prisma/prisma";
import { SendVerification } from "./authActions";
import { listingDomain } from "./listingDomain";

export const addListingByBusinessOwner = async (data: {
  userId: string;
  description: string;
  companyEmail: string;
  logo: string;
  websiteUrl: string;
  companyName: string;
  companyNumber: string;
  countryCode: string;
}) => {
  try {
    const { domain, status, error } = await listingDomain(data.websiteUrl);
    if (!status) {
      return { status, message: error };
    }

    console.log({ ...data, websiteUrl: domain });

    const newCompany = await prisma.listing.create({
      data: {
        userid: Number(data.userId),
        about: data.description,
        name: data.companyName,
        slug: domain.replaceAll(".", "-"),
        email: data.companyEmail,
        website_link: domain,
        logo: data.logo,
        date: Date(),
        status: 0,
        companyName: data.companyName,
        companyNumber: data.companyNumber,
        countryCode: data.countryCode,
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
        },
      },
    });
    if (!newCompany) {
      return { status: false, message: "Something went wrong!" };
    }
    await SendVerification(Number(data.userId), domain);
    return {
      status: true,
      message: "Business Lising done successfully,Please claim your business",
      newCompany,
    };
  } catch (error: any) {
    console.log(error);

    return { status: false, message: error.message };
  }
};
