"use client";

import ErrorPage from "@/components/errorpage/ErrorPage";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userType, setUserTpe] = useState("");

  const verifyUserEmail = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      // if (res.data.user.userType === "BUSINESS_USER") {
      //   await redirect("/business/change-password");
      // }
      setUserTpe(res.data.user.userType);
      console.log(res);
      
    } catch (error: any) {
      setError(true);
      console.log(error.reponse.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  if (error) {
    return <ErrorPage message="Invalid token" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-2">
      {/* <h1 className="text-4xl ">Verify Email</h1> */}
      {/* <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2> */}

      {/* {verified && ( */}
      <div className="px-10 py-8 rounded text-center">
        <h2 className="text-2xl mb-8 font-semibold">
          Email Verified Successfully
        </h2>
        <Link
          className="ring-2 py-4 px-8 hover:bg-primary_dark hover:text-white hover:font-bold text-primary_dark font-bold transition rounded ring-primary_dark"
          href={
            userType === "BUSINESS_USER"
              ? "/business/change-password"
              : userType === "ADMIN"
              ? "/admin/login"
              : "/signin"
          }
        >
          Login
        </Link>
      </div>
      {/* )} */}
    </div>
  );
}
