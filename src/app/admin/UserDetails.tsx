"use server";
import React from "react";
import { prisma } from "../../../prisma/prisma";
import { FaUser, FaUserCheck, FaUserTimes } from "react-icons/fa";

type Props = {};

const UserDetails = async (props: Props) => {
  const users = await prisma.users.findMany({
    where: {
      userType: "USER",
    },
    select: {
      id: true,
      userType: true,
      verify: true,
    },
  });

  const totalUsers = async () => {
    return (
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FaUser className="size-8 text-active_dark" />
          </span>
          <span className="text-lg font-semibold text-active_dark">
            Total Users
          </span>
        </div>
        <span className="text-lg font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {users?.length}
        </span>
      </div>
    );
  };

  const verifiedUsers = async () => {
    return (
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FaUserCheck className="size-8 text-active_dark" />
          </span>
          <span className="text-lg font-semibold text-active_dark">
            Verified Users
          </span>
        </div>
        <span className="text-lg font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {users?.filter((item, i) => item.verify)?.length}
        </span>
      </div>
    );
  };
  const unVerifiedUsers = async () => {
    return (
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <FaUserTimes className="size-8 text-active_dark" />
          </span>
          <span className="text-lg font-semibold text-active_dark">
            Unverified Users
          </span>
        </div>
        <span className="text-lg font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {users?.filter((item, i) => !item.verify)?.length}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="w-full rounded-xl ring-1 ring-active_dark hover:bg-primary_light/15 cursor-pointer transition delay-300 ease-linear" >
        {verifiedUsers()}
      </div>
      <div className="w-full rounded-xl ring-1 ring-active_dark hover:bg-primary_light/15 cursor-pointer transition delay-300 ease-linear">
        {unVerifiedUsers()}
      </div>
      <div className="w-full rounded-xl bg-primary_light/15 hover:ring-1 hover:ring-active_dark cursor-pointer transition delay-300 ease-linear">
        {totalUsers()}
      </div>
    </>
  );
};

export default UserDetails;
