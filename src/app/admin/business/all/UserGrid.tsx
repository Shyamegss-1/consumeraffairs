"use client";
import ActionDropdowns from "@/components/dropdown/ActionDropdowns";
import Pagination from "@/components/pagination/Pagination";
import useDebounce from "@/lib/client-hooks/useDebounce";
import {
  handleDelete,
  handleStatusUpdate,
} from "@/server-actions/Admin/Business";

import { DropdownItem, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const UserGrid = ({ data, totalRecord }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>("");
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

  console.log(totalRecord, totalPages, pageSize, "totalRecord");

  // const handlePageSizeChange = (event: any) => {
  //   setPageSize(parseInt(event.target.value));
  //   setCurrentPage(1); // Reset to first page when page size changes
  // };

  const startIndex = (currentPage - 1) * pageSize;
  const currentData: any[] = data.slice(startIndex, startIndex + pageSize);

  const searchQueryValue: string = useDebounce(searchQuery, 500);
  // console.log(searchQueryValue, "searchQueryValue");

  console.log(statusFilter);

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
          <div className="mt-4 lg:mt-0 flex gap-4">
            {/* <div className="">
              <Dropdown>
                <DropdownTrigger className="hidden sm:flex">
                  <Button
                    endContent={
                      <IoChevronDownCircleOutline className="text-small" />
                    }
                    variant="flat"
                  >
                    Status
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={statusFilter}
                  onSelectionChange={(e)=>{
                    console.log(e);
                  }}
                >
                  {["Claimed", "Unclaimed"].map((status, i) => (
                    <DropdownItem key={i} value={status} className="capitalize">
                      {capitalize(status)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div> */}
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
                  Domain
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Phone
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Profile Picture
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Claim Status
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Status
                </th>
                <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
                  Published Date
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
                    {item.name}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {item.email}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {item.website_link}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {item.companyNumber}
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
                    {item.claim ? (
                      <span className="py-1 px-4 mx-auto text-sm bg-orange-300 text-orange-800  rounded-full w-fit block">
                        Claimed
                      </span>
                    ) : (
                      <span className="py-1 px-4 mx-auto text-sm bg-red-300 text-red-800 rounded-full w-fit block">
                        Unclaimed
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300 relative">
                    {!item.status ? (
                      <span className="py-1 px-4 mx-auto text-sm bg-blue-300 text-blue-800 rounded-full w-fit block">
                        Inactive
                      </span>
                    ) : (
                      <span className="py-1 px-4 mx-auto text-sm bg-green-300 text-green-800 rounded-full w-fit block">
                        Active
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    {item.createdAt.getDate()}/{item.createdAt.getMonth()}/
                    {item.createdAt.getFullYear()}
                  </td>
                  <td className="py-2 px-4 border-b border-x border-gray-300">
                    <div className="block mx-auto w-fit">
                      <ActionDropdowns btnLabel={<BsThreeDotsVertical />}>
                        {item.claim ? (
                          <DropdownItem
                            onClick={async (e) => {
                              e.preventDefault();
                              const res = await handleStatusUpdate(
                                false,
                                item.id,
                                "claim"
                              );
                              if (res.status) {
                                router.refresh();
                              }
                            }}
                            key="Unclaim"
                          >
                            Unclaim
                          </DropdownItem>
                        ) : (
                          <DropdownItem
                            onClick={async (e) => {
                              e.preventDefault();
                              const res = await handleStatusUpdate(
                                true,
                                item.id,
                                "claim"
                              );
                              if (res.status) {
                                router.refresh();
                              }
                            }}
                            key="Claim"
                          >
                            Claim
                          </DropdownItem>
                        )}
                        {item.status ? (
                          <DropdownItem
                            onClick={async (e) => {
                              e.preventDefault();
                              const res = await handleStatusUpdate(
                                false,
                                item.id,
                                "status"
                              );
                              if (res.status) {
                                router.refresh();
                              }
                            }}
                            key="Inactive"
                          >
                            Inactive
                          </DropdownItem>
                        ) : (
                          <DropdownItem
                            onClick={async (e) => {
                              e.preventDefault();
                              const res = await handleStatusUpdate(
                                true,
                                item.id,
                                "status"
                              );
                              if (res.status) {
                                router.refresh();
                              }
                            }}
                            key="Active"
                          >
                            Active
                          </DropdownItem>
                        )}
                        <DropdownItem
                          onClick={(e) => {
                            e.preventDefault();
                            router.push(`/admin/business/edit/${item.id}`);
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
