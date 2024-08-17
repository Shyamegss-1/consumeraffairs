import { getCompanyDetails } from "@/server-actions/getCompanyDetails";
import Image from "next/image";
import React from "react";
import CompanyDetailLayout from "./CompanyDetailLayout";
import "./Module.css";
import ReviewForm from "./ReviewForm";
import { auth } from "@/auth";

const page = async ({ params }: { params: { company: string } }) => {
  const session = await auth();
  const user: any = session?.user;
  // const companyDetail = async () => {
  let companyDetail: any = await getCompanyDetails(params.company, user);
  //   return res;
  // };

  console.log(companyDetail);

  return (
    <div className="main-business-profile-section">
      <div className="banner-profile-box">
        <Image
          src="/banner.png"
          className="img-fluid banner-img w-100 bannerimg"
          width={1920}
          height={1080}
          alt=""
        />{" "}
        <div className="banner-profile-content">
          <div className="banner-profile-logo">
            <Image
              src={`/${companyDetail.logo}`}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="banner-profile-info ml-2">
            <h1>{companyDetail.website_link}</h1>
            <div className="banner-ratings">
              <span className="banner-rating-icons flex">
                <i className="fa fa-star me-1" />
                <i className="fa fa-star me-1" />
                <i className="fa fa-star me-1" />
                <i className="fa fa-star me-1" />
                <i className="fa fa-star me-1" />{" "}
              </span>
              <span className="ms-2">0.0 ( 0 Reviews )</span>
            </div>
          </div>
        </div>
      </div>
      <CompanyDetailLayout>
        <div className="col-span-8">
          <div className="business-profile-about-content">
            <h4 className="mb-3">About Business</h4>
            <div className="underline" />
            <p className="mt-4"></p>
          </div>
          <div className="business-profilecontact-details mt-4"></div>
          <div className="advertisement">
            <Image
              src="/consumerstales.jpg"
              className="img-fluid w-100"
              alt=""
              width={1920}
              height={1080}
            />
          </div>
          <ReviewForm
            companyId={companyDetail.id}
            prevReviews={companyDetail.reviews}
            userId={session?.user?.id ? Number(session.user.id) : null}
          />
        </div>
      </CompanyDetailLayout>
    </div>
  );
};

export default page;
