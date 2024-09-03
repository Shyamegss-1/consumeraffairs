import BusinessAuthLayout from "@/components/Layouts/businessAdminLayout/BusinessAuthLayout";
import React, { Suspense } from "react";
import BusinessRatingCard from "./BusinessRatingCard";
import StatusNotationCard from "./StatusNotationCard";
import Pagination from "@/components/pagination/Pagination";

type Props = {};

const page = (props: Props) => {
  return (
    <BusinessAuthLayout>
      <div className="container mx-auto">
        <h3 className="text-center font-bold text-4xl my-10">
          My Business Reviews
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <BusinessRatingCard />
            <StatusNotationCard />
          </div>
          <div className="lg:col-span-3">
            {/* Table Header */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col lg:flex-row items-center justify-between">
              <div className="flex items-center">
                <label className="mr-2">Show</label>
                <select className="border border-gray-300 rounded-md p-1">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span className="ml-2">entries</span>
              </div>
              <div className="mt-4 lg:mt-0">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-1"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Table */}
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
                  <tr>
                    <td className="p-2" colSpan={8} align="center">
                      No data available in table
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Pagination */}
            </div>
            <Suspense fallback={<>Loading...</>}>
              <Pagination
                currentPage={1}
                pageSize={10}
                startIndex={0}
                totalCount={0}
                totalPages={1}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </BusinessAuthLayout>
  );
};

export default page;
