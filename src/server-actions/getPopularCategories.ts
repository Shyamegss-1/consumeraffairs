"use server";
import { categories } from "@/app/all-categories/PopularCategorySection";
import { prisma } from "../../prisma/prisma";

export const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        status: 1,
      },
    });

    const popularCategories = await categories.filter(
      (item, i) => item.popular === 1
    );
    //   console.log(categories,"jhghjgh");
    return {
      allCategories: categories
        ? (categories as categories[])
        : ([] as categories[]),
      popularCategories: popularCategories
        ? (popularCategories as categories[])
        : ([] as categories[]),
    };
  } catch (error) {
    return String(error);
  }
};
