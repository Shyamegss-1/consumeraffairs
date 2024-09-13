import { auth } from "@/auth";
import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import Users from "./Reviews";

interface ItemsPageProps {
  params: {
    page: string;
  };
  searchParams: {
    page?: string;
    search?: string;
    pageSize?: string;
  };
}

const page = async ({ params, searchParams }: ItemsPageProps) => {
  const session = await auth();
  if (!(session?.user?.userType === "ADMIN")) {
    redirect("/admin/login");
  }

  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.pageSize) || 10;
  const search = searchParams.search || "";
  return (
    <AdminAuthLayout user={session?.user}>
      <h3 className="rounded-xl border bg-white px-6 py-4 shadow-md mb-4 text-xl font-semibold">
        Reviews
      </h3>
      <div className="rounded-xl border bg-white px-6 py-4 shadow-md">
        <Suspense fallback={<>Loading...</>}>
          <Users page={page} pageSize={pageSize} search={search} />
        </Suspense>
      </div>
    </AdminAuthLayout>
  );
};

export default page;
