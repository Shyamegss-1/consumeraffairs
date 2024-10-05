import React from "react";
import { prisma } from "../../../../prisma/prisma";
import { auth } from "@/auth";
import ResponsiveTable from "./ResponsiveTable";
import Image from "next/image";

type Props = {
  page: number;
  pageSize: number;
  search: string;
};

const Listing = async (props: Props) => {
  const session = await auth();
  const skip = (props.page - 1) * props.pageSize;
  const data = await prisma.listing.findMany({
    where: {
      userid: Number(session?.user.id),
      name: {
        contains: props.search,
      },
    },
    skip,
    take: props.pageSize,
    orderBy: {
      createdAt: "desc",
    },
  });
  const totalRecord = await prisma.listing.count({
    where: {
      userid: Number(session?.user.id),
      name: {
        contains: props.search,
      },
    },
  });

  // console.log(data, "data", session?.user.id);
  return (
    <ResponsiveTable data={data} totalRecord={totalRecord} page={props.page} />
  );
};

export default Listing;
