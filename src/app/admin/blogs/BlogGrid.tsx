"use client";
import ActionDropdowns from "@/components/dropdown/ActionDropdowns";
import CustomPagination from "@/components/pagination/Pagination";
import useDebounce from "@/lib/client-hooks/useDebounce";
import { handleDelete, handleStatusUpdate } from "@/server-actions/Admin/Blogs";
import { DropdownItem } from "@nextui-org/react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const BlogGrid = ({ data, totalRecord, page }: any) => {
  const [pageSize, setPageSize] = useState<number>(10);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();
  const totalPages = Math.ceil(totalRecord / pageSize);

  const [searchQuery, setSearchQuery] = useState(
    () => searchParams?.get("search") || ""
  );

  const startIndex = (page - 1) * pageSize;
  const currentData: any[] = data;

  const searchQueryValue: string = useDebounce(searchQuery, 500);

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
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col lg:flex-row items-center justify-between">
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
                  Title
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Image
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Category
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
                    {item.b_title}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    <Image
                      className="size-10 relative mx-auto"
                      src={item.b_image ? item.b_image : "/logo.png"}
                      alt={item.image_alt}
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {item.blogCategory.b_c_name}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300 relative">
                    {item.createdAt.getDate()}/{item.createdAt.getMonth()}/
                    {item.createdAt.getFullYear()}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    <span
                      className={`${
                        !item.b_status
                          ? "text-blue-800 bg-blue-300"
                          : "text-green-800 bg-green-300"
                      } px-2 py-1 text-sm rounded-full block mx-auto w-fit`}
                    >
                      {item.b_status ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    <div className="block mx-auto w-fit">
                      <ActionDropdowns btnLabel={<BsThreeDotsVertical />}>
                        {item.b_status ? (
                          <DropdownItem
                            onClick={async (e) => {
                              e.preventDefault();
                              const res = await handleStatusUpdate(
                                false,
                                item.b_id
                              );
                              if (res.status) {
                                router.refresh();
                              }
                            }}
                            key="update_status"
                          >
                            Inactive
                          </DropdownItem>
                        ) : (
                          <DropdownItem
                            onClick={async (e) => {
                              e.preventDefault();
                              const res = await handleStatusUpdate(
                                true,
                                item.b_id
                              );
                              if (res.status) {
                                router.refresh();
                              }
                            }}
                            key="update_status"
                          >
                            Active
                          </DropdownItem>
                        )}
                        <DropdownItem
                          onClick={(e) => {
                            e.preventDefault();
                            router.push(`/admin/blogs/edit/${item.b_id}`);
                          }}
                          key="edit"
                        >
                          Edit
                        </DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                          variant="solid"
                          onClick={async (e) => {
                            e.preventDefault();
                            const res = await handleDelete(item.b_id);
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
          {/* Pagination */}
        </div>
        <CustomPagination
          currentPage={page}
          pageSize={pageSize}
          startIndex={startIndex}
          totalCount={totalRecord}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default BlogGrid;
