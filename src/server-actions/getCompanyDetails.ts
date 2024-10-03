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
          where: {
            NOT: {
              OR: [
                { review_status: "Inactive" },
                { review_status: "Moderation" },
              ],
            },
          },
          include: {
            user: true,
          },
        },
      },
    });
    console.log(company);
    
    if (company) {
      return company;
    } else {
      const newCompany = await prisma.listing.create({
        data: {
          userid: user ? Number(user?.id) : null,
          about: "",
          email: "",
          address: "",
          verify_code: "0",
          website_link: domain.replaceAll("-", "."),
          name: domain.replaceAll("-", "."),
          slug: domain,
          claim: false,
          status: true,
          logo: null,
          date: Date(),
        },
        include: {
          reviews: {
            where: {
              NOT: {
                OR: [
                  { review_status: "Inactive" },
                  { review_status: "Moderation" },
                ],
              },
            },
            include: {
              user: true,
            },
          },
        },
      });
      // console.log(newCompany);

      return newCompany;
    }
  } catch (error) {
    return String(error);
  } finally {
    await prisma.$disconnect();
  }
};
