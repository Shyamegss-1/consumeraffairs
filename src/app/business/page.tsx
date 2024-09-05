import React, { Suspense } from "react";
import "./Module.css";
import UserName from "./UserName";
import MainDashboardLayout, { LoadingUi } from "./MainDashboardLayout";
import BusinessAuthLayout from "@/components/Layouts/businessAdminLayout/BusinessAuthLayout";
import { getSession, useSession } from "next-auth/react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { metadata } from "../layout";
import Head from "next/head";

type Props = {};

const BusinessPage = async ({}: Props) => {
  const session = await auth();
  if (!session) {
    redirect("/business/login");
  }

  return (
    <>
      <Head>
        <title>Dashboard : Business User | Consumer Affairs</title>
      </Head>
      <BusinessAuthLayout>
        {/* <UserName /> */}
        {/* <LoadingUi /> */}
        <Suspense fallback={<LoadingUi />}>
          <MainDashboardLayout user={session?.user} />
        </Suspense>
      </BusinessAuthLayout>
    </>
  );
};

export default BusinessPage;
