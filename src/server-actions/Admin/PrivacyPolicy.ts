"use server";
import { prisma } from "../../../prisma/prisma";


export const handleCreateUpdatePrivacyPolicy = async (data: {
  id: number | null;
  content: string;
}) => {
  try {
    let Footer;
    if (data.id) {
      Footer = await prisma.privacyPolicy.update({
        where: {
          id: Number(data.id),
        },
        data: {
          content: data.content,
        },
      });
    } else {
      Footer = await prisma.privacyPolicy.create({
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
      message: `Privacy Policy has been ${
        data.id ? "updated" : "added"
      } successfully`,
      Footer,
    };
  } catch (error: any) {
    return { status: false, message: String(error) };
  }
};

