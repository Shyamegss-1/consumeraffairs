import BusinessAuthLayout from "@/components/Layouts/businessAdminLayout/BusinessAuthLayout";
import React from "react";
import NewBusinessForm from "./NewBusinessForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  if (!(session?.user?.userType === "BUSINESS_USER")) {
    redirect("/business/login");
  }
  return (
    <>
      <BusinessAuthLayout>
        <div className="max-w-7xl mx-auto ">
          <h3 className="text-center font-bold text-4xl mt-10">
            Add New Business
          </h3>
          <NewBusinessForm userId={session.user.id} />
        </div>
      </BusinessAuthLayout>
    </>
  );
};

export default page;
