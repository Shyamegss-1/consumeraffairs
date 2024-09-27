"use server";
import { sendMultipleEmails } from "@/lib/mailer";
import { prisma } from "../../../prisma/prisma";

export const handleDelete = async (id: number) => {
  try {
    const deletedBusiness = await prisma.listing.delete({
      where: {
        id: id,
      },
      include: {
        user: true,
        reviews:true,
        social_links:true
      },
    });
    if (!deletedBusiness) {
      throw new Error("Something went wrong, Please try again");
    }
    await sendMultipleEmails({
      email: deletedBusiness?.user?.email,
      subject: `Congratulations! Your business profile has been deleted at My Reviews.`,
      html: "",
      text: `Hi ${deletedBusiness?.user?.firstName}
Your business profile at My Reviews has just been deleted. Thanks for helping to build trust online and empower shoppers everywhere.
Best regards,
Admin
My Reviews
`,
    });
    return {
      status: true,
      message: "Business deleted successfully",
    };
  } catch (error: any) {
    console.log(error);
    return { status: false, message: String(error.message) };
  }
};

export const handleStatusUpdate = async (
  status: boolean,
  id: number,
  key: any
) => {
  try {
    const updatedBusiness = await prisma.listing.update({
      where: {
        id: id,
      },
      data: {
        [key]: status,
      },
      include: {
        user: true,
      },
    });
    if (!updatedBusiness) {
      throw new Error("Something went wrong, Please try again");
    }

    await sendMultipleEmails({
      email: updatedBusiness?.user?.email,
      subject: `Congratulations! Your business status at My Reviews has been ${
        key === "claim"
          ? `${updatedBusiness.claim ? "Claimed" : "Unclaimed"}`
          : `${updatedBusiness.status ? "Active" : "Inactive"}`
      }.`,
      html: "",
      text: `Hi ${updatedBusiness?.user?.firstName}
Your business status at My Reviews has just been ${
        key === "claim"
          ? `${updatedBusiness.claim ? "Claimed" : "Unclaimed"}`
          : `${updatedBusiness.status ? "Active" : "Inactive"}`
      }. Thanks for helping to build trust online and empower shoppers everywhere.
Best regards,
Admin
My Reviews
`,
    });
    return {
      status: true,
      message: "Business status updated successfully",
    };
  } catch (error: any) {
    console.log(error);
    return { status: false, message: String(error.message) };
  }
};
