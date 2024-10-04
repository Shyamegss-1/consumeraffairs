import { Suspense } from "react";
import { prisma } from "../../../prisma/prisma";
import RecentBlogs from "./RecentBlogs";

type Blog = {
  b_id: number;
  b_title: string;
  b_slug: string;
  b_image: string;
  createdAt: Date;
  b_status: boolean;
};

export default async function Page() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-center">Our Blogs</h2>
        <div className="relative p-2 sm:p-4">
          <h4 className="pb-4 border-b-2 border-black w-fit">Recent Blogs</h4>
          <Suspense fallback={<BlogsFallBackUi />}>
            <RecentBlogs />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export const BlogsFallBackUi = () => {
  return (
    <div className="mt-10 grid grid-cols-12 gap-4 sm:gap-6">
      {[...Array(9)].map((item, i) => (
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-4 border rounded-xl p-4 shadow-md flex flex-col justify-between items-center gap-10"
          key={i}
        >
          <div className="w-full min-h-32 bg-gray-100 animate-pulse rounded-xl"></div>
          <div className="w-full min-h-10 bg-gray-100 animate-pulse rounded-xl"></div>
          <div className="flex justify-between items-center">
            <p className="w-20 min-h-10 bg-gray-100 animate-pulse rounded-xl"></p>
          </div>
        </div>
      ))}
    </div>
  );
};
