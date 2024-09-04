"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useDebounce from "@/lib/client-hooks/useDebounce";

type Props = {
  searchParams: any;
};

const GridHeader = ({ searchParams }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState(
    () => searchParams?.get("search") || ""
  );
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
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col lg:flex-row items-center justify-between">
      <div className="flex items-center">
        <label className="mr-2">Show</label>
        <select
          className="border border-gray-300 rounded-md p-1"
          name="pagesize"
          id=""
          value={searchParams?.get("pageSize") || 10}
          onChange={(e) => {
            let params = new URLSearchParams(searchParams);
            params.set("pageSize", e.target.value);
            router.push(`${pathname}?${params.toString()}`);
          }}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
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
  );
};

export default GridHeader;
