import { auth } from "@/auth";
import BusinessLayout from "@/components/Layouts/businessAdminLayout/BusinessLayout";
import { redirect } from "next/navigation";
import React from "react";
import "./Module.css";
import UserName from "./UserName";
import MainDashboardLayout from "./MainDashboardLayout";

type Props = {};

const page = async (props: Props) => {
  // const session =  getSession()
  const session = await auth();
  console.log(session);

  if (session?.user?.userType !== "BUSINESS_USER") {
    redirect("/business/login");
  }

  return (
    <>
      <UserName />
      <MainDashboardLayout />
    </>
  );
};

export default page;
