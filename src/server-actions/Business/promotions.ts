"use server";

import { prisma } from "../../../prisma/prisma";

export const handleCreateUpdatePromotionsAds = async (
  id: number,
  data: {
    adUrl: string;
    image: string;
    userId: number;
    listingId: number;
  }
) => {
  try {
    const existingAdd = await prisma.ads.findFirst({
      where: {
        id: id,
        status: true,
      },
    });
    console.log(existingAdd);

    if (existingAdd) {
      const updatedAd = await prisma.ads.update({
        where: {
          id: id,
        },
        data: {
          ...data,
        },
      });
      return {
        status: true,
        message: "Ads info has been updated successfully",
        data: updatedAd,
      };
    } else {
      const updatedAd = await prisma.ads.create({
        data: {
          ...data,
        },
      });
      return {
        status: true,
        message: "Ads info has been saved successfully",
        data: updatedAd,
      };
    }
  } catch (error: any) {
    console.log(error);
    return {
      status: true,
      message: String(error),
      data: null,
    };
  }
};

export const getPromotionAds = async (listingId: number, userId: number) => {
  try {
    const ads = await prisma.ads.findMany({
      select: {
        id: true,
        listingId: true,
        userId: true,
        image: true,
        adUrl: true,
      },
      where: {
        listingId: listingId,
        userId: userId,
      },
    });
    if (!ads) {
      return {
        status: false,
        message: "Record not found",
        data: null,
      };
    }
    return {
      status: true,
      message: null,
      data: ads,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Ops! Something went wrong",
      data: null,
    };
  }
};
