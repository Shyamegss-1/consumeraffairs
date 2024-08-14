import Image from "next/image";
import React, { ReactNode } from "react";
import TopCategoriesCard from "./TopCategoriesCard";

type Props = {
  children: ReactNode;
};

const CategoryLayout = ({ children }: Props) => {
  return (
    <section className="softwares-main mt-5">
      <div className="max-w-7xl mx-auto ">
        <div className="">
          <div className="cat-total-listings mt-5 mb-4">
            <h1 className="fs-3">
              <b>5 </b>Listings in Aerospace and defense Available
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {children}
            <TopCategoriesCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryLayout;
