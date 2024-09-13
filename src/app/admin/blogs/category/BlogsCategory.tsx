import React from "react";
import { auth } from "@/auth";
import UserGrid from "./BlogCategoryGrid";
import { prisma } from "../../../../../prisma/prisma";
import BlogCategoryGrid from "./BlogCategoryGrid";

type Props = {
  page: number;
  pageSize: number;
  search: string;
};

const BlogsCategory = async (props: Props) => {
  const session = await auth();
  const skip = (props.page - 1) * props.pageSize;
  const data = await prisma.blog_category.findMany({
    where: {
      OR: [
        {
          b_c_name: {
            contains: props.search,
          },
        },
        {
          b_c_name: {
            contains: props.search,
          },
        },
      ],
    },
    skip,
    take: props.pageSize,
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalRecord = await prisma.blog_category.count();

  // console.log(data, "data", session?.user.id);
  return <BlogCategoryGrid data={data} totalRecord={totalRecord} />;
};

export default BlogsCategory;
