"use client";
import Image from "next/image";
import React, { useState } from "react";

const ResponsiveTable = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (event: any) => {
    setPageSize(parseInt(event.target.value));
    setCurrentPage(1); // Reset to first page when page size changes
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentData: any[] = data.slice(startIndex, startIndex + pageSize);

  return (
    <div className="overflow-x-auto mt-10 p-2 ">
      <div className="flex justify-between items-center mb-10">
        <div className="flex justify-start items-center gap-4">
          <p>show</p>
          <select
            name="pagesize"
            id=""
            value={pageSize}
            onChange={handlePageSizeChange}
            className="focus:ring-1 focus:ring-active_dark py-2 px-4  ring-1 ring-active_dark rounded-md"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <p>entries</p>
        </div>
        <div className="col-span-4">
          <div className="flex justify-end items-center gap-4">
            <label htmlFor="search">Search</label>
            <input
              type="search"
              name="search"
              id="search"
              className="form-control"
            />
          </div>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
              Sr. No.
            </th>
            <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
              Logo
            </th>
            <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
              Company Name
            </th>
            <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
              Domain
            </th>
            <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
              Phone
            </th>
            <th className="py-2 px-4 border border-gray-300 bg-active_dark text-white">
              Email ID
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
              <td className="py-2 px-4 border-b border-x border-gray-300 flex justify-center items-center">
                <Image
                  className="size-10"
                  src={item.image ? item.image : "/logo.png"}
                  alt="company Logo"
                  width={100}
                  height={100}
                />
              </td>
              <td className="py-2 px-4 border-b border-x border-gray-300">
                {item.name}
              </td>
              <td className="py-2 px-4 border-b border-x border-gray-300">
                {item.website_link}
              </td>
              <td className="py-2 px-4 border-b border-x border-gray-300">
                {item.number}
              </td>
              <td className="py-2 px-4 border-b border-x border-gray-300">
                {item.email}
              </td>
              <td className="py-2 px-4 border-b border-x border-gray-300 flex justify-center items-center">
                {item.claim ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g id="material-symbols:verified-rounded">
                      <path
                        id="Vector"
                        d="M14.6009 16.9334L12.6676 15.0334C12.4231 14.7889 12.1178 14.6667 11.7516 14.6667C11.3854 14.6667 11.0685 14.8001 10.8009 15.0667C10.5565 15.3112 10.4342 15.6223 10.4342 16.0001C10.4342 16.3778 10.5565 16.6889 10.8009 16.9334L13.6676 19.8001C13.9342 20.0667 14.2454 20.2001 14.6009 20.2001C14.9565 20.2001 15.2676 20.0667 15.5342 19.8001L21.2009 14.1334C21.4676 13.8667 21.5951 13.5556 21.5836 13.2001C21.572 12.8445 21.4445 12.5334 21.2009 12.2667C20.9342 12.0001 20.6178 11.8614 20.2516 11.8507C19.8854 11.8401 19.5685 11.9676 19.3009 12.2334L14.6009 16.9334ZM10.8676 29.0001L8.93425 25.7334L5.26758 24.9334C4.93424 24.8667 4.66758 24.6947 4.46758 24.4174C4.26758 24.1401 4.1898 23.8343 4.23424 23.5001L4.60091 19.7334L2.10091 16.8667C1.87869 16.6223 1.76758 16.3334 1.76758 16.0001C1.76758 15.6667 1.87869 15.3778 2.10091 15.1334L4.60091 12.2667L4.23424 8.50005C4.1898 8.16672 4.26758 7.86094 4.46758 7.58272C4.66758 7.3045 4.93424 7.1325 5.26758 7.06672L8.93425 6.26672L10.8676 3.00005C11.0454 2.71116 11.2898 2.5165 11.6009 2.41605C11.912 2.31561 12.2231 2.3325 12.5342 2.46672L16.0009 3.93339L19.4676 2.46672C19.7787 2.33339 20.0898 2.3165 20.4009 2.41605C20.712 2.51561 20.9565 2.71027 21.1342 3.00005L23.0676 6.26672L26.7342 7.06672C27.0676 7.13339 27.3342 7.30583 27.5342 7.58405C27.7342 7.86227 27.812 8.16761 27.7676 8.50005L27.4009 12.2667L29.9009 15.1334C30.1231 15.3778 30.2342 15.6667 30.2342 16.0001C30.2342 16.3334 30.1231 16.6223 29.9009 16.8667L27.4009 19.7334L27.7676 23.5001C27.812 23.8334 27.7342 24.1392 27.5342 24.4174C27.3342 24.6956 27.0676 24.8676 26.7342 24.9334L23.0676 25.7334L21.1342 29.0001C20.9565 29.2889 20.712 29.4836 20.4009 29.5841C20.0898 29.6845 19.7787 29.6676 19.4676 29.5334L16.0009 28.0667L12.5342 29.5334C12.2231 29.6667 11.912 29.6836 11.6009 29.5841C11.2898 29.4845 11.0454 29.2898 10.8676 29.0001Z"
                        fill="current"
                        className="fill-active_dark"
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"></path>
                      <path stroke-linecap="round" d="m9 15l6-6m0 6L9 9"></path>
                    </g>
                  </svg>
                )}
              </td>
              <td className="py-2 px-4 border-b border-x border-gray-300"></td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <div>
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + pageSize, data.length)} of {data.length}{" "}
            entries
          </div>
          <div className="flex space-x-2">
            <button
              className={`p-2 border ${
                currentPage === 1 ? "bg-gray-300" : "bg-white"
              } border-gray-300 rounded`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`py-2 px-4 border  ${
                  currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
                } border-gray-300 rounded`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`p-2 border ${
                currentPage === totalPages ? "bg-gray-300" : "bg-white"
              } border-gray-300 rounded`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveTable;
