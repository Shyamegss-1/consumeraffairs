"use server";

import { ReviewStatus } from "@prisma/client";
import { prisma } from "../../../prisma/prisma";
import { sendMultipleEmails } from "@/lib/mailer";

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
      include: {
        user: true,
      },
    });
    if (!updatedCategory) {
      throw new Error("Something went wrong, Please try again");
    }
    await sendMultipleEmails({
      email: updatedCategory.user.email,
      subject: `Congratulations! Your review has been ${updatedCategory.review_status}.`,
      html: "",
      text: `Hi ${updatedCategory.user.firstName}
Your review of Avast has just been ${updatedCategory.review_status}. Thanks for helping to build trust online and empower shoppers everywhere.
Best regards,
Admin
My Reviews
`,
    });
    return {
      status: true,
      message: "Category status updated successfully",
    };
  } catch (error: any) {
    console.log(error);
    return { status: false, message: String(error.message) };
  }
};
