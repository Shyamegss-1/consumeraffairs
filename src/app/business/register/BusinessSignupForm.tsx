"use client";
import React, { useEffect, useState } from "react";
import PhoneNumber from "./PhoneNumber";
import { businessRegister } from "@/server-actions/businessRegister";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { $Enums, Prisma } from "@prisma/client";
import LoadingScreen from "@/components/ui/LoadingScreen";

type Props = {
  claimUrl: string | null;
};

const BusinessSignupForm: React.FC<Props> = ({ claimUrl }) => {
  const [number, setMobNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [numberCode, setMobNumberCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [websiteUrl, setWebsiteUrl] = useState<string>(() =>
    claimUrl !== null && claimUrl !== "" ? `www.${claimUrl?.toLowerCase()}` : ""
  );
  const [emailAddressDomain, setEmailAddressDomain] = useState<string>(() =>
    claimUrl !== null && claimUrl !== "" ? `@${claimUrl?.toLowerCase()}` : "@"
  );
  const onchange = (value: string) => {
    let number = value.split("-")[1];
    if (number.length > 15) {
      return;
    }
    setMobNumber(number ? number : "");
    setMobNumberCode(value.split("-")[0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(e.currentTarget);
    const toastId = toast.loading("loading...");

    try {
      setLoading(true);
      const name = formData.get("fullname");
      const jobTitle = formData.get("jobTitle");
      const email = formData.get("email");
      const website = formData.get("website");
      const businessName = formData.get("company");
      const data = {
        name: name as string,
        jobTitle: jobTitle as string,
        email: email ? ((email + emailAddressDomain) as string) : "",
        website: websiteUrl ? (websiteUrl as string) : (website as string),
        businessName: businessName as string,
        phoneNumber: number ? (`${"+" + numberCode}-${number}` as string) : "",
        userType: "BUSINESS_USER" as
          | $Enums.UserType
          | Prisma.EnumUserTypeFilter<"users">
          | undefined,
      };

      const res = await businessRegister(data, claimUrl);
      if (!res.status) {
        toast.error(res.message, {
          id: toastId,
        });
      } else {
        toast.dismiss();
        Swal.fire({
          title: "Success",
          text: "Check your email to verify your account",
        });
      }
    } catch (error) {
      toast.error("An error occurred", { id: toastId });
    } finally {
      setLoading(false);
    }
  };
  console.log(claimUrl);

  return (
    <>
      <div className="login-form-main">
        <div className="back-button text-end">
          <button className="theme-btn1">Back</button>
        </div>
        <div className="login-form-inner">
          <div className="sec-headings">
            <h2>Sign Up</h2>
            <p className="text-secondary">
              Create a fresh account &amp; get started with reciting your tales
              <br /> with other folks....
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="col-lg-6">
                <div className="form-field">
                  <label>Full Name*</label>
                  <input
                    type="text"
                    placeholder="Full name..."
                    name="fullname"
                    id="fullname"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-field">
                  <label>Job Title*</label>
                  <input
                    type="text"
                    placeholder="Job Title..."
                    name="jobTitle"
                    id="jobTitle"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-field">
                  <label>Phone Number*</label>
                  <br />
                  <PhoneNumber value={number} onchange={onchange} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-field">
                  <label>Website URL*</label>
                  <input
                    type="text"
                    placeholder="www.website.com"
                    name="website"
                    value={websiteUrl}
                    onChange={(e) => {
                      const validUrl = e.target.value.replace(/^www\./, "");
                      setEmailAddressDomain("@" + validUrl);
                      setWebsiteUrl(e.target.value);
                    }}
                    disabled={claimUrl !== null && claimUrl !== ""}
                    id="website"
                    className="form-control disabled:bg-[#E9E9E9]"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-field">
                  <label>Email Address*</label>
                  <div className="flex items-center ">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(
                          e.target.value.includes("@")
                            ? e.target.value.split("@")[0]
                            : e.target.value
                        );
                      }}
                      placeholder="Email Address"
                      className="form-control"
                    />
                    <span className="domain-email" id="domain">
                      {emailAddressDomain}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-field">
                  <label>Company Name*</label>
                  <input
                    type="text"
                    placeholder="Company name.."
                    name="company"
                    id="company"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="form-field d-flex justify-content-between"></div>
            <div className="form-field">
              <button className="theme-btn1 px-5" type="submit">
                Sign Up
              </button>
              <p className="mt-2">
                Already have an account? <a href="login">Sign In</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      {loading && (
        <div className="min-h-screen z-20 w-full backdrop-blur-sm bg-transparent absolute top-0 left-0 flex justify-center items-center">
          <LoadingScreen text="Loading..." />
        </div>
      )}
    </>
  );
};

export default BusinessSignupForm;
