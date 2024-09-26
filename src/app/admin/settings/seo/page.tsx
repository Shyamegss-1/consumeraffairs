import { auth } from "@/auth";
import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import AddBusinessForm from "./AddBusinessForm";
import type { Metadata } from "next";
import { getPageMeta } from "@/app/lib/meta";
import Users from "./Users";
import { prisma } from "../../../../../prisma/prisma";

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

  const skip = (page - 1) * pageSize;
  const data = await prisma.inner_seo.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
          },
        },
        {
          keywords: {
            contains: search,
          },
        },
        {
          description: {
            contains: search,
          },
        },
        {
          page: {
            pageName: {
              contains: search,
            },
          },
        },
      ],
    },
    include: {
      page: true,
    },
    skip,
    take: pageSize,
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalRecord = await prisma.inner_seo.count();

  return (
    <>
      <AdminAuthLayout user={session?.user}>
        <h3 className="rounded-xl border bg-white px-6 py-4 shadow-md mb-4 text-xl font-semibold">
          SEO
        </h3>
        <div className="rounded-xl border bg-white px-6 py-4 shadow-md overflow-auto max-h-[79vh] custom-scroll">
          <AddBusinessForm
            userId={session?.user.id}
            page={page}
            pageSize={pageSize}
            search={search}
            data={data}
            totalRecord={totalRecord}
          />
        </div>
        {/* <div className="mt-4">
          <Users page={page} pageSize={pageSize} search={search} />
        </div> */}
      </AdminAuthLayout>
    </>
  );
};

export default page;
