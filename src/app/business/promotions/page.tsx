import BusinessAuthLayout from "@/components/Layouts/businessAdminLayout/BusinessAuthLayout";
import Image from "next/image";
import React, { Suspense } from "react";
import Advertisemnet from "./Advertisemnet";
import Media from "./Media";

type Props = {};

const page = (props: Props) => {
  return (
    <BusinessAuthLayout>
      <div className="max-w-screen-xl mx-auto ">
        <h3 className="text-center font-bold text-4xl my-10">Promotions</h3>
        <div className="grid grid-cols-12 gap-4 mb-20">
          <Advertisemnet/>
          <Media/>
        </div>
      </div>
    </BusinessAuthLayout>
  );
};

export default page;
