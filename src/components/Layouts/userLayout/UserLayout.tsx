import React, { ReactNode } from "react";
import Navbar from "../../Navbar/Navbar";

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
