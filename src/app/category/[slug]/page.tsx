import Image from "next/image";
import React from "react";
import "./Module.css";
import CategoryLayout from "./CategoryLayout";
import CategoryWiseCompanyList from "./CategoryWiseCompanyList";
// type Props = {};

const page = ({ params }: { params: { slug: string } }) => {
  // console.log(params, "jhgghfgf");

  return (
    <CategoryLayout>
      <CategoryWiseCompanyList params={params}/>
    </CategoryLayout>
  );
};

export default page;
