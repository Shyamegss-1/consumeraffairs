import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import { Metadata } from "next";
import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";
import { getPageMeta } from "@/app/lib/meta";
import { auth } from "@/auth";
import TableHeader from "./TableHeader";
import Users from "./Users";


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

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const meta = await getPageMeta(params.slug);

  // Fallback metadata if the page is not found or meta is null
  if (!meta) {
    return {
      title: "Claimed Business | Admin",
      description: "Claimed Business list",
      keywords: "Business, Reviews, Listing",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
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
      <TableHeader />
      <div className="rounded-xl border bg-white px-6 py-4 shadow-md overflow-auto max-h-[79vh] custom-scroll">
        <Suspense
          fallback={
            <>
              <div className="loading-container">
                <div className="spinner"></div>
              </div>
            </>
          }
        >
          <Users page={page} pageSize={pageSize} search={search} />
        </Suspense>
      </div>
    </AdminAuthLayout>
  );
};

export default page;
