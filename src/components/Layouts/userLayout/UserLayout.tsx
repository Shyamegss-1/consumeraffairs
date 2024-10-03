"use client";
import React, { ReactNode } from "react";
import Navbar from "../../Navbar/Navbar";
import { useRouter } from "next/router";
import Footer from "@/components/Footer/Footer";

const UserLayout = ({ children }: { children: ReactNode }) => {
  // const router =  useRouter();
  // console.log(router.pathname,"jgjhghfhgfh");

  return (
    <div className="relative w-full">
      {/* <Navmenu /> */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;
