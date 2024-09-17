// app/dashboard/loading.js

import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";

export default function Loading() {
  return (
    <AdminAuthLayout user={{ name: "Admin" }}>
      <>
        <div className="lg:col-span-3">
          {/* Table Header */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center">
              <label className="mr-2">Show</label>
              <select
                disabled={true}
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
                disabled={true}
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
                <div className="loading-container">
                  <div className="spinner"></div>
                </div>
              </tbody>
            </table>
            {/* Pagination */}
          </div>
        </div>
      </>
    </AdminAuthLayout>
  );
}
