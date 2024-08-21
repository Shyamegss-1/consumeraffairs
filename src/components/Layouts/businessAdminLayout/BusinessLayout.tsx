import React, { ReactNode } from "react";

const BusinessLayout = ({ children }: { children: ReactNode }) => {
  

  return (
    <div className="relative w-full">
      {/* <Navmenu /> */}
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default BusinessLayout;