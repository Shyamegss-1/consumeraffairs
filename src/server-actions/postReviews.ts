"use server";
import { reviewFormSchema } from "@/lib/zod";
import { prisma } from "../../prisma/prisma";
import { ZodError } from "zod";

export const postReviews = async (data: any) => {
  try {
    const _data = reviewFormSchema.parseAsync({
      rating: Number(data.rating),
      comment: data.comment,
    });
    const reviews = await prisma.review.create({
      data: {
        review_user_id: data.userId ? data.userId : 0,
        review_company_id: data.review_company_id ? data.review_company_id : 0,
        review_title: data.title,
        review_comment: data.comment,
        review_date: data.date,
        review_rating: data.rating,
        review_status: 0,
        flag: false,
      },
    });
    console.log(reviews);
    
    return String(reviews);
  } catch (error) {
    if (error instanceof ZodError) {
      return error.errors[0].message;
    } else {
      return String(error);
    }
  }
};
