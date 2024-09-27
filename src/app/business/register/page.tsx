import React, { useEffect } from "react";
import SideSection from "./SideSection";
import BusinessSignupForm from "./BusinessSignupForm";
import "./Module.css";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    claim?: string | null;
  };
}) => {
  // console.log(searchParams?.claim);
  const session = await auth();
  // useEffect(() => {
  if (searchParams?.claim) {
    const isValid =
      /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(
        searchParams?.claim
      );
    console.log(isValid);

    if (!isValid) {
      redirect("/business/register");
    }
  }

  if (session?.user.userType === "USER") {
    return redirect("/");
  }

  // }, []);

  return (
    <div className="grid grid-cols-3 login-new-page">
      <div className="col-span-1 bg-primary_dark min-h-[100vh]">
        <SideSection />
      </div>
      <div className="col-span-2">
        <BusinessSignupForm
          claimUrl={searchParams?.claim ? searchParams?.claim : null}
        />
      </div>
    </div>
  );
};

export default Page;
