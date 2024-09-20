"use server";
import { ReviewStatus } from "@prisma/client";
import { prisma } from "../../../prisma/prisma";
import { changePasswordSchema } from "@/lib/zod";
import { hash } from "bcryptjs";
import { ZodError } from "zod";

export const handleDelete = async (id: number) => {
  try {
    const deletedCategory = await prisma.users.delete({
      where: {
        id: id,
      },
      include: {
        reviews: true,
        listing: true,
        userDetails: true,
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

export const handleStatusUpdate = async (status: boolean, id: number) => {
  try {
    const updatedCategory = await prisma.users.update({
      where: {
        id: id,
      },
      data: {
        active: status,
      },
    });
    if (!updatedCategory) {
      throw new Error("Something went wrong, Please try again");
    }
    return {
      status: true,
      message: "User status updated successfully",
    };
  } catch (error: any) {
    console.log(error);
    return { status: false, message: String(error.message) };
  }
};

export const changePassword = async (formData: {
  id: number | null;
  password: string;
  confirmPassword: string;
}) => {
  try {
    console.log(formData);
    
    if (!formData.id) {
      throw new Error("Please provide user id");
    }
    const data = await changePasswordSchema.parseAsync({
      password: formData.password,
      confirmPassword: formData.password,
    });

    const hashedPassword = await hash(data.password, 10);
    const updatedCategory = await prisma.users.update({
      where: {
        id: formData.id,
      },
      data: {
        password: hashedPassword,
        cpassword: hashedPassword,
      },
    });
    if (!updatedCategory) {
      throw new Error("Something went wrong, Please try again");
    }
    return {
      status: true,
      message: "Password updated successfully",
    };
  } catch (error: any) {
    if (error instanceof ZodError) {
      return { status: false, message: error.issues[0].message };
    } else {
      return {
        status: false,
        message: String(error.message),
      };
    }
  }
};
