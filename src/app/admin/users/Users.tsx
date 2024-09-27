import React from "react";
import { prisma } from "../../../../prisma/prisma";
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
  const data = await prisma.users.findMany({
    where: {
      NOT: [
        {
          userType: {
            equals: "ADMIN",
          },
        },
        {
          userType: {
            equals: "BUSINESS_USER",
          },
        },
      ],
      OR: [
        {
          firstName: {
            contains: props.search,
          },
        },
        {
          lastName: {
            contains: props.search,
          },
        },
        {
          email: {
            contains: props.search,
          },
        },
        {
          mobile_number: {
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
