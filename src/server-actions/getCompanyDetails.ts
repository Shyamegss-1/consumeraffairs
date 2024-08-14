"use server";

import { prisma } from "../../prisma/prisma";

export const getCompanyDetails = async (domain: string) => {
  try {



    const company = await prisma.listing.findFirst({
      where: {
        website_link: domain.replaceAll("-", "."),
      },
      include: {
        reviews: true,
      },
    });
    if (company) {
      return company;
    } else {
      const newCompany = await prisma.listing.create({
        data: {
          userid: 0,
          category_id: 0,
          about: "",
          email: "",
          number: "",
          address: "",
          verify_code: "0",
          website_link: domain.replaceAll("-", "."),
          name: domain.replaceAll("-", "."),
          slug: domain,
          claim: 0,
          status: 0,
          logo: "logo.png",
          date: Date(),
        },
        include: {
          reviews: true,
        },
      });
      return newCompany;
    }
  } catch (error) {
    return String(error);
  }
};
