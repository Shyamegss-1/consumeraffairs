"use server"
import { prisma } from "../../../../prisma/prisma";

export const CategoryOptions = async () => {
  const list = await prisma.category.findMany({
    select: {
      cid: true,
      category_name: true,
    },
  });

  return list;
};
