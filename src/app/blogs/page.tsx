import React from "react";
import RecentBlogs from "./RecentBlogs";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-center">Our Blogs</h2>
        <div className="relative">
          <h4 className="pb-4 border-b-2 border-black w-fit">Recent Blogs</h4>
          <div>
            <RecentBlogs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
