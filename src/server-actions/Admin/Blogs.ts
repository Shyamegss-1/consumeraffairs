"use server";
import { prisma } from "../../../prisma/prisma";

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
    const blog = await prisma.blog.create({
      data: {
        b_title: data.title,
        b_description: data.blogContent,
        b_image: data.blogImage,
        b_slug: data.slug ? data.slug : data.title.replaceAll(" ", "-"),
        b_category: data.blogCategory,
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
    return { status: true, message: "Blog has been saved successfully", blog };
  } catch (error: any) {
    console.log(error);
    return { status: false, message: String(error) };
  }
};
