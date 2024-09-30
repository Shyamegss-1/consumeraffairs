import Image from "next/image";
import React from "react";
import "./Module.css";
import CategoryLayout from "./CategoryLayout";
import CategoryWiseCompanyList from "./CategoryWiseCompanyList";
import CompanyFooter from "@/app/listing/(listing-footer)/CompanyFooter";
// type Props = {};

const page = ({ params }: { params: { slug: string } }) => {
  // console.log(params, "jhgghfgf");

  return (
    <CategoryLayout params={params}>
      <CategoryWiseCompanyList params={params}/>
      {/* <CompanyFooter /> */}
    </CategoryLayout>
  );
};

export default page;
