import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

const BusinessAuthLayout = ({ children }: Props) => {
  const { data, status, update } = useSession();
  // console.log();

  

  return data?.user.userType === "BUSINESS_USER" ? (
    <>
      <Header />
      {/* <Navbar /> */}
      {children}
      <Footer />
    </>
  ) : (
    children
  );
};

export default BusinessAuthLayout;
