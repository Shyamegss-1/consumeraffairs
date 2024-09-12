import { auth } from "@/auth";
import AdminLayout from "@/components/Layouts/adminLayout/AdminLayout";
import { redirect } from "next/navigation";
import React from "react";
import AdminHeader from "./AdminHeader";
import AdminAuthLayout from "@/components/Layouts/adminLayout/AdminAuthLayout";
import CardDataStats from "@/components/CardDataStats";
import UserDetails from "./UserDetails";
import ListingDetails from "./ListingDetails";
import BlogDetails from "./BlogDetails";
import ReviewsDetails from "./ReviewsDetails";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  if (!(session?.user?.userType === "ADMIN")) {
    redirect("/admin/login");
  }
  return (
    <AdminAuthLayout>
      <>
        <div className="grid grid-cols-12 gap-2 md:gap-4">
          <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
            <CardDataStats
              title="Users Details"
              description="See the total number of users we have and how many of them are verified and unverified."
            >
              {<UserDetails />}
            </CardDataStats>
          </div>
          <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
            <CardDataStats
              title="Listings Details"
              description="See the total number of listings we have and how many of them are claimed and unclaimed."
            >
              {<ListingDetails />}
            </CardDataStats>
          </div>
          <div className="col-span-12 lg:col-span-12 2xl:col-span-4">
            <CardDataStats
              title="Blog Details"
              description="See the total number of blogs we have and how many of them are verified and unverified."
            >
              {<BlogDetails />}
            </CardDataStats>
          </div>
          <div className="col-span-12">
            <CardDataStats
              title="Reviews"
              description="See the total number of Users we have and how many of them are Verified and Unverified."
            >
              {<ReviewsDetails />}
            </CardDataStats>
          </div>
        </div>
      </>
    </AdminAuthLayout>
  );
};

export default page;
