"use server";

import { checkConnection } from "@/lib/Hooks";
import { prisma } from "../../prisma/prisma";

export const getCompanyDetails = async (domain: string, user: any) => {
  try {
    await checkConnection();
    const company = await prisma.listing.findFirst({
      where: {
        website_link: domain.replaceAll("-", "."),
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
        },
      },
    });
    if (company) {
      return company;
    } else {
      const newCompany = await prisma.listing.create({
        data: {
          userid: user ? Number(user?.id) : null,
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
          reviews: {
            include: {
              user: true,
            },
          },
        },
      });
      return newCompany;
    }
  } catch (error) {
    return String(error);
  } finally {
    await prisma.$disconnect();
  }
};
