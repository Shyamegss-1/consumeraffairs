"use server";
import { blogValidationSchema } from "@/lib/zod";
import { prisma } from "../../../prisma/prisma";
import { ZodError } from "zod";
import path from "path";

export const handleDelete = async (id: number) => {
  try {
    const deletedCategory = await prisma.blog.delete({
      where: {
        b_id: id,
      },
      include: {
        blog_comment: true,
        faq: true,
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

export const handleStatusUpdate = async (status: boolean, id: number) => {
  try {
    const updatedCategory = await prisma.blog.update({
      where: {
        b_id: id,
      },
      data: {
        b_status: status,
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

export const AddBlog = async (data: {
  title: string;
  blogImage: string;
  blogImageAlt: string;
  businessCategory: number;
  blogCategory: number;
  tags: string;
  slug: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  blogContent: string;
}) => {
  try {
    const _data = await blogValidationSchema.parseAsync(data);

    const blog = await prisma.blog.create({
      data: {
        b_title: data.title,
        b_description: data.blogContent,
        b_image: data.blogImage,
        b_slug: data.slug ? data.slug.replaceAll(" ", "-") : data.title.replaceAll(" ", "-"),
        b_category: data.blogCategory,
        businessCategory: data.businessCategory,
        tags: data.tags,
        metaDescription: data.metaDescription,
        metaKeywords: data.metaKeywords,
        metaTitle: data.metaTitle,
        image_alt: data.blogImageAlt,
      },
    });
    if (!blog) {
      throw new Error("Something went wrong, Please try again");
    }
    return { status: true, message: "Blog has been saved successfully", blog };
  } catch (error: any) {
    console.log(error);
    if (error instanceof ZodError) {
      return {
        status: false,
        message: error.errors[0].message,
        path: error.errors[0].path[0],
      };
    } else {
      return { status: false, message: String(error) };
    }
  }
};
export const updateBlog = async (data: {
  b_id: string;
  title: string;
  blogImage: string;
  blogImageAlt: string;
  businessCategory: number;
  blogCategory: number;
  tags: string;
  slug: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  blogContent: string;
}) => {
  try {
    const _data = await blogValidationSchema.parseAsync(data);

    const existingBlog = await prisma.blog.findUnique({
      where: {
        b_id: Number(data.b_id),
      },
    });
    if (!existingBlog) {
      throw new Error("This blog is not exist in the our database");
    }
    const blog = await prisma.blog.update({
      where: {
        b_id: Number(data.b_id),
      },
      data: {
        b_title: data.title,
        b_description: data.blogContent,
        b_image: data.blogImage,
        b_slug: data.slug ? data.slug : data.title.replaceAll(" ", "-"),
        b_category: data.blogCategory,
        tags: data.tags,
        businessCategory: data.businessCategory,
        metaDescription: data.metaDescription,
        metaKeywords: data.metaKeywords,
        metaTitle: data.metaTitle,
        image_alt: data.blogImageAlt,
      },
    });
    if (!blog) {
      throw new Error("Something went wrong, Please try again");
    }
    return {
      status: true,
      message: "Blog has been updated successfully",
      blog,
    };
  } catch (error: any) {
    console.log(error);
    if (error instanceof ZodError) {
      return {
        status: false,
        message: error.errors[0].message,
        path: error.errors[0].path[0],
      };
    } else {
      return { status: false, message: String(error) };
    }
  }
};
