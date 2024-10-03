import Image from "next/image";
import Link from "next/link";
import React from "react";
import { prisma } from "../../../../prisma/prisma";

type Props = {};

const CompanyFooter = async ({}: Props) => {
  const footerContent = await prisma.footer.findFirst();
  const blogs = await prisma.blog.findMany({
    where: {
      b_status: true,
    },
    take: 5,
  });

  return (
    <div className="w-full border-t border-gray-200 bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <h2 className="text-2xl font-bold text-gray-600">
              Company Details
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: footerContent?.content ? footerContent.content : "",
              }}
            ></div>
          </div>
          <div className="col-span-4 ">
            <h4 className="text-lg font-bold text-gray-400 ml-2">Top Blogs</h4>
            <div className="flex flex-col justify-start items-center gap-6 mt-6 overflow-auto custom-scroll w-full">
              {blogs.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start gap-4 rounded-xl border shadow-md p-4 bg-white w-full"
                >
                  <Link
                    href={`/blogs/${item.b_slug}`}
                    className="w-[30%] rounded-md"
                  >
                    <Image
                      src={
                        item.b_image
                          ? item.b_image
                          : "/1716464335The Future of AI What Innovations Are Coming Next.jpg"
                      }
                      alt="blog-img"
                      width={540}
                      height={540}
                      objectFit="cover"
                      className="w-full h-20 rounded-md"
                    />
                  </Link>
                  <div className="flex flex-col justify-between items-start flex-1">
                    <Link href={`/blogs/${item.b_slug}`}>
                      <p className="text-base font-medium line-clamp-2 text-gray-500 w-full">
                        {item.b_title}
                      </p>
                    </Link>
                    <p className="text-gray-400 font-normal text-sm mt-2">
                      <span className="underline">Published At:</span>
                      <span className="no-underline ml-2">
                        {item.createdAt.toDateString()}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
              <div className="w-full flex justify-end">
                <Link
                  href={"/blogs"}
                  className="text-medium font-medium text-gray-500 cursor-pointer hover:text-blue-500 hover:underline"
                >
                  See More...
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full h-0.5 bg-gray-200 my-8" />
        <div className="popular-searches mt-4 mb-3">
          <h5 className="fw-bold fs-5">Top Searches</h5>
          <div className="mt-3">
            <span className="">
              <Link href="/category/automotive" className="">
                {" "}
                &nbsp;Automotive &nbsp; |{" "}
              </Link>
            </span>
          </div>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-gray-200 my-8" />
    </div>
  );
};

export default CompanyFooter;
