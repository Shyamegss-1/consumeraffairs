import React from "react";
import { FaUser, FaUserCheck, FaUserTimes } from "react-icons/fa";
import { prisma } from "../../../prisma/prisma";
import { TbLiveView, TbLogs } from "react-icons/tb";
import { MdOutlinePendingActions } from "react-icons/md";

type Props = {};

const BlogDetails = async (props: Props) => {
  const blogs = await prisma.blog.findMany({
    select: {
      b_id: true,
    },
  });

  const totalUsers = async () => {
    return (
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <TbLogs className="size-8 text-active_dark" />
          </span>
          <span className="text-lg font-semibold text-active_dark">
            Total Blogs
          </span>
        </div>
        <span className="text-lg font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {blogs?.length}
        </span>
      </div>
    );
  };

  const verifiedUsers = async () => {
    return (
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <TbLiveView className="size-8 text-active_dark" />
          </span>
          <span className="text-lg font-semibold text-active_dark">
            Live Blogs
          </span>
        </div>
        <span className="text-lg font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {
            blogs?.filter((item: any, i: number) => item.status === "LIVE")
              ?.length
          }
        </span>
      </div>
    );
  };
  const unVerifiedUsers = async () => {
    return (
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span className="p-2 bg-primary_light/15 rounded-md shadow-inner">
            <MdOutlinePendingActions className="size-8 text-active_dark" />
          </span>
          <span className="text-lg font-semibold text-active_dark">
            Pending Blogs
          </span>
        </div>
        <span className="text-lg font-semibold text-active_dark size-10 bg-primary_light/40 flex justify-center items-center rounded-full ">
          {
            blogs?.filter((item: any, i: any) => item.status === "PENDING")
              ?.length
          }
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="w-full rounded-xl ring-1 ring-active_dark hover:bg-primary_light/15 cursor-pointer transition delay-300 ease-linear">
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

export default BlogDetails;
