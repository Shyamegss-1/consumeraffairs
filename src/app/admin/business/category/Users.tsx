import React from "react";
import { prisma } from "../../../../../prisma/prisma";
import { auth } from "@/auth";
import UserGrid from "./UserGrid";
import { UserType } from "@prisma/client";

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
      category_name: "asc",
    },
  });

  const totalRecord = await prisma.category.count({
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
  });
  return <UserGrid data={data} totalRecord={totalRecord} page={props.page} />;
};

export default Users;
