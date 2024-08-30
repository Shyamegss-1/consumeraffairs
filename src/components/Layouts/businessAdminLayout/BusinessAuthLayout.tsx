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
      {children}
      <Footer />
    </>
  );
};

export default BusinessAuthLayout;
