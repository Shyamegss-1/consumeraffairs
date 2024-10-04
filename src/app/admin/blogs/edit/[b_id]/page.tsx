import { auth } from "@/auth";
import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import { prisma } from "../../../../../../prisma/prisma";
import BlogForm from "../../add/BlogForm";
import Link from "next/link";
import { getBusinessCategoryData } from "@/server-actions/Admin/BusinessCategory";
import { getBlogCategoryData } from "@/server-actions/Admin/BlogsCategory";


const page = async ({ params }: { params: { b_id: string } }) => {
  const businessCategories = await getBusinessCategoryData();
  const blogCategories = await getBlogCategoryData();

  const session = await auth();
  if (!(session?.user?.userType === "ADMIN")) {
    redirect("/admin/login");
  }
  const blogData = await prisma.blog.findUnique({
    where: {
      b_id: Number(params.b_id),
      b_status: true,
    },
  });

  return (
    <AdminAuthLayout user={session?.user}>
      <div className="rounded-xl border bg-white px-6 py-4 shadow-md mb-4 text-xl font-semibold w-full flex justify-between items-center">
        <h3 className="">Edit Blog Post</h3>
        <Link
          href={"/admin/blogs"}
          className="py-1 px-6 ring-2 ring-red-500 text-red-500 rounded-md font-medium text-[16px]"
        >
          Go Back
        </Link>
      </div>
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
            blogData={blogData}
            businessCategories={businessCategories.businessCategories}
            blogCategories={blogCategories.blogCategories}
          />
        </Suspense>
      </div>
    </AdminAuthLayout>
  );
};

export default page;
