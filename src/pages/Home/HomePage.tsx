import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import ServiceSection from "./ServiceSection";
import RecentReviews from "./RecentReviews";
import ProductInfo from "./ProductInfo";
import Banner from "./Banner";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";
import { listingDomain } from "@/server-actions/listingDomain";
import DomainForm from "./DomainForm";

const HomePage = ({ user }: any) => {
  const cardData = [
    {
      icon: "/icons/mortages.svg",
      url: "/category/banking",
      title: "Banking",
    },
    {
      icon: "/icons/Personal_loans.svg",
      url: "/category/financial",
      title: "Personal Loans",
    },
    {
      icon: "/icons/Solar.svg",
      url: "/category/energy",
      title: "Energy",
    },
    {
      icon: "/icons/Car_warranties.svg",
      url: "/category/automobile-manufacturer",
      title: "Automobiles",
    },
    {
      icon: "/icons/Home_Warranties.svg",
      url: "/category/home-improvement-company",
      title: "Home Improvement Company",
    },
    {
      icon: "/icons/Artboard_6.svg",
      url: "/category/media",
      title: "Media",
    },
  ];

  return (
    <>
      <div className="relative rounded-b-[3rem] bg-gradient-to-r from-primary_light  to-primary_dark flex justify-center items-center pt-24">
        <div className="mx-auto relative pb-32">
          <div className="grid grid-cols-2 justify-between items-center gap-10">
            <div className="mx-auto flex justify-end items-start">
              <div className="flex flex-col justify-center items-start">
                <h4 className="text-heading-3 font-heading-3 text-white py-2">
                  2024 Buyer’s Choice Awards
                </h4>
                <h1 className="text-heading-1 font-heading-1 text-white py-2">
                  See who’s the best of the best
                </h1>
                <Link
                  href={"/awards"}
                  className="mt-4 bg-[#EAF1FA] py-4 px-6 rounded-md text-heading-4 font-semibold text-[#1758A6]"
                >
                  See the winners
                </Link>

                <div className=" mt-14 relative w-full">
                  <DomainForm />
                </div>
              </div>
            </div>
            <div className="mx-auto flex justify-center items-center">
              <Image
                alt="banner"
                height={350}
                width={350}
                src={"/banner-image.jpg"}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-10 flex justify-center">
        <div className="flex flex-nowrap gap-5 px-10">
          {cardData.map((item) => (
            <article
              key={item.url}
              className="ring-1 ring-gray-200 rounded-3xl bg-white hover:shadow-xl justify-stretch items-stretch"
            >
              <Link
                href={item.url}
                className="flex justify-center items-center flex-col p-5 min-w-48"
              >
                <div className="flex flex-col items-center gap-4">
                  <Image
                    alt={item.title}
                    height={90}
                    width={90}
                    src={item.icon}
                    priority
                  />
                  <p className="text-heading-5 font-heading-4">{item.title}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <ServiceSection />
      <Suspense fallback={<></>}>
        <RecentReviews />
      </Suspense>
      <ProductInfo />
      <Banner />

      {/* <CategorySection /> */}
    </>
  );
};

export default HomePage;
