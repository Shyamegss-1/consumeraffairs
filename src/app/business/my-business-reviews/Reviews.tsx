import React from "react";
import { prisma } from "../../../../prisma/prisma";
import MyReviewsGrid from "./MyReviewsGrid";
import { auth } from "@/auth";

type Props = {
  page: number;
  pageSize: number;
  search: string;
  session: any;
};

const Reviews = async (props: Props) => {
  const skip = (props.page - 1) * props.pageSize;
  const data = await prisma.review.findMany({
    where: {
      company_id: Number(props.session?.user.id),
      review_comment: {
        contains: props.search,
      },
    },
    include: {
      user: true,
    },
    skip,
    take: props.pageSize,
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalRecord = await prisma.review.count({
    where: {
      company_id: Number(props.session?.user.id),
      review_comment: {
        contains: props.search,
      },
    },
  });

  return (
    <MyReviewsGrid data={data} totalRecord={totalRecord} page={props.page} />
  );
};

export default Reviews;
