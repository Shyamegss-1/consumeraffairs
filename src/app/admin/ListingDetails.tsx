import React from "react";
import { prisma } from "../../../prisma/prisma";
import { FcApproval, FcDisapprove } from "react-icons/fc";
import { FaListUl } from "react-icons/fa";

type Props = {};

const ListingDetails = async (props: Props) => {
  const users = await prisma.listing.findMany({
    select: {
      id: true,
      claim: true,
    },
  });

  const totalListings = async () => {
    return (
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FaListUl className="size-8 text-lime-600" />
          </span>
          <span className="text-lg font-semibold text-active_dark">
            Total Listings
          </span>
        </div>
        <span className="text-lg font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {users?.length}
        </span>
      </div>
    );
  };

  const verifiedListings = async () => {
    return (
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FcApproval className="size-8" />
          </span>
          <span className="text-lg font-semibold text-active_dark">
            Claimed Listings
          </span>
        </div>
        <span className="text-lg font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {users?.filter((item: any, i: number) => item.claim)?.length}
        </span>
      </div>
    );
  };
  const unVerifiedListing = async () => {
    return (
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FcDisapprove className="size-8" />
          </span>
          <span className="text-lg font-semibold text-active_dark">
            Unclaimed Listings
          </span>
        </div>
        <span className="text-lg font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {users?.filter((item: any, i: number) => !item.claim)?.length}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="w-full rounded-xl ring-1 ring-active_dark hover:bg-primary_light/15 cursor-pointer">
        {verifiedListings()}
      </div>
      <div className="w-full rounded-xl ring-1 ring-active_dark hover:bg-primary_light/15 cursor-pointer">
        {unVerifiedListing()}
      </div>
      <div className="w-full rounded-xl bg-primary_light/15 hover:ring-1 hover:ring-active_dark cursor-pointer">
        {totalListings()}
      </div>
    </>
  );
};

export default ListingDetails;
