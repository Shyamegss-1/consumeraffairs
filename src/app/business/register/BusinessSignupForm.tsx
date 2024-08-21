"use client";
import React, { useState } from "react";
import PhoneNumber from "./PhoneNumber";

type Props = {
  claimUrl: string;
};

const BusinessSignupForm: React.FC<Props> = ({ claimUrl }) => {
  const [number, setMobNumber] = useState<string>("");
  const [websiteUrl, setWebsiteUrl] = useState<string>(
    `www.${claimUrl?.toLowerCase()}`
  );
  const [emailAddressDomain, setEmailAddressDomain] = useState<string>(
    `@${claimUrl?.toLowerCase()}`
  );
  const onchange = (value: string) => {
    console.log(value);
    let number = value.split("-")[1];
    if (number.length > 15) {
      return;
    }
    setMobNumber(number ? number : "");
  };

  return (
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
        <form method="post">
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
                  name="job"
                  id="job"
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
                  name="url"
                  value={websiteUrl}
                  onChange={(e) => {
                    const validUrl = e.target.value.replace(/^www\./, "");
                    setEmailAddressDomain("@" + validUrl);
                    setWebsiteUrl(e.target.value);
                  }}
                  pattern=""
                  disabled={claimUrl !== ""}
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
                    placeholder="info"
                    className="form-control"
                    style={{
                      backgroundImage: 'url("data:image/png',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: 20,
                      backgroundPosition: "97% center",
                      cursor: "auto",
                    }}
                    data-temp-mail-org={0}
                  />
                  <span className="domain-email" id="domain">
                    {emailAddressDomain}
                  </span>
                  <input type="hidden" id="dd" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-field">
                <label>Company Name*</label>
                <input
                  type="text"
                  placeholder=" Company name.."
                  name="company"
                  id="company"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="form-field d-flex justify-content-between">
            {/* <div class="checkbox">
                              <label><input type="checkbox"> <span class="ms-1 ">Accept T&c*</span></label>
                          </div> */}
          </div>
          <div className="form-field">
            <button className="theme-btn1 px-5" id="register" type="button">
              Sign Up
            </button>
            <p className="mt-2">
              Already have an account? <a href="login">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessSignupForm;
