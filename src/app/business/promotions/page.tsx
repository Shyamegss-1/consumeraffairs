import BusinessAuthLayout from "@/components/Layouts/businessAdminLayout/BusinessAuthLayout";
import Image from "next/image";
import React, { Suspense } from "react";
import Advertisemnet from "./Advertisemnet";
import Media from "./Media";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "../../../../prisma/prisma";
import { getPromotionAds } from "@/server-actions/Business/promotions";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  if (!(session?.user.userType === "BUSINESS_USER")) {
    redirect("/business/login");
  }

  const listing = await prisma.listing.findFirst({
    select: {
      id: true,
      name: true,
    },
    where: {
      userid: Number(session.user.id),
    },
  });
  const { data } = await getPromotionAds(
    Number(listing?.id),
    Number(session.user.id)
  );
  // console.log(res,"res",listing);

  return (
    <BusinessAuthLayout>
      <div className="max-w-screen-xl mx-auto ">
        <h3 className="text-center font-bold text-4xl my-10">Promotions</h3>
        <div className="grid grid-cols-12 gap-4 mb-20">
          <Advertisemnet
            prevAds={data}
            listingId={Number(listing?.id)}
            userId={Number(session.user.id)}
          />
          <Media />
        </div>
      </div>
    </BusinessAuthLayout>
  );
};

export default page;
