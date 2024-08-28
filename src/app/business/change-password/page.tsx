"use client";
import React from "react";
import "./Module.css";
import { toast } from "sonner";
import { redirect } from "next/navigation";

type Props = {};

const page = (props: Props) => {
  const handleChangePassword = async (formData: FormData) => {
    const password = await formData.get("password");
    const cpassword = await formData.get("confirm_password");
    if (password === cpassword) {
      toast.success("Password changed successfully");
      redirect("/business/login")
    }else{
      toast.error("Password and Confirm Password does not match");
    }
  };

  return (
    <div className="max-w-7xl mx-auto" style={{ marginTop: 40 }}>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="horizontal-container flex flex-col justify-center items-center gap-y-10">
            <div className="text-center">
              <img src="https://consumerstales.com/assets/img/SoftWareHub-logo-1.png" />
            </div>
            <div className="horizontal-form-box mt-5">
              <div className="horizontal-info-container">
                <h2 className="horizontal-heading">Set your password</h2>
              </div>
              <form
                action={handleChangePassword}
                className="horizontal-form mt-4"
                method="post"
              >
                <input type="hidden" name="id" defaultValue={376} />
                <div
                  className="form-group mb-4 "
                  style={{ position: "relative" }}
                >
                  <label htmlFor="new_password">New password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control input-lg"
                    id="new_password"
                    required={true}
                    aria-autocomplete="list"
                  />
                  {/* <span
                    style={{ cursor: "pointer" }}
                    toggle="#password-field"
                    className="fa fa-fw fa-eye-slash field-icon toggle-password"
                  /> */}
                </div>
                <div className="form-group" style={{ position: "relative" }}>
                  <label htmlFor="confirm_password">Confirm new password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    className="form-control input-lg"
                    id="confirm_password"
                    required={true}
                  />
                  {/* <span
                    style={{ cursor: "pointer" }}
                    toggle="#password-field"
                    className="fa fa-fw fa-eye-slash field-icon toggle-password"
                  /> */}
                </div>
                <button
                  type="submit"
                  name="setpassword"
                  className="bg-primary_light py-2 mt-4 w-full rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
