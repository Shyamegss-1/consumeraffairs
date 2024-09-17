"use server";

import { b_c_Status } from "@prisma/client";
import { prisma } from "../../prisma/prisma";

export const addBlogCategory = async (formData: {
  b_c_id: number | null;
  categoryName: string;
  description: string;
}) => {
  try {
    const category = await prisma.blog_category.findFirst({
      where: {
        b_c_name: formData.categoryName,
      },
    });

    if (formData.b_c_id) {
      const categoryUpdate = await prisma.blog_category.update({
        where: {
          b_c_id: formData.b_c_id,
        },
        data: {
          b_c_name: formData.categoryName,
          b_c_description: formData.description,
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
    const newCategory = await prisma.blog_category.create({
      data: {
        b_c_name: formData.categoryName,
        b_c_description: formData.description,
        b_c_slug: formData.categoryName.replaceAll(" ", "-"),
        b__c_status: "Active",
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
    console.log(error);
    return { status: false, message: String(error.message) };
  }
};

export const handleStatusUpdate = async (status: b_c_Status, id: number) => {
  try {
    const updatedCategory = await prisma.blog_category.update({
      where: {
        b_c_id: id,
      },
      data: {
        b__c_status: status,
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

export const handleDelete = async (id: number) => {
  try {
    const deletedCategory = await prisma.blog_category.delete({
      where: {
        b_c_id: id,
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
