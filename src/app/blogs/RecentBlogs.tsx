import React from "react";
import { prisma } from "../../../prisma/prisma";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";

type Props = {};

const RecentBlogs = (props: Props) => {
  const recentBlogs = async () => {
    const blog = await prisma.blog.findMany({
      where: {
        b_status: true,
      },
      orderBy: {
        createdAt: "asc",
      },
      take: 12,
    });
    return (
      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {blog.map((item, index) => (
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 border rounded-xl p-4 shadow-md flex flex-col justify-between items-center"
            key={item.b_id}
          >
            <Link href={`/blogs/${item.b_slug}`}>
              <Image
                src={
                  item.b_image || item.b_image !== ""
                    ? item.b_image
                    : "/No_Image_Available.jpg"
                }
                alt=""
                width={1920}
                height={1080}
                objectFit="cover"
                className="aspect-video rounded-md"
              />
              <h1 className="text-lg font-medium mt-4 line-clamp-2">
                {item.b_title}
              </h1>
            </Link>
            <div className="flex justify-between items-center">
              {/* <div>{item.businessCategory}</div> */}
              <Link
                className="text-blue-700 border border-blue-100 hover:bg-blue-100 hover:text-blue-700 hover:underline rounded-full py-1 px-4"
                href={`/blogs/${item.b_slug}`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <div className="mt-10">{recentBlogs()}</div>;
};

export default RecentBlogs;
