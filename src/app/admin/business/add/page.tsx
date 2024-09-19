import { auth } from "@/auth";
import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import AddBusinessForm from "./AddBusinessForm";
import type { Metadata } from "next";
import { getPageMeta } from "@/app/lib/meta";

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

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const meta = await getPageMeta(params.slug);

  // Fallback metadata if the page is not found or meta is null
  if (!meta) {
    return {
      title: "Add Business | Admin",
      description: "Add Business",
      keywords: "Business, Reviews, Listing",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}

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
      <AdminAuthLayout user={session?.user}>
        <h3 className="rounded-xl border bg-white px-6 py-4 shadow-md mb-4 text-xl font-semibold">
          Add New Business
        </h3>
        <div className="rounded-xl border bg-white px-6 py-4 shadow-md overflow-auto max-h-[79vh] custom-scroll flex justify-center items-center relative">
            <AddBusinessForm userId={session?.user.id} />
        </div>
      </AdminAuthLayout>
    </>
  );
};

export default page;
