import CompanyDetails from "@/app/listing/[company]/CompanyDetails";
import BusinessAuthLayout from "@/components/Layouts/businessAdminLayout/BusinessAuthLayout";
import React, { Suspense } from "react";
import BusinessProfile from "./BusinessProfile";
import LoadingScreen from "@/components/ui/LoadingScreen";

type Props = {};

const page = (props: Props) => {
  return (
    <BusinessAuthLayout>
      <div className="w-full px-20 mx-auto">
        <h3 className="w-full text-center font-bold text-4xl my-5">
          Business Profile
        </h3>
        <Suspense
          fallback={
            <div className="min-h-screen z-20 w-full backdrop-blur-sm bg-transparent absolute top-0 left-0 flex justify-center items-center">
              <LoadingScreen text="Please wait..." />
            </div>
          }
        >
          <BusinessProfile />
        </Suspense>
      </div>
    </BusinessAuthLayout>
  );
};

export default page;
