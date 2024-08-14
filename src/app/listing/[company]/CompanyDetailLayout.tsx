import TopCategoriesCard from "@/app/category/[slug]/TopCategoriesCard";
import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CompanyDetailLayout = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="business-profile-btns mt-5">
        <a href="#review-new-form-box">
          <button className="fill mb-2">
            {/* <iconify-icon icon="bxs:edit" className="text-white" />  */}
            Write a review
          </button>
        </a>
        <a href="#business-profile-review-section">
          <button className=" mb-2">
            {/* <iconify-icon icon="ic:outline-insert-comment" /> */}
            Read Reviews
          </button>
        </a>
        <a target="_blank" href="http://dgdfgg.com">
          <button className=" mb-2">
            {/* <iconify-icon icon="ph:globe-bold" /> Visit Website */}
          </button>
        </a>
        <a href="/business/register.php?claim=dgdfgg.com">
          <button className=" " style={{}}>
            {/* <iconify-icon icon="humbleicons:times-circle" />  */}
            Claim website/listing
          </button>
        </a>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {children}
        <TopCategoriesCard />
      </div>
    </div>
  );
};

export default CompanyDetailLayout;
