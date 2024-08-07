import React from "react";
import Navbar from "../../Navbar/Navbar";
import HomePage from "@/app/pages/Home/HomePage";

const UserLayout = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default UserLayout;
