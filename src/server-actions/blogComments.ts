"use server";
import { prisma } from "../../prisma/prisma";

export const postComments = async (data: {
  name: string;
  email: string;
  message: string;
  blogId: number;
  userId: number | null;
}) => {
  try {
    console.log(data);

    if (!data.userId) {
      if (!data.name) {
        throw new Error("Please enter name");
      }
      if (!data.email) {
        throw new Error("Please enter email");
      }
    }
    if (!data.message || data.message === "") {
      throw new Error("Please enter message");
    }
    const comment = await prisma.blog_comment.create({
      data: {
        comment: data.message,
        blog_id: data.blogId,
        user_id: data.userId,
        name: data.name,
        email: data.email,
      },
    });
    if (!comment) {
      throw new Error("Oops! something went wrong.");
    }
    return { status: true, message: "Comment posted successfully", comment };
  } catch (error: any) {
    console.log(error);
    return { status: false, message: String(error) };
  }
};
