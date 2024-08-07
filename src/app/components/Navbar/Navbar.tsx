import React from "react";
import { Logo, ProfileIcon, SearchIcon } from "../icons/Icons";
import Link from "next/link";
import TopNavNotification from "./TopNavNotification";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-30 shadow-lg w-full ">
      <TopNavNotification />
      <div className="relative grid grid-cols-3 justify-between px-20 py-3 items-center">
        <div className="">Menu</div>
        <Link
          href={"/"}
          className="w-full lg:size-[40%] mx-auto flex justify-center items-center"
        >
          <Logo />
        </Link>
        <div className="hidden md:flex justify-end items-center">
          <Link
            href={"/review/write"}
            className="hover:bg-hover px-4 py-3 rounded-lg font-normal"
          >
            Write a review
          </Link>
          <div className="relative">
            <button className="px-4 py-3 hover:bg-hover rounded-lg ">
              <SearchIcon className="size-5 " />
            </button>
          </div>
          <Link href={""} className="px-4 py-3 hover:bg-hover rounded-lg ">
            <ProfileIcon className="size-5 fill-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
