import BusinessAuthLayout from "@/components/Layouts/businessAdminLayout/BusinessAuthLayout";
import React, { Suspense } from "react";
import ResponsiveTable from "./ResponsiveTable";
import { prisma } from "../../../../prisma/prisma";
import { auth } from "@/auth";
import Listing from "./Listing";



interface ItemsPageProps {
  params: {
    page: string;
  };
  searchParams: {
    page?:string;
    search?: string;
    pageSize?: string;
  };
}



const page = ({
  params,
  searchParams,
}: ItemsPageProps) => {
  // const data = [
  //   { name: "John Doe", age: 28, email: "john@example.com" },
  //   { name: "Jane Doe", age: 26, email: "jane@example.com" },
  //   { name: "Sam Smith", age: 22, email: "sam@example.com" },
  //   { name: "Sara Connor", age: 30, email: "sara@example.com" },
  // ];

  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.pageSize) || 10;
  const search = searchParams.search || "";

  console.log(search,"search");
  

  return (
    <>
      <BusinessAuthLayout>
        <div className="max-w-screen-xl mx-auto ">
          <h3 className="text-center font-bold text-4xl my-10">My Listing</h3>
          <div className="shadow-md rounded-lg p-8 bg-white border">
            {/* <ResponsiveTable data={data} /> */}
            <Suspense fallback={<>Loading...</>}>
              <Listing page={page} pageSize={pageSize} search={search}/>
            </Suspense>
          </div>
        </div>
      </BusinessAuthLayout>
    </>
  );
};

export default page;
