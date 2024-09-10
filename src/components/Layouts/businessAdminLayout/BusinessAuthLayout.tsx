"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const BusinessAuthLayout = ({ children }: Props) => {
 
  return (
    <>
      <Header />
      <main className="min-h-[80vh] overflow-auto py-10 bg-gray-50">{children}</main>
      {/* {children} */}
      <Footer />
    </>
  );
};

export default BusinessAuthLayout;
