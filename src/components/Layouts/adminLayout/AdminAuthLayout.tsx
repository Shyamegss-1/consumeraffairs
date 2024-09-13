"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";
import React, { useState, ReactNode } from "react";
import AdminLayout from "./AdminLayout";
import { User } from "next-auth";

export default function AdminAuthLayout({
  children,
  user
}: {
  children: React.ReactNode;
  user:User
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <AdminLayout >
      <div className="bg-gray-100 min-h-screen">
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col lg:ml-72">
            {/* <!-- ===== Header Start ===== --> */}
            <Header user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main className="">
              <div className="p-4">
                {children}
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </AdminLayout>
  );
}
