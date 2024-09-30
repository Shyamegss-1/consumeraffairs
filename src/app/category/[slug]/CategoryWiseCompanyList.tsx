import Image from "next/image";
import React from "react";
import { prisma } from "../../../../prisma/prisma";
import TopCategoriesCard from "./TopCategoriesCard";
import Link from "next/link";
import CompanyFooter from "@/app/listing/(listing-footer)/CompanyFooter";
import CompanyDetailPage, { ratingComponent } from "./CompanyDetailPage";

type Props = {};

const companyList = (company: any) => {
  return (
    <div key={company.id} className="software-list-box mt-3 ">
      <div className="flex justify-between items-start gap-4">
        <div className="flex justify-start items-center gap-4">
          <div className="software-logo">
            <Link href={`/listing/${company.slug}`}>
              <Image
                height={100}
                width={100}
                src={
                  company.logo ? `${company.logo}` : "/No_Image_Available.jpg"
                }
                alt="logo"
                objectFit="cover"
              />
            </Link>
          </div>
          <div className="software-short-desc">
            <a href="/listing/boeing" className="">
              <h4 className="lg:text-xl font-bold">{company.name} </h4>
            </a>
            {ratingComponent(company.id)}
            <small className="fw-normal text-secondary mt-1" />
          </div>
        </div>
        <div
          className="claim-website text-end"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Link href={`/listing/${company.slug}`}>
            <button className=" theme-btn1 unfill">View Company reviews</button>
          </Link>
          {company.claim ? (
            <Link href={`/listing/${company.slug}`}>
              <button className="theme-btn1 ">Claimed website/listing</button>
            </Link>
          ) : (
            <Link href={`/business/register?claim=${company.slug}`}>
              <button className="theme-btn1 ">Claim website/listing</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const CategoryWiseCompanyList = async ({ params }: { params: any }) => {
  const categoryWiseCompany = await prisma.listing.findMany({
    where: {
      category: {
        category_slug: params.slug,
      },
    },
  });

  // console.log(categoryWiseCompany);

  return (
    <>
      <div className="cat-total-listings mt-5 mb-4">
        <h1 className="fs-3">
          <b>{categoryWiseCompany?.length} </b>Listings in{" "}
          {params.slug.replaceAll("-", " ")} Available
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 my-3">
          {categoryWiseCompany?.map((company) =>
            categoryWiseCompany.length > 1 ? (
              companyList(company)
            ) : (
              <CompanyDetailPage key={company.id} company={company} />
            )
          )}
        </div>
        <TopCategoriesCard />
      </div>
    </>
  );
};

export default CategoryWiseCompanyList;
