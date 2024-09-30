import React from "react";
import BlogDetails from "./BlogDetails";
import CompanyFooter from "@/app/listing/(listing-footer)/CompanyFooter";
import TopCategoriesCard from "@/app/category/[slug]/TopCategoriesCard";

type Props = {
  params: {
    slug: string;
  };
};

const page = (props: Props) => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <BlogDetails {...props} />
          </div>
          <div className="col-span-4">
            <TopCategoriesCard />
          </div>
        </div>
      </div>
      <CompanyFooter />
    </div>
  );
};

export default page;
