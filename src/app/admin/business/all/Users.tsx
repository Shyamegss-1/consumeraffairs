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
  const data = await prisma.listing.findMany({
    where: {
      
      OR: [
        {
          companyName: {
            contains: props.search,
          },
        },
        {
          email: {
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
  return <UserGrid data={data} totalRecord={totalRecord} />;
};

export default Users;
