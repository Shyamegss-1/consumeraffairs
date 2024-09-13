"use client"
import React from "react";
import Link from "next/link";
import { Logo } from "@/components/icons/Icons";
import ProfileSection from "@/components/Navbar/ProfileSection";

type Props= {
  children: React.ReactNode;
  open:boolean;
}

const AdminHeader = ({}:Props) => {

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
      <div className="relative flex justify-between items-center px-20">
        <Link
          href={"/"}
          className="flex justify-center items-center"
        >
          <Logo />
        </Link>
        <div className="hidden md:flex justify-end items-center">
          <ProfileSection /> 
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
