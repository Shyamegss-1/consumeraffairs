import React from "react";
import BlogDetails from "./BlogDetails";
import CompanyFooter from "@/app/listing/(listing-footer)/CompanyFooter";
import TopCategoriesCard from "@/app/category/[slug]/TopCategoriesCard";
import BlogAsideSection from "./BlogAsideSection";

type Props = {
  params: {
    slug: string;
  };
};

const page = (props: Props) => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto my-20">
        <div className="grid grid-cols-12 gap-4 relative ">
          {/* <div className="col-span-8"> */}
          <BlogDetails {...props} />
          {/* </div> */}
        </div>
      </div>
      <CompanyFooter />
    </div>
  );
};

export default page;
