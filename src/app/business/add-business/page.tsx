import BusinessAuthLayout from "@/components/Layouts/businessAdminLayout/BusinessAuthLayout";
import React from "react";
import NewBusinessForm from "./NewBusinessForm";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <BusinessAuthLayout>
        <div className="max-w-7xl mx-auto ">
          <h3 className="text-center font-bold text-4xl mt-10">
            Add New Business
          </h3>
          <NewBusinessForm/>
        </div>
      </BusinessAuthLayout>
    </>
  );
};

export default page;
