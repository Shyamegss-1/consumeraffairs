import React from "react";
import ReadOrWriteReviewSection from "./ReadOrWriteReviewSection";
import CategorySection from "./PopularCategorySection";
import AllCategories from "./AllCategories";
import "./Module.css";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <ReadOrWriteReviewSection />
      <div className="bg-gradient-to-r from-primary_light  to-primary_dark py-14 mt-10">
        <CategorySection />
      </div>
      <div className="py-14 mt-10">
        <AllCategories params={null}/>
      </div>
    </>
  );
};

export default page;
