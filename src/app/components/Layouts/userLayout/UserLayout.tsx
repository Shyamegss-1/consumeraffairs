import React from "react";
import Navbar from "../../Navbar/Navbar";
import HomePage from "@/app/pages/Home/HomePage";
import Footer from "../../Footer/Footer";
import Navmenu from "../../Navbar/Navmenu";

const UserLayout = () => {
  return (
    <div className="relative w-full">
      <Navmenu />
      <HomePage />
      <Footer />
    </div>
  );
};

export default UserLayout;
