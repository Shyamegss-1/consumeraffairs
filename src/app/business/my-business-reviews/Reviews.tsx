import React from "react";
import { prisma } from "../../../../prisma/prisma";
import MyReviewsGrid from "./MyReviewsGrid";

type Props = {
  page: number;
  pageSize: number;
  search: string;
};

const Reviews = async (props: Props) => {
  const skip = (props.page - 1) * props.pageSize;
  const data = await prisma.review.findMany({
    where: {
      company_id: 1,
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
  return <MyReviewsGrid data={data} />;
};

export default Reviews;
