import { getCompanyDetails } from "@/server-actions/getCompanyDetails";
import Image from "next/image";
import React, { Suspense } from "react";
import CompanyDetailLayout from "./CompanyDetailLayout";
import "./Module.css";
import ReviewForm from "./ReviewForm";
import { auth } from "@/auth";
import CompanyDetails from "./CompanyDetails";
import LoadingUi from "./LoadingUi";

const page = ({ params }: { params: { company: string } }) => {
  //   return res;
  // };

  // console.log(companyDetail,"ghjhjgjg");

  return (
    <Suspense fallback={<LoadingUi />}>
      <CompanyDetails company={params.company} />
    </Suspense>
  );
};

export default page;
