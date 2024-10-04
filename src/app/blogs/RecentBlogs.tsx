"use server"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../../../prisma/prisma";

type Blog = {
  b_id: number;
  b_title: string;
  b_slug: string;
  b_image: string;
  createdAt: Date;
  b_status: boolean;
};



const RecentBlogs = async() => {
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
      createdAt: "desc", 
    },
    take: 12,
  });
  return (
    <div className="mt-10 grid grid-cols-12 gap-4 sm:gap-6">
      {blogs.map((item) => (
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-4 border rounded-xl p-4 shadow-md flex flex-col justify-between items-center"
          key={item.b_id}
        >
          <Link href={`/blogs/${item.b_slug}`}>
            <Image
              src={
                item.b_image && item.b_image !== ""
                  ? item.b_image
                  : "/No_Image_Available.jpg"
              }
              alt={item.b_title}
              width={1920}
              height={1080}
              objectFit="cover"
              className="aspect-video rounded-md w-full"
            />
            <h1 className="text-lg font-medium mt-4 line-clamp-2">
              {item.b_title}
            </h1>
          </Link>
          <div className="flex justify-between items-center">
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

export default RecentBlogs;
