import React from "react";
import { prisma } from "../../../../prisma/prisma";
import { auth } from "@/auth";
import UserGrid from "./BlogGrid";
import { UserType } from "@prisma/client";
import BlogGrid from "./BlogGrid";

type Props = {
  page: number;
  pageSize: number;
  search: string;
};

const Blogs = async (props: Props) => {
  const session = await auth();
  const skip = (props.page - 1) * props.pageSize;
  const data = await prisma.blog.findMany({
    where: {
      OR: [
        {
          b_title: {
            contains: props.search,
          },
        },
        {
          b_description: {
            contains: props.search,
          },
        },
      ],
    },
    include: {
      blogCategory: true,
      Category: true,
    },
    skip,
    take: props.pageSize,
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalRecord = await prisma.blog.count({
    where: {
      OR: [
        {
          b_title: {
            contains: props.search,
          },
        },
        {
          b_description: {
            contains: props.search,
          },
        },
      ],
    },
  });

  // console.log(data, "data", session?.user.id);
  return <BlogGrid data={data} totalRecord={totalRecord} page={props.page}/>;
};

export default Blogs;
