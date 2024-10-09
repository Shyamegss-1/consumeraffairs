"use server";
import { prisma } from "../../prisma/prisma";

export const getListing = async (domain: string) => {
  try {
    const listing = await prisma.listing.findMany({
      select: {
        id: true,
        website_link: true,
      },
      where: {
        website_link: {
          contains: domain,
        },
      },
      take: 10,
    });
    if (listing) {
      return { status: true, listing: listing };
    }
    return { status: false, message: "", listing: null };
  } catch (error: any) {
    return { status: false, message: error, listing: null };
  }
};
