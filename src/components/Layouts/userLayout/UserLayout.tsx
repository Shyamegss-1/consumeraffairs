import React, { ReactNode } from "react";
import Navbar from "../../Navbar/Navbar";
import HomePage from "@/pages/Home/HomePage";
import Footer from "../../Footer/Footer";
import Navmenu from "../../Navbar/Navmenu";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const UserLayout = async ({ children }: { children: ReactNode }) => {
  

  return (
    <div className="relative w-full">
      {/* <Navmenu /> */}
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default UserLayout;
