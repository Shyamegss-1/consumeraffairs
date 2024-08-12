import React, { ReactNode } from "react";
import Navbar from "../../Navbar/Navbar";
import HomePage from "@/pages/Home/HomePage";
import Footer from "../../Footer/Footer";
import Navmenu from "../../Navbar/Navmenu";

const UserLayout = ({ children }: { children: ReactNode }) => {
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
