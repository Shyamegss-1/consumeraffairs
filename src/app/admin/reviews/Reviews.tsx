import React from "react";
import { prisma } from "../../../../prisma/prisma";
import { auth } from "@/auth";
import UserGrid from "./ReviewGrid";
import { UserType } from "@prisma/client";

type Props = {
  page: number;
  pageSize: number;
  search: string;
};

const Users = async (props: Props) => {
  const session = await auth();
  const skip = (props.page - 1) * props.pageSize;
  const data = await prisma.review.findMany({
    where: {
      OR: [
        {
          review_title: {
            contains: props.search,
          },
        },
        {
          review_comment: {
            contains: props.search,
          },
        },
        {
          company: {
            name: {
              contains: props.search,
            },
          },
        },
      ],
    },
    include: {
      user: true,
      company: true,
    },
    skip,
    take: props.pageSize,
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalRecord = await prisma.review.count();

  // console.log(data, "data", session?.user.id);
  return <UserGrid data={data} totalRecord={totalRecord} page={props.page}/>;
};

export default Users;
