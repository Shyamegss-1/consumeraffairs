"use client";
import Pagination from "@/components/pagination/Pagination";
import React, { useEffect, useState } from "react";
import GridHeader from "./GridHeader";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const MyReviewsGrid = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();
  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * pageSize;
  const currentData: any[] = data.slice(startIndex, startIndex + pageSize);
  return (
    <div className="lg:col-span-3">
      <GridHeader searchParams={searchParams} />
      <div className="bg-white mt-4 p-4 border rounded-lg shadow-md overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-active_dark text-white">
              <th className="p-2">S.No</th>
              <th className="p-2">Picture</th>
              <th className="p-2">UserName</th>
              <th className="p-2">Email Address</th>
              <th className="p-2">Publish | Experience Date</th>
              <th className="p-2">Rating</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index: number) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-x border-gray-300">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b border-x border-gray-300 flex justify-center items-center">
                  <Image
                    className="size-10"
                    src={item.user.image ? item.user.image : "/logo.png"}
                    alt="company Logo"
                    width={100}
                    height={100}
                  />
                </td>
                <td className="py-2 px-4 border-b border-x border-gray-300">
                  {item.user.firstName}
                </td>
                <td className="py-2 px-4 border-b border-x border-gray-300">
                  {item.user.email}
                </td>
                <td className="py-2 px-4 border-b border-x border-gray-300">
                  {`${item.review_date.getDate()}/${item.review_date.getMonth()}/${item.review_date.getFullYear()}`}
                </td>
                <td className="py-2 px-4 border-b border-x border-gray-300">
                  {item.review_rating}
                </td>
                <td className="py-2 px-4 border-b border-x border-gray-300">
                  {item.review_status}
                </td>
                <td className="py-2 px-4 border-b border-x border-gray-300"></td>
              </tr>
            ))}
            {!(data.length > 0) && (
              <tr>
                <td className="p-2" colSpan={8} align="center">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        startIndex={startIndex}
        totalCount={data.length}
        totalPages={totalPages}
      />
    </div>
  );
};

export default MyReviewsGrid;
