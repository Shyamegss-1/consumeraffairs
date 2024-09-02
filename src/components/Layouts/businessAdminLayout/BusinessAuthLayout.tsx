"use client";
import React from "react";
import { useSession } from "next-auth/react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { redirect } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const BusinessAuthLayout = ({ children }: Props) => {
 
  return (
    <>
      <Header />
      <main className="max-h-[80vh] overflow-auto py-10">{children}</main>
      {/* {children} */}
      <Footer />
    </>
  );
};

export default BusinessAuthLayout;
