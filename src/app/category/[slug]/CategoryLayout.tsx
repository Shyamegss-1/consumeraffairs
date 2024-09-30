import Image from "next/image";
import React, { ReactNode } from "react";
import TopCategoriesCard from "./TopCategoriesCard";
import CompanyFooter from "@/app/listing/(listing-footer)/CompanyFooter";

type Props = {
  children: ReactNode;
  params: any;
};

const CategoryLayout = ({ children, params }: Props) => {
  return (
    <section className="softwares-main mt-5">
      <div className="max-w-7xl mx-auto ">
        <div className="">{children}</div>
      </div>
      <CompanyFooter />
    </section>
  );
};

export default CategoryLayout;
