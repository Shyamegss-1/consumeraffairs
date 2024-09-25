import { auth } from "@/auth";
import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import AddBusinessForm from "./AddBusinessForm";
import type { Metadata } from "next";
import { getPageMeta } from "@/app/lib/meta";
import { prisma } from "../../../../../../prisma/prisma";
import Link from "next/link";
import FormHeader from "./FormHeader";

type Props = {
  params: {
    id: string;
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

  const business = await prisma.listing.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      user: true,
    },
  });
  return (
    <>
      <AdminAuthLayout user={session?.user}>
        <FormHeader />
        <div className="rounded-xl border bg-white px-6 py-4 shadow-md overflow-auto max-h-[79vh] custom-scroll ">
          <Suspense
            fallback={
              <>
                <div className="loading-container">
                  <div className="spinner"></div>
                </div>
              </>
            }
          >
            <AddBusinessForm userId={session?.user.id} business={business} />
          </Suspense>
        </div>
      </AdminAuthLayout>
    </>
  );
};

export default page;
