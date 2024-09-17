"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UpdateBusinessProfile from "./UpdateBusinessProfile";
import PreviewPage from "./PreviewPage";
import { handleUpdateBusinessProfile } from "@/server-actions/businessRegister";

type Props = {
  businessDetails: any;
};

const BusinessPage = ({ businessDetails }: Props) => {
  const [formData, setFormData] = useState<any>({
    logo: "/logo.png",
    businessName: "",
    jobRole: "",
    address: "",
    emailID_1: "",
    emailID_1_purpose: "",
    emailID_2: "",
    emailID_2_purpose: "",
    emailID_3: "",
    emailID_3_purpose: "",
    countryCode: "1",
    companyNumber: "",
    businessCategory: "",
    about: "",
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
    banner: "/banner.png",
    facebookLink: "",
    instagramLink: "",
    twitter: "",
    linkedin: "",
  });


  useEffect(() => {
    if (businessDetails) {
      setFormData({
        id: businessDetails.listing[0].id,
        logo: businessDetails.listing[0].logo,
        businessName: businessDetails.userDetails.companyName,
        jobRole: businessDetails.userDetails.jobTitle,
        address: businessDetails.userDetails.address,
        emailID_1: businessDetails.listing[0].emailID_1,
        emailID_1_purpose: businessDetails.listing[0].emailID_1_purpose,
        emailID_2: businessDetails.listing[0].emailID_2,
        emailID_2_purpose: businessDetails.listing[0].emailID_2_purpose,
        emailID_3: businessDetails.listing[0].emailID_3,
        emailID_3_purpose: businessDetails.listing[0].emailID_3_purpose,
        countryCode: businessDetails.listing[0].countryCode,
        companyNumber: businessDetails.listing[0].companyNumber,
        businessCategory: businessDetails.listing[0].businessCategory,
        about: businessDetails.listing[0].about,
        metaTitle: businessDetails.listing[0].metaTitle,
        metaKeywords: businessDetails.listing[0].metaKeywords,
        metaDescription: businessDetails.listing[0].metaDescription,
        banner: businessDetails.listing[0].banner,
        facebookLink: businessDetails.listing[0].social_links.facebooke,
        instagramLink: businessDetails.listing[0].social_links.instagram,
        twitter: businessDetails.listing[0].social_links.twitter,
        linkedin: businessDetails.listing[0].social_links.linkedin,
      });
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-10 relative">
        <div className="col-span-4 borders p-4 bg-white shadow-md rounded-xl">
          <div className="flex flex-col justify-center items-start">
            <h4 className="text-2xl font-bold mb-2 pb-4 border-b-2 border-b-active_dark">
              Edit Business <br />
              <span className="text-sm font-light ">
                Your business profile will look like this
              </span>
            </h4>
          </div>
          <div className="flex flex-col justify-center items-start bg-gray-100 mt-10 rounded-lg">
            <UpdateBusinessProfile
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
        <div className="col-span-8 borders bg-white shadow-md rounded-b-xl">
          {/* <CompanyDetails company={"apifan.com"} /> */}
          <PreviewPage
            banner={formData.banner}
            logo={formData.logo}
            listing={businessDetails.listing[0]}
            userDetails={businessDetails.userDetails}
            user={businessDetails}
          />
        </div>
      </div>
    </>
  );
};

export default BusinessPage;
