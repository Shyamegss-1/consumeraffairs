import { auth } from "@/auth";
import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import Users from "../all/Users";
import Head from "next/head";
import AddBusinessForm from "./AddBusinessForm";

type Props = {
  params: {
    page: string;
  };
  searchParams: {
    page?: string;
    search?: string;
    pageSize?: string;
  };
};

const page = async ({ params, searchParams }: Props) => {
  const session = await auth();
  if (!(session?.user?.userType === "ADMIN")) {
    redirect("/admin/login");
  }

  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.pageSize) || 10;
  const search = searchParams.search || "";
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <AdminAuthLayout user={session?.user}>
        <h3 className="rounded-xl border bg-white px-6 py-4 shadow-md mb-4 text-xl font-semibold">
          Add New Business
        </h3>
        <div className="rounded-xl border bg-white px-6 py-4 shadow-md overflow-auto max-h-[79vh] custom-scroll">
          <AddBusinessForm userId={session?.user.id} />
        </div>
      </AdminAuthLayout>
    </>
  );
};

export default page;
