"use server";
import { ReviewStatus } from "@prisma/client";
import { prisma } from "../../../prisma/prisma";

export const addBusinessCategory = async (formData: {
  cid: number | null;
  category_name: string;
  category_icon: string;
  description: string;
  popular: boolean;
  status: boolean;
}) => {
  try {
    const category = await prisma.category.findFirst({
      where: {
        category_name: formData.category_name,
      },
    });

    if (formData.cid) {
      const categoryUpdate = await prisma.category.update({
        where: {
          cid: formData.cid,
        },
        data: {
          category_name: formData.category_name,
          description: formData.description,
          category_icon: formData.category_icon,
          popular: formData.popular,
          status: formData.status,
        },
      });
      return {
        status: true,
        message: "Blog category updated successfully",
        category: categoryUpdate,
      };
    }

    if (category) {
      throw new Error("Category already exists");
    }
    const newCategory = await prisma.category.create({
      data: {
        category_name: formData.category_name,
        description: formData.description,
        category_slug: formData.category_name.replaceAll(" ", "-"),
        status: formData.status,
        date: Date(),
      },
    });
    if (!newCategory) {
      throw new Error("Something went wrong, Please try again");
    }
    return {
      status: true,
      message: "Blog category added successfully",
      category: newCategory,
    };
  } catch (error: any) {
    return { status: false, message: String(error.message) };
  }
};

export const handleDelete = async (id: number) => {
  try {
    const deletedCategory = await prisma.category.delete({
      where: {
        cid: id,
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
    return { status: false, message: String(error.message) };
  }
};

export const handleStatusUpdate = async (
  status: boolean,
  id: number,
  key: string
) => {
  try {
    const updatedCategory = await prisma.category.update({
      where: {
        cid: id,
      },
      data: {
        [key]: status,
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
    return { status: false, message: String(error.message) };
  }
};

export const getBusinessCategoryData = async () => {
  try {
    const businessCategories = await prisma.category.findMany({
      where: {
        status: true,
      },
      select: {
        cid: true,
        category_name: true,
      },
      orderBy: {
        category_name: "asc",
      },
    });
    if (!businessCategories) {
      throw new Error("Something went wrong, Please try again");
    }
    return {
      businessCategories,
      status: true,
      message: "Category status updated successfully",
    };
  } catch (error: any) {
    console.log(error);
    return { status: false, message: String(error.message) };
  }
};
