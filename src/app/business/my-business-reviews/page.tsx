import BusinessAuthLayout from "@/components/Layouts/businessAdminLayout/BusinessAuthLayout";
import React, { Suspense } from "react";
import BusinessRatingCard, { BusinessCardLoading } from "./BusinessRatingCard";
import StatusNotationCard from "./StatusNotationCard";
import Pagination from "@/components/pagination/Pagination";
import MyReviewsGrid from "./MyReviewsGrid";
import Reviews from "./Reviews";
import { auth } from "@/auth";

interface ItemsPageProps {
  params: {
    page: string;
  };
  searchParams: {
    page?: string;
    search?: string;
    pageSize?: string;
  };
}

const page = async ({ params, searchParams }: ItemsPageProps) => {
  const session = await auth();
  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.pageSize) || 10;
  const search = searchParams.search || "";

  return (
    <BusinessAuthLayout>
      <div className="container mx-auto">
        <h3 className="text-center font-bold text-4xl my-10">
          My Business Reviews
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">My Business Rating</h2>
              <Suspense fallback={<BusinessCardLoading />}>
                <BusinessRatingCard session={session} />
              </Suspense>
            </div>
            <StatusNotationCard />
          </div>
          <Reviews
            page={page}
            pageSize={pageSize}
            search={search}
            session={session}
          />
        </div>
      </div>
    </BusinessAuthLayout>
  );
};

export default page;
