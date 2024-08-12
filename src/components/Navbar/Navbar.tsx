import React from "react";
import { Logo, ProfileIcon, SearchIcon } from "../icons/Icons";
import Link from "next/link";
import TopNavNotification from "./TopNavNotification";
import { url } from "inspector";
import SearchComponent from './SearchComponent'

const Navbar = () => {

  const navLinks = [
    {
      label: "Trending",
      url: "Trending",
    },
    {
      label: "Buyers Guides",
      url: "Trending",
    },
    {
      label: "Home",
      url: "Trending",
    },
    {
      label: "Home",
      url: "Trending",
    },
  ];

  return (
    <div className="sticky top-0 z-30 shadow-lg w-full bg-white">
      <TopNavNotification />
      <div className="relative grid grid-cols-2 justify-between px-20 py-3 items-center">
        <Link
          href={"/"}
          className="w-full lg:size-[40%] mx-auto flex justify-center items-center"
        >
          <Logo />
        </Link>
        <div className="hidden md:flex justify-end items-center">
          <Link
            href={"/all-categories"}
            className="hover:bg-hover px-4 py-3 rounded-lg font-normal"
          >
            Read/Write a review
          </Link>
          <SearchComponent/>
          <Link href={""} className="px-4 py-3 hover:bg-hover rounded-lg ">
            <ProfileIcon className="size-5 fill-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
