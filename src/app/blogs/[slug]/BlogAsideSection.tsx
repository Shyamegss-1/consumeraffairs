import React from "react";
import { prisma } from "../../../../prisma/prisma";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
  categoryId: number;
  tags: string;
};

const BlogAsideSection = (props: Props) => {
  const relatedBlogs = async (categoryId: number) => {
    const res = await prisma.blog.findMany({
      where: {
        b_category: categoryId,
      },
    });
    return (
      <aside className="">
        <div className="box-border mb-10 ">
          <Image className="rounded-xl" src="/ads.jpg" alt="ads" width={1080} height={1920}/>
        </div>
        <div className="border mb-10 ">
          <h4 className="px-4 py-2 ">Related Blogs</h4>
          <ul>
            {res.map((item, index) => (
              <li key={index} className="">
                <Link
                  href={`/blogs/${item.b_slug}`}
                  className="line-clamp-2 px-4 py-2 border-t cursor-pointer hover:bg-gray-100"
                >
                  {item.b_title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border mb-10">
          <h4 className="px-4 py-2 border-b">Tags</h4>
          <div className="flex justify-start items-start gap-4 p-4 flex-wrap">
            {props.tags
              ?.trim()
              .split(",")
              .map((item, index) => (
                <p
                  key={index}
                  className="py-2 px-4 border cursor-pointer bg-blue-100 text-blue-700 hover:bg-blue-300 transition ease-in-out rounded-full"
                >
                  {item}
                </p>
              ))}
          </div>
        </div>
      </aside>
    );
  };

  return <div>{relatedBlogs(props.categoryId)}</div>;
};

export default BlogAsideSection;
