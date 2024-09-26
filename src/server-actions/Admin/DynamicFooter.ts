"use server";

import { prisma } from "../../../prisma/prisma";

export const handleDelete = async (id: number) => {
  try {
    const deletedCategory = await prisma.categoryFooter.delete({
      where: {
        id: id,
      },
    });
    if (!deletedCategory) {
      throw new Error("Something went wrong, Please try again");
    }
    return {
      status: true,
      message: "Category footer deleted successfully",
    };
  } catch (error: any) {
    return { status: false, message: String(error.message) };
  }
};

export const handleStatusUpdate = async (
  status: boolean,
  id: number,
) => {
  try {
    const updatedCategory = await prisma.categoryFooter.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });
    if (!updatedCategory) {
      throw new Error("Something went wrong, Please try again");
    }
    return {
      status: true,
      message: "Category footer updated successfully",
    };
  } catch (error: any) {
    return { status: false, message: String(error.message) };
  }
};
