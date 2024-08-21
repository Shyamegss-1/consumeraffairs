import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  // const session =  getSession()
  const session = await auth();
  if(session===null){
    redirect("/business/register")
  }

  return <div>page</div>;
};

export default page;