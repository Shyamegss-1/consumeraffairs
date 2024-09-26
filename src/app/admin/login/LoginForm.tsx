"use client";
import { loginHandler } from "@/server-actions/authActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { toast } from "sonner";

type Props = {};

const LoginForm = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [eyeToggle, setEyeToggle] = useState(true);
  const router = useRouter();

  const handleAdminLogin = async (formData: FormData) => {
    setLoading(true);
    const toastId = toast.loading("Logging...");
    const email = (formData.get("email") as string) || "";
    const password = (formData.get("password") as string) || "";
    const userType = "ADMIN";

    const res = await loginHandler({ email, password, userType });
    if (res.status) {
      toast.success("Logged in successfully", {
        id: toastId,
      });
      setLoading(false);
      router.refresh();
    } else {
      toast.error(res.message, {
        id: toastId,
      });
      setLoading(false);
    }
  };

  return (
    <form action={handleAdminLogin} className="flex flex-col gap-3 mt-10">
      <div className="block relative w-full">
        <label
          htmlFor="email"
          className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-primary_light outline-0"
        />
      </div>
      <div className="block relative">
        <label
          htmlFor="password"
          className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
        >
          Password
        </label>
        <input
          type={eyeToggle ? "password" : "text"}
          id="password"
          name="password"
          className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-primary_light outline-0"
        />
        {eyeToggle ? (
          <BsEye
            className="absolute right-2 top-[55%] cursor-pointer"
            onClick={() => setEyeToggle(!eyeToggle)}
          />
        ) : (
          <BsEyeSlash
            className="absolute right-2 top-[55%] cursor-pointer"
            onClick={() => setEyeToggle(!eyeToggle)}
          />
        )}
      </div>
      <div>
        <a className="text-sm text-primary_light" href="#">
          Forgot your password?
        </a>
      </div>
      <button
        type="submit"
        className="bg-active_dark m-auto px-6 py-2 rounded-md text-white text-sm font-normal w-full mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
