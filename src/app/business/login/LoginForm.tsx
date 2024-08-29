"use client";
import { loginHandler } from "@/server-actions/authActions";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

type Props = {};

const LoginForm = (props: Props) => {
  const handleBusinessLogin = async (formData: FormData) => {
    const toastId = toast.loading("Logging...");
    const email = (formData.get("email") as string) || "";
    const password = (formData.get("password") as string) || "";
    const userType = "BUSINESS_USER";
    // console.log({ email, password, userType });

    const res = await loginHandler({ email, password, userType });
    if (res.status) {
      toast.success("Logged in successfully", {
        id: toastId,
      });
      redirect('/business');
    } else {
      toast.error(res.message, {
        id: toastId,
      });
    }
  };

  return (
    <form action={handleBusinessLogin} className="mt-5">
      <div className="form-field">
        <label>Email Address*</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email or phone number"
          id="email"
          style={{
            backgroundImage: 'url("data:image/png',
            backgroundRepeat: "no-repeat",
            backgroundSize: 20,
            backgroundPosition: "97% center",
            cursor: "auto",
          }}
        />
      </div>
      <div className="form-field">
        <label>Password*</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          id="password"
        />
      </div>
      <div className="form-field d-flex justify-content-between">
        <div className="forgot-link">
          <a href="/business/forgot.php">Forgot password?</a>
        </div>
      </div>
      <div className="form-field">
        <button
          className="theme-btn1 px-5 login-btn"
          name="login"
          type="submit"
          id="login"
        >
          Sign In
        </button>
        <p className="mt-2">
          {" Don't have an account? "}
          <a href="register">Create a free account</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
