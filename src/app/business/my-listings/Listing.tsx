import React from "react";
import { prisma } from "../../../../prisma/prisma";
import { auth } from "@/auth";
import ResponsiveTable from "./ResponsiveTable";
import Image from "next/image";

type Props = {};

const Listing = async (props: Props) => {
  const session = await auth();
  const data = await prisma.listing.findMany({
    where: {
      userid: Number(session?.user.id),
    },
  });

  // console.log(data, "data", session?.user.id);
  return data.length ? (
    <ResponsiveTable data={data} />
  ) : (
    <div className="w-full min-h-96">
      <div className="flex justify-between gap-10 items-center flex-col h-full">
        <Image src={"/delete.png"} width={200} height={200} alt="not found"/>
        <p className="text-3xl font-bold text-gray-400">No Record Found</p>
      </div>
    </div>
  );
};

export default Listing;
