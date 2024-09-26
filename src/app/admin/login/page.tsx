import React from "react";
import LoginForm from "./LoginForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  console.log(session, "session ");

  if (session?.user?.userType === "ADMIN") {
    redirect("/admin");
  }
  return (
    <div className="bg-gray-100 min-h-screen w-full flex justify-center items-center">
      <div className="max-w-7xl mx-auto ">
        <div className="rounded-xl border shadow-sm bg-white p-10 sm:min-w-[500px]">
          <div className="relative flex flex-col p-4 rounded-md text-black bg-white">
            <h3 className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center w-full">
              Welcome Admin
            </h3>
            <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
              Log in to your account
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
