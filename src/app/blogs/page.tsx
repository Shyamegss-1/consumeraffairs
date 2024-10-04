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
  const blogs = await prisma.blog.findMany({
    select: {
      b_id: true,
      b_title: true,
      b_slug: true,
      b_image: true,
      createdAt: true,
      b_status: true,
    },
    where: {
      b_status: true,
    },
    orderBy: {
      createdAt: "desc", // Use "desc" to get the latest blogs
    },
    take: 12,
  });

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-center">Our Blogs</h2>
        <div className="relative p-2 sm:p-4">
          <h4 className="pb-4 border-b-2 border-black w-fit">Recent Blogs</h4>
          <div>
            <RecentBlogs blogs={blogs} />
          </div>
        </div>
      </div>
    </div>
  );
}
