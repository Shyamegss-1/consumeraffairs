import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  // const session =  getSession()
  const session = await auth();
  console.log(session);

  if (session?.user?.userType !== "BUSINESS_USER") {
    redirect("/business/login");
  }

  return <div>page</div>;
};

export default page;
