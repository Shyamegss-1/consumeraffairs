import React from "react";
import { prisma } from "../../../../../prisma/prisma";
import { auth } from "@/auth";
import FooterGrid from "./FooterGrid";

type Props = {
  page: number;
  pageSize: number;
  search: string;
};

const Users = async (props: Props) => {
  const session = await auth();
  const skip = (props.page - 1) * props.pageSize;
  const data = await prisma.categoryFooter.findMany({
    where: {
      OR: [
        {
          content: {
            contains: props.search,
          },
        },
        {
          category: {
            category_name: {
              contains: props.search,
            },
          },
        },
      ],
    },
    include: {
      category: true,
    },
    skip,
    take: props.pageSize,
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalRecord = await prisma.categoryFooter.count();

  // console.log(data, "data", session?.user.id);
  return <FooterGrid data={data} totalRecord={totalRecord} />;
};

export default Users;