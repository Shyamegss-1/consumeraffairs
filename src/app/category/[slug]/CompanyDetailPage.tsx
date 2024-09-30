import Image from "next/image";
import Link from "next/link";
import React from "react";
import { prisma } from "../../../../prisma/prisma";

type Props = {
  company: any;
};

export const ratingComponent = async (id: number) => {
  const averageRatingData = await prisma.review.aggregate({
    where: {
      company_id: id,
      // review_status:"Active"
    },
    _avg: {
      review_rating: true,
    },
    _count: {
      _all: true,
    },
  });

  // console.log(averageRatingData);

  return (
    <div className="ratings flex items-center justify-start gap-2 mt-2">
      {[...Array(5)].map((item: any, index: number) => {
        if (
          index <
          Math.floor(
            averageRatingData._avg?.review_rating
              ? averageRatingData._avg?.review_rating
              : 0
          )
        ) {
          return <i key={index} className="fa fa-star text-yellow-500"></i>;
        } else {
          return <i key={index} className="fa fa-star text-gray-400" />;
        }
      })}
      <p>{`${
        averageRatingData._avg?.review_rating
          ? averageRatingData._avg?.review_rating
          : 0
      } rating.`}</p>
      {/* <i className="fa fa-star text-yellow-600" />
        <i className="fa fa-star text-yellow-600" />
        <i className="fa fa-star text-yellow-600" />
        <i className="fa fa-star text-yellow-600" /> */}
    </div>
  );
};

const CompanyDetailPage = ({ company }: Props) => {
  return (
    <div key={company.id} className="software-list-box mt-3 ">
      <div className="software-list-header">
        <div className="flex justify-center items-start gap-4">
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
      </div>
      <div className="software-list-body">
        <h4>Product Description:</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: `<div>${
              company.about ? company.about : "No Data Available"
            }</div>`,
          }}
        />
      </div>
      <div
        className="claim-website text-end mt-4"
        style={{ display: "flex", justifyContent: "space-around" }}
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
  );
};

export default CompanyDetailPage;
