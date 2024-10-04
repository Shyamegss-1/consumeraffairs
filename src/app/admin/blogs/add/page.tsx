import { auth } from "@/auth";
import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import BlogForm from "./BlogForm";
import { unstable_cache } from "next/cache";
import { prisma } from "../../../../../prisma/prisma";

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
const getBusinessCategoryData = unstable_cache(
  async () => {
    return await prisma.category.findMany({
      where: {
        status: true,
      },
      select: {
        cid: true,
        category_name: true,
      },
      orderBy: {
        category_name: "asc",
      },
    });
  },
  ["businessCategories"],
  { revalidate: 3600, tags: ["businessCategories"] }
);

const getBlogCategoryData = unstable_cache(
  async () => {
    return await prisma.blog_category.findMany({
      where: {
        b__c_status: "Active",
      },
      select: {
        b_c_id: true,
        b_c_name: true,
      },
      orderBy: {
        b_c_name: "asc",
      },
    });
  },
  ["blogCategories"],
  { revalidate: 3600, tags: ["blogCategories"] }
);

const page = async ({ params, searchParams }: ItemsPageProps) => {
  const session = await auth();
  if (!(session?.user?.userType === "ADMIN")) {
    redirect("/admin/login");
  }
  const businessCategories = await getBusinessCategoryData();
  const blogCategories = await getBlogCategoryData();
  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.pageSize) || 10;
  const search = searchParams.search || "";
  return (
    <AdminAuthLayout user={session?.user}>
      <h3 className="rounded-xl border bg-white px-6 py-4 shadow-md mb-4 text-xl font-semibold">
        Post New Blog
      </h3>
      <div className="rounded-xl border bg-white px-6 py-4 shadow-md overflow-auto min-h-[79.5vh] custom-scroll">
        <Suspense
          fallback={
            <>
              <div className="loading-container">
                <div className="spinner"></div>
              </div>
            </>
          }
        >
          <BlogForm
            blogData={null}
            businessCategories={businessCategories}
            blogCategories={blogCategories}
          />
        </Suspense>
      </div>
    </AdminAuthLayout>
  );
};

export default page;
