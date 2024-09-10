import React from "react";
import { prisma } from "../../../../prisma/prisma";
import { auth } from "@/auth";
import BusinessPage from "./BusinessPage";

type Props = {};

const BusinessProfile = async (props: Props) => {
  const session = await auth();
  const businessDetails = await prisma.users.findUnique({
    where: {
      id: Number(session?.user.id),
    },
    include: {
      _count: {
        select: {
          reviews: true,
        },
      },
      listing: {
        include: {
          social_links: true,
        },
      },
      userDetails: true,
    },
  });

  return <BusinessPage businessDetails={businessDetails} />;
};

export default BusinessProfile;
