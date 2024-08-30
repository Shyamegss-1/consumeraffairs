import Image from "next/image";
import React from "react";
import "./module.css";
import LoginForm from "./LoginForm";
import { auth } from "@/auth";
import { redirect, } from "next/navigation";

type Props = {};
export const metadata = {
  title: 'Business Login | consumer affairs',
  description: 'Business login page',
};

const page = async (props: Props) => {
  const session = await auth();
  console.log(session, "session ");

  if (session) {
    session.user.userType === "BUSINESS_USER"
      ? redirect("/business")
      : redirect("/business/login");
  }

  return (
    <section className="login-new-page">
      <div className="grid grid-cols-12 h-full gx-0">
        <div className="col-span-4">
          <div className="h-full bg-primary_dark flex items-center justify-center">
            <div className="logo text-center">
              <a href="../">
                <Image
                  src="/signup-banner.png"
                  className="rounded"
                  width={350}
                  height={400}
                  alt="bannerimage"
                />
              </a>
            </div>
            {/*<div class="mt-6 advertisement-image">*/}
            {/*    <img src="/signup-banner.png">*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="col-span-8">
          <div className="login-form-main">
            <div className="back-button text-end">
              <a href="../" className="theme-btn1">
                Back
              </a>
            </div>
            <div className="login-form-inner">
              <div className="sec-headings">
                <h1>Login</h1>
                <p className="text-secondary">
                  Login &amp; get started with reciting your tales...
                </p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page