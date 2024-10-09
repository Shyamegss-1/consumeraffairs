import InfiniteCarousel from "@/components/InfiniteCarousel/InfiniteCarousel";
import Link from "next/link";
import React, { Suspense } from "react";
import { prisma } from "../../../prisma/prisma";

const RecentReviews = () => {
  const recentReviews = async () => {
    const review = await prisma.review.findMany({
      include: {
        user: true,
        company: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    });
    return review.map((item) => (
      <div
        key={item.id}
        className="ring-1 ring-gray-200 p-4 rounded-3xl  mx-4 max-w-72 min-w-72 min-h-40"
      >
        <div className="flex justify-start items-center gap-4">
          <p className="size-12 flex justify-center items-center bg-green-200 rounded-full">
            {item.user.firstName.charAt(0)}
          </p>
          <div className="">
            <p>{item.user.firstName}</p>
            <p className="text-xs">{item.createdAt.toLocaleDateString()}</p>
          </div>
        </div>
        {/* <div className="mt-2">
          <div className="rvw__hdr-stat">
            <div className="rvw__rtg rvw__rtg--sm-dsk stars-sprt stars-sprt--p-1" />
          </div>
          <span className="text-xs">
            Reviewed{" "}
            <Link href={"/"} className="underline">
              Western Union
            </Link>{" "}
            on Aug. 1, 2024
          </span>
        </div> */}
        <div className="mt-4 w-full">
          <h6 className="w-full text-sm font-normal text-wrap line-clamp-5">
            {item.review_comment}
            {/* I have used Western Union to purchase money orders for many years.
            But in the last few I have had to return my money orders for
            refunds. When purchasing them at the store they had no problem
            taking my cash and.... */}
            &nbsp;
          </h6>
          <Link
            href={`/listing/${item.company.slug}`}
            className="font-medium underline"
          >
            full review
          </Link>
        </div>
      </div>
    ));
  };
  return (
    <div className="hmpg-rvws">
      <div className="relative max-w-7xl mx-auto mt-20 p-4">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-start justify-center col-span-2 sm:col-span-2">
            <h6 className="text-heading-6 font-semibold text-gray-900 font-graphik">
              RECENT REVIEWS
            </h6>
            <h2 className="text-heading-1 font-semibold text-gray-900 font-publico max-w-[610px] mt-4 mb-8">
              Unfiltered opinions from verified consumers
            </h2>
          </div>
          <ul className="flex flex-col items-start justify-center gap-4 col-span-2 sm:col-span-2">
            <li className="flex gap-4 items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                className="size-5"
              >
                <g data-name="Live Stroke">
                  <circle className="fill-blue-500" cx={18} cy={18} r={17} />
                  <path
                    className="ca-icon__colored-stroke-2"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M29.1 10.59L14.28 25.41 6.9 18.04"
                  />
                </g>
              </svg>
              We conduct phone interviews to collect reviews.
            </li>
            <li className="flex gap-4 items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                className="size-5"
              >
                <g data-name="Live Stroke">
                  <circle
                    className="fill-blue-500 size-5"
                    cx={18}
                    cy={18}
                    r={17}
                  />
                  <path
                    className="ca-icon__colored-stroke-2"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M29.1 10.59L14.28 25.41 6.9 18.04"
                  />
                </g>
              </svg>
              We tailor questions to extract detailed experiences.
            </li>
            <li className="flex gap-4 items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                className="size-5"
              >
                <g data-name="Live Stroke">
                  <circle
                    className="fill-blue-500 size-5"
                    cx={18}
                    cy={18}
                    r={17}
                  />
                  <path
                    className="ca-icon__colored-stroke-2"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M29.1 10.59L14.28 25.41 6.9 18.04"
                  />
                </g>
              </svg>
              Collected reviews let you know what to expect.
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <InfiniteCarousel>
          <Suspense fallback={<></>}>{recentReviews()}</Suspense>
        </InfiniteCarousel>
      </div>
    </div>
  );
};

export default RecentReviews;
