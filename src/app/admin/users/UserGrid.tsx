"use client";
import ActionDropdowns from "@/components/dropdown/ActionDropdowns";
import Pagination from "@/components/pagination/Pagination";
import useDebounce from "@/lib/client-hooks/useDebounce";
import { DropdownItem, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ChangePasswordModal from "./ChangePasswordModal";
import { handleDelete, handleStatusUpdate } from "@/server-actions/Admin/Users";

const UserGrid = ({ data, totalRecord }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeRowData, setActiveRowData] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

  // console.log(totalRecord, totalPages, pageSize, "totalRecord");

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
                  Name
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Email
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Phone
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Profile Picture
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Verification Status
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
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {item.email}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {item.mobile_number}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    <Image
                      className="size-10 relative mx-auto"
                      src={item.image ? item.image : "/logo.png"}
                      alt="company Logo"
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300 relative">
                    {item.verify ? (
                      <span className="text-sm py-1 px-4 mx-auto text-orange-800 bg-orange-300 rounded-full w-fit block">
                        Verified
                      </span>
                    ) : (
                      <span className="text-sm py-1 px-4 mx-auto text-red-800 bg-red-300 rounded-full w-fit block">
                        Unverified
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300 relative">
                    {item.active ? (
                      <span className="text-sm py-1 px-4 mx-auto text-green-800 bg-green-300 rounded-full w-fit block">
                        Active
                      </span>
                    ) : (
                      <span className="text-sm py-1 px-4 mx-auto text-blue-800 bg-blue-300 rounded-full w-fit block">
                        Unactive
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    <div className="block mx-auto w-fit">
                      <ActionDropdowns btnLabel={<BsThreeDotsVertical />}>
                        {item.active? (
                          <DropdownItem
                            onClick={async (e) => {
                              e.preventDefault();
                              const res = await handleStatusUpdate(
                                false,
                                item.id
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
                                item.id
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
                            onOpen();
                            setActiveRowData(item.id);
                          }}
                          key="change-password"
                        >
                          Change Password
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
          <ChangePasswordModal
            data={activeRowData}
            isOpen={isOpen}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
          />
          {/* Pagination */}
        </div>
        {/* <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          startIndex={startIndex}
          totalCount={data.length}
          totalPages={totalPages}
        /> */}
      </div>
    </>
  );
};

export default UserGrid;
