"use client";
import ActionDropdowns from "@/components/dropdown/ActionDropdowns";
import useDebounce from "@/lib/client-hooks/useDebounce";
import {
  handleDelete,
  handleStatusUpdate,
} from "@/server-actions/Admin/Reviews";
import { DropdownItem, useDisclosure } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import ReviewDetailModal from "./ReviewDetailModal";
import CustomPagination from "@/components/pagination/Pagination";

const UserGrid = ({ data, totalRecord }: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeId, setActiveId] = useState<any>(null);
  const [pageSize, setPageSize] = useState<number>(10);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();
  const totalPages = Math.ceil(totalRecord / pageSize);

  const [searchQuery, setSearchQuery] = useState(
    () => searchParams?.get("search") || ""
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  console.log(totalRecord, totalPages, pageSize, "totalRecord");

  // const handlePageSizeChange = (event: any) => {
  //   setPageSize(parseInt(event.target.value));
  //   setCurrentPage(1); // Reset to first page when page size changes
  // };

  const startIndex = (currentPage - 1) * pageSize;
  const currentData: any[] = data.slice(startIndex, startIndex + pageSize);

  const searchQueryValue: string = useDebounce(searchQuery, 500);
  // console.log(searchQueryValue, "searchQueryValue");

  useEffect(() => {
    let params = new URLSearchParams(searchParams);
    if (searchQueryValue !== "") {
      params.set("search", searchQueryValue);
    } else {
      params.delete("search");
    }
    router.push(`${pathname}?${params.toString()}`);
  }, [searchQueryValue]);



  return (
    <>
      <div className="lg:col-span-3">
        {/* Table Header */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col lg:flex-row items-center justify-between ">
          <div className="flex items-center">
            <label className="mr-2">Show</label>
            <select
              name="pagesize"
              id="listingSearch"
              value={searchParams?.get("pageSize") || 10}
              onChange={(e) => {
                let params = new URLSearchParams(searchParams);
                setPageSize(Number(e.target.value));
                params.set("pageSize", e.target.value);
                router.push(`${pathname}?${params.toString()}`);
              }}
              className="border border-gray-300 rounded-md p-1"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="ml-2">entries</span>
          </div>
          <div className="mt-4 lg:mt-0">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              name="search"
              id="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white mt-4 p-4 border rounded-lg shadow-md overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-active_dark text-white">
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Sr. No.
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Name
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Company Name
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Review Rating
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Review
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Publish Date
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Status
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {item.user.firstName} {item.user.lastName}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {item.company.name}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {[...Array(5)].map((it: any, i: number) =>
                      i < item.review_rating ? (
                        <FaStar
                          key={i}
                          className="inline-flex text-yellow-500"
                        />
                      ) : (
                        <FaStar key={i} className="text-gray-400 inline-flex" />
                      )
                    )}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {item.review_title}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300 relative">
                    {item.createdAt.getDate()}/{item.createdAt.getMonth()}/
                    {item.createdAt.getFullYear()}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    <span
                      className={`${
                        item.review_status === "Moderation"
                          ? "text-yellow-800 bg-yellow-300"
                          : item.review_status === "Reported"
                          ? "text-red-800 bg-red-300"
                          : item.review_status === "Flagged"
                          ? "text-cyan-800 bg-cyan-300"
                          : item.review_status === "Inactive"
                          ? "text-blue-800 bg-blue-300"
                          : "text-green-800 bg-green-300"
                      } px-2 py-1 text-sm rounded-full block mx-auto w-fit`}
                    >
                      {item.review_status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    <div className="block mx-auto w-fit">
                      <ActionDropdowns btnLabel={<BsThreeDotsVertical />}>
                        {[
                          "Moderation",
                          "Active",
                          "Inactive",
                          "Reported",
                          "Flagged",
                        ]
                          .filter((status) => status !== item.review_status)
                          .map((it: any, i) => (
                            <DropdownItem
                              onClick={async () => {
                                const res = await handleStatusUpdate(
                                  it,
                                  item.id
                                );
                                if (res.status) {
                                  router.refresh();
                                }
                              }}
                              key={it}
                            >
                              {it}
                            </DropdownItem>
                          ))}
                        {/* <DropdownItem
                          onClick={(e) => {
                            onOpen();
                            setActiveId(item);
                          }}
                          key="top-review"
                        >
                          Mark Top Review
                        </DropdownItem> */}
                        <DropdownItem
                          onClick={(e) => {
                            onOpen();
                            setActiveId(item);
                          }}
                          key="edit"
                        >
                          View Details
                        </DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                          variant="solid"
                          onClick={async (e) => {
                            e.preventDefault();
                            const res = await handleDelete(item.id);
                            if (res.status) {
                              router.refresh();
                            }
                          }}
                        >
                          Delete
                        </DropdownItem>
                      </ActionDropdowns>
                    </div>
                  </td>
                </tr>
              ))}
              {!(currentData.length > 0) && (
                <tr>
                  <td className="p-2" colSpan={8} align="center">
                    No data available in table
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <ReviewDetailModal
            isOpen={isOpen}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
            data={activeId}
          />
          {/* Pagination */}
        </div>
        <CustomPagination
          currentPage={currentPage}
          pageSize={pageSize}
          startIndex={startIndex}
          totalCount={data.length}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default UserGrid;
