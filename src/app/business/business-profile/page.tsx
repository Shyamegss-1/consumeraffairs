import CompanyDetails from "@/app/listing/[company]/CompanyDetails";
import BusinessAuthLayout from "@/components/Layouts/businessAdminLayout/BusinessAuthLayout";
import React from "react";
import UpdateBusinessProfile from "./UpdateBusinessProfile";

type Props = {};

const page = (props: Props) => {
  return (
    <BusinessAuthLayout>
      <div className="w-full px-20 mx-auto">
        <h3 className="w-full text-center font-bold text-4xl my-5">
          Business Profile
        </h3>
        <div className="grid grid-cols-12 gap-4 mt-10">
          <div className="col-span-4 borders p-4 bg-white shadow-md rounded-xl">
            <div className="flex flex-col justify-center items-start">
              <h4 className="text-2xl font-bold mb-2 pb-4 border-b-2 border-b-active_dark">
                Edit Business <br />
                <span className="text-sm font-light ">
                  Your business profile will look like this
                </span>
              </h4>
            </div>
            <div className="flex flex-col justify-center items-start overflow-y-auto scroll-smooth bg-active_dark/15 p-4 rounded-lg">
              <UpdateBusinessProfile />
            </div>
          </div>
          <div className="col-span-8 borders bg-white shadow-md rounded-xl p-2">
            <CompanyDetails company={"apifan.com"} />
          </div>
        </div>
      </div>
    </BusinessAuthLayout>
  );
};

export default page;
