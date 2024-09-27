import { getCompanyDetails } from "@/server-actions/getCompanyDetails";
import Image from "next/image";
import React, { Suspense } from "react";
import CompanyDetailLayout from "./CompanyDetailLayout";
import "./Module.css";
import ReviewForm from "./ReviewForm";
import { auth } from "@/auth";
import CompanyDetails from "./CompanyDetails";
import LoadingUi from "./LoadingUi";
import dynamic from "next/dynamic";
import CompanyFooter from "../(listing-footer)/CompanyFooter";
// const CompanyDetails = dynamic(() => import("./CompanyDetails"), {
//   ssr: true,
// });

const page = ({ params }: { params: { company: string } }) => {
  return (
    <>
      <Suspense fallback={<LoadingUi />}>
        <CompanyDetails company={params.company} />
      </Suspense>
      <CompanyFooter />
    </>
  );
};

export default page;
