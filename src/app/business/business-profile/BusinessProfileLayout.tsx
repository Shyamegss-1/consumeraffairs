import React from "react";
import { prisma } from "../../../../prisma/prisma";
import { auth } from "@/auth";

type Props = {};

const BusinessProfileLayout = async (props: Props) => {
  const session = await auth();
  const businessDetails = await prisma.users.findUnique({
    where: {
      id: Number(session?.user.id),
    },
  });
  return <div>BusinessProfileLayout</div>;
};

export default BusinessProfileLayout;
