import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BusinessAuthLayout from "./BusinessAuthLayout";

const BusinessLayout = ({ children }: { children: ReactNode }) => {
  return (
    <BusinessAuthLayout>
      <div className="relative w-full">{children}</div>
    </BusinessAuthLayout>
  );
};

export default BusinessLayout;
