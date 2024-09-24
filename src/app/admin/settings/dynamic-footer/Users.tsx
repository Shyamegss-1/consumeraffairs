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
  const data = await prisma.category.findMany({
    where: {
      OR: [
        {
          category_name: {
            contains: props.search,
          },
        },
        {
          category_slug: {
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

  const totalRecord = await prisma.users.count();

  // console.log(data, "data", session?.user.id);
  return <FooterGrid data={data} totalRecord={totalRecord} />;
};

export default Users;
