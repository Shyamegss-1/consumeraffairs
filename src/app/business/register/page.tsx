import React from "react";
import SideSection from "./SideSection";
import BusinessSignupForm from "./BusinessSignupForm";
import "./Module.css";

const Page = ({
  searchParams,
}: {
  searchParams?: {
    claim?: string;
  };
}) => {

  


  return (
    <div className="grid grid-cols-3 login-new-page">
      <div className="col-span-1 bg-primary_dark min-h-[100vh]">
        <SideSection />
      </div>
      <div className="col-span-2">
        <BusinessSignupForm claimUrl={searchParams?.claim} />
      </div>
    </div>
  );
};

export default Page;
