"use server";
import { reviewFormSchema } from "@/lib/zod";
import { prisma } from "../../prisma/prisma";
import { ZodError } from "zod";
import { auth } from "@/auth";
import { title } from "process";
import { sendEmail } from "@/lib/mailer";

interface review {
  rating: string;
  dateOfExperience: string;
  title: string;
  comment: string;
  companyId: number;
  userId: number | null;
}

export const postReviews = async (data: review) => {
  try {
    // let oldData = {
    //   review_user_id: data.userId ? data.userId : 0,
    //   review_company_id: data.review_company_id ? data.review_company_id : 0,
    //   review_title: data.title,
    //   review_comment: data.comment,
    //   review_date: data.date,
    //   review_rating: _data.rating,
    //   review_status: 0,
    //   flag: false,
    // };
    // console.log(oldData, "hghfghfg");

    const { rating, comment } = await reviewFormSchema.parseAsync({
      title: data.title,
      rating: Number(data.rating),
      comment: data.comment,
    });

    const session = await auth();
    const user = Number(session?.user?.id);

    const reviews = await prisma.review.create({
      data: {
        review_comment: comment,
        dateOfExperience: data.dateOfExperience,
        review_rating: Number(rating),
        review_title: data.title,
        company_id: data.companyId,
        user_id: data.userId ? data.userId : user,
      },
      include: {
        user: true,
      },
    });
    await sendEmail(reviews.user.email, {
      subject: "New Review Listed",
      text: `Your review has been added successfully`,
    });
    return { status: true, reviews };
  } catch (error) {
    if (error instanceof ZodError) {
      return { status: false, error: error.errors[0].message };
    } else {
      console.log(error);
      return { status: false, error: String(error) };
    }
  }
};
