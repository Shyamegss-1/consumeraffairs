"use server";

import { prisma } from "../../../prisma/prisma";

export const handleCreateUpdatePromotionsAds = async () => {
  try {
    const res = await prisma.ads.findMany({});
  } catch (error: any) {
    console.log(error);
  }
};
