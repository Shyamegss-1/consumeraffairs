import React, { Suspense } from "react";
import "./Module.css";
import CompanyDetails from "./CompanyDetails";
import LoadingUi from "./LoadingUi";
import CompanyFooter from "../(listing-footer)/CompanyFooter";
// const CompanyDetails = dynamic(() => import("./CompanyDetails"), {
//   ssr: true,
// });

const page = ({ params }: { params: { company: string } }) => {
  return (
    <div className="min-h-[80vh]">
      <Suspense fallback={<LoadingUi />}>
        <CompanyDetails company={params.company} />
        <CompanyFooter />
      </Suspense>
    </div>
  );
};

export default page;
