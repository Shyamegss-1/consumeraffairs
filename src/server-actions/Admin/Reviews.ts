"use server";

import { ReviewStatus } from "@prisma/client";
import { prisma } from "../../../prisma/prisma";

export const handleDelete = async (id: number) => {
  try {
    const deletedCategory = await prisma.review.delete({
      where: {
        id: id,
      },
    });
    if (!deletedCategory) {
      throw new Error("Something went wrong, Please try again");
    }
    return {
      status: true,
      message: "Category deleted successfully",
    };
  } catch (error: any) {
    console.log(error);
    return { status: false, message: String(error.message) };
  }
};

export const handleStatusUpdate = async (status: ReviewStatus, id: number) => {
  try {
    const updatedCategory = await prisma.review.update({
      where: {
        id: id,
      },
      data: {
        review_status: status,
      },
    });
    if (!updatedCategory) {
      throw new Error("Something went wrong, Please try again");
    }
    return {
      status: true,
      message: "Category status updated successfully",
    };
  } catch (error: any) {
    console.log(error);
    return { status: false, message: String(error.message) };
  }
};
