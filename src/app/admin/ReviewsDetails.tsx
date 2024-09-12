import React from "react";
import { prisma } from "../../../prisma/prisma";
import { FaListUl } from "react-icons/fa";
import { FcApproval, FcDisapprove } from "react-icons/fc";

type Props = {};

const ReviewsDetails = async (props: Props) => {
  const reviews = await prisma.review.findMany({
    select: {
      id: true,
      flag: true,
      reported: true,
      review_status: true,
    },
  });

  const totalReviews = async () => {
    return (
      <div className="py-4 px-4 flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FaListUl className="size-8 text-lime-600" />
          </span>
          <span className="text-base font-semibold text-active_dark">
            Total Reviews
          </span>
        </div>
        <span className="text-base font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {reviews?.length}
        </span>
      </div>
    );
  };

  const activeReviews = async () => {
    return (
      <div className="py-4 px-4 flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FcApproval className="size-8" />
          </span>
          <span className="text-base font-semibold text-active_dark">
            Active Reviews
          </span>
        </div>
        <span className="text-base font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {reviews?.filter((item, i: number) => item.review_status)?.length}
        </span>
      </div>
    );
  };
  const inactiveReviews = async () => {
    return (
      <div className="py-4 px-4 flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FcDisapprove className="size-8" />
          </span>
          <span className="text-base font-semibold text-active_dark">
            Inactive Reviews
          </span>
        </div>
        <span className="text-base font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {reviews?.filter((item, i: number) => item.review_status==="Active")?.length}
        </span>
      </div>
    );
  };
  const reportedReviews = async () => {
    return (
      <div className="py-4 px-4 flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FcDisapprove className="size-8" />
          </span>
          <span className="text-base font-semibold text-active_dark">
            Reported Reviews
          </span>
        </div>
        <span className="text-base font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {reviews?.filter((item, i: number) => item.reported)?.length}
        </span>
      </div>
    );
  };
  const flagedReviews = async () => {
    return (
      <div className="py-4 px-4 flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FcDisapprove className="size-8" />
          </span>
          <span className="text-base font-semibold text-active_dark">
            Flagged Reviews
          </span>
        </div>
        <span className="text-base font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {reviews?.filter((item, i: number) => item.flag)?.length}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
      <div className="w-full rounded-xl ring-1 ring-active_dark hover:bg-primary_light/15 cursor-pointer">
        {activeReviews()}
      </div>
      <div className="w-full rounded-xl ring-1 ring-active_dark hover:bg-primary_light/15 cursor-pointer">
        {inactiveReviews()}
      </div>
      <div className="w-full rounded-xl ring-1 ring-active_dark hover:bg-primary_light/15 cursor-pointer">
        {reportedReviews()}
      </div>
      <div className="w-full rounded-xl ring-1 ring-active_dark hover:bg-primary_light/15 cursor-pointer">
        {flagedReviews()}
      </div>
      <div className="w-full rounded-xl bg-primary_light/15 hover:ring-1 hover:ring-active_dark cursor-pointer">
        {totalReviews()}
      </div>
    </div>
  );
};

export default ReviewsDetails;
