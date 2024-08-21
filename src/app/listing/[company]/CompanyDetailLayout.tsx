import TopCategoriesCard from "@/app/category/[slug]/TopCategoriesCard";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  websiteName: string;
};

const CompanyDetailLayout = ({ children, websiteName }: Props) => {


  console.log(websiteName,"{websiteName}");
  

  return (
    <div className="max-w-7xl mx-auto">
      <div className="business-profile-btns mt-5 gap-3">
        <Link className="mr-2" href="#review-new-form-box">
          <button className="fill mb-2">
            <i className="fa fa-edit " />
            {/* <iconify-icon icon="bxs:edit" className="text-white" />  */}
            Write a review
          </button>
        </Link>
        <Link className="mr-2" href="#business-profile-review-section">
          <button className=" mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 4v13.17L18.83 16H4V4zm0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m-2 10H6v2h12zm0-3H6v2h12zm0-3H6v2h12z"
              ></path>
            </svg>
            {/* <i class="fas fa-readme    "></i> */}
            {/* <iconify-icon icon="ic:outline-insert-comment" /> */}
            Read Reviews
          </button>
        </Link>
        <Link target="_blank" className="mr-2" href="http://dgdfgg.com">
          <button className=" mb-2">
            <i className="fa fa-globe" aria-hidden="true"></i>
            {/* <iconify-icon icon="ph:globe-bold" />  */}Visit Website
          </button>
        </Link>
        <Link className="mr-2" href={`/business/register?claim=${websiteName}`}>
          <button className=" " style={{}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"></path>
                <path stroke-linecap="round" d="m9 15l6-6m0 6L9 9"></path>
              </g>
            </svg>
            {/* <iconify-icon icon="humbleicons:times-circle" />  */}
            Claim website/listing 
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {children}
        <TopCategoriesCard />
      </div>
    </div>
  );
};

export default CompanyDetailLayout;
