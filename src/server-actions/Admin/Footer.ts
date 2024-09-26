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

export const handleCreateCategoryFooter = async (data: {
  id: string | null;
  category: string;
  content: string;
}) => {
  try {
    let CategoryFooter;
    if (data.id) {
      CategoryFooter = await prisma.categoryFooter.update({
        where: {
          id: Number(data.id),
        },
        data: {
          content: data.content,
          categoryId: Number(data.category),
        },
      });
    } else {
      CategoryFooter = await prisma.categoryFooter.create({
        data: {
          content: data.content,
          categoryId: Number(data.category),
        },
      });
    }
    if (!CategoryFooter) {
      return { status: false, message: "Something went wrong" };
    }
    return {
      status: true,
      message: `Category footer has been ${
        data.id ? "updated" : "added"
      } successfully`,
      CategoryFooter,
    };
  } catch (error: any) {
    return { status: false, message: String(error) };
  }
};
export const handleCreateUpdateFooter = async (data: {
  id: number | null;
  content: string;
}) => {
  try {
    let Footer;
    if (data.id) {
      Footer = await prisma.footer.update({
        where: {
          id: Number(data.id),
        },
        data: {
          content: data.content,
        },
      });
    } else {
      Footer = await prisma.footer.create({
        data: {
          content: data.content,
        },
      });
    }
    if (!Footer) {
      return { status: false, message: "Something went wrong" };
    }
    return {
      status: true,
      message: `Footer content has been ${
        data.id ? "updated" : "added"
      } successfully`,
      Footer,
    };
  } catch (error: any) {
    return { status: false, message: String(error) };
  }
};
export const handleSeo = async (data: {
  id: number | null;
  pageName: any;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}) => {
  try {
    let Footer;
    if (data.id) {
      Footer = await prisma.inner_seo.update({
        where: {
          id: Number(data.id),
        },
        data: {
          page_id: Number(data.pageName),
          title: data.metaTitle,
          keywords: data.metaKeywords,
          description: data.metaDescription,
        },
      });
    } else {
      Footer = await prisma.inner_seo.create({
        data: {
          page_id: Number(data.pageName),
          title: data.metaTitle,
          keywords: data.metaKeywords,
          description: data.metaDescription,
        },
      });
    }
    if (!Footer) {
      return { status: false, message: "Something went wrong" };
    }
    return {
      status: true,
      message: `SEO has been ${
        data.id ? "updated" : "added"
      } successfully`,
      Footer,
    };
  } catch (error: any) {
    return { status: false, message: String(error) };
  }
};
