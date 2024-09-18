"use server";
import { extractDomain } from "@/lib/Hooks";
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

    const newCompany = await prisma.listing.create({
      data: {
        userid: Number(data.userId),
        about: data.description,
        name: data.companyName,
        slug: domain.replaceAll(/www\./i, "").replaceAll(".", "-"),
        email: data.companyEmail,
        website_link: domain.replaceAll(/www\./i, ""),
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
export const addListingByAdmin = async (data: {
  userId: string;
  description: string;
  companyEmail: string;
  logo: string;
  websiteUrl: string;
  companyName: string;
  companyNumber: string;
  countryCode: string;
  claim: boolean;
  metaTitle: string;
  metaDescription: string;
  metaTags: string;
}) => {
  try {
    // const { domain, status, error } = await listingDomain(data.websiteUrl);
    const domain = extractDomain(data.websiteUrl);
    if (!domain) {
      return { status: false, message: "Invalid website URL" };
    }

    console.log(data);

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
        status: 1,
        companyName: data.companyName,
        companyNumber: data.companyNumber,
        countryCode: data.countryCode,
        claim: data.claim,
        metaTitle: data.metaTitle,
        metaDescription: data.description,
        metaKeywords: data.metaTags,
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
