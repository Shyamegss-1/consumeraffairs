"use server";
import { isUrlValid } from "@/lib/Hooks";
import { prisma } from "../../prisma/prisma";

export const listingDomain = async (domain: any) => {
  try {
    if (!domain) throw "Please enter domain";
    // let _url = true
    const _url = await isUrlValid(domain);
    if (_url) {
      const url = new URL(domain);
      const _domain = url.hostname;
      console.log(_domain, "ghjgjhg");
      return { status: true, domain: _domain };
    } else if (/^(?!:\/\/)([a-zA-Z0-9-_]{1,63}\.)+[a-zA-Z]{2,}$/.test(domain)) {
      return { status: true, domain: domain };
    } else {
      throw `[${domain}] is not a valid domain name`;
    }
  } catch (error: any) {
    return { status: false, error: error };
  }
};

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
