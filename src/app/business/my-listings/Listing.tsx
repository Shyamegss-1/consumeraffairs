import React from "react";
import { prisma } from "../../../../prisma/prisma";
import { auth } from "@/auth";
import ResponsiveTable from "./ResponsiveTable";

type Props = {};

const Listing = async (props: Props) => {
  const session = await auth();
  const data = await prisma.listing.findMany({
    where: {
      userid: Number(session?.user.id),
    },
  });

  console.log(data, "data", session?.user.id);
  return <ResponsiveTable data={data} />;
};

export default Listing;
