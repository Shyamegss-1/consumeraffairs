"use client";
import React, { useEffect, useState } from "react";
import { CategoryOptions } from "../add-business/CategoryOptions";
import Image from "next/image";
import PhoneNumber from "../add-business/PhoneNumber";
import { handleUpdateBusinessProfile } from "@/server-actions/businessRegister";

type Props = {
  formData: any;
  setFormData: any;
};

const UpdateBusinessProfile = ({ formData, setFormData }: Props) => {
  const [options, setOptins] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: any, key: string) => {
    if (event.target.files && event.target.files.length > 0) {
      setFormData({
        ...formData,
        [key]: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    const res = await handleUpdateBusinessProfile(formData);
  };

  useEffect(() => {
    const options = async () => {
      let res = await CategoryOptions();
      console.log(res, "ressssssssssss");

      setOptins(res);
    };
    options();
  }, []);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full relative max-h-[25rem] p-4 overflow-auto no-scrollbar"
      >
        <div className="relative flex flex-col justify-">
          <div className="profile-section">
            <p className="text-lg font-semibold">Logo</p>
            <div className=" flex justify-between items-center gap-4 ">
              <div className="p-2 ">
                {formData.logo && (
                  <Image
                    src={formData.logo}
                    alt="logo"
                    className="size-20"
                    width={200}
                    height={300}
                  />
                )}
              </div>
              <div className="p-2 relative flex flex-col justify-center items-start gap-4">
                <div>
                  <p className="text-sm font-semibold">
                    Recommended size -{" "}
                    <span className="text-sm font-light">200px X 200px</span>
                  </p>
                  <p className="text-sm font-semibold">
                    Maximum file size -{" "}
                    <span className="text-sm font-light">2MB</span>
                  </p>
                </div>
                <label
                  htmlFor="logo-upload"
                  className="text-center w-full bg-active_dark text-white font-semibold px-6 py-2 rounded-full"
                >
                  Upload
                </label>
                <input
                  id="logo-upload"
                  type="file"
                  className="opacity-0 absolute w-10"
                  onChange={(e) => handleFileChange(e, "logo")}
                />
              </div>
            </div>
            <div className="p-2 relative flex flex-col justify-center items-start gap-4">
              <div>
                <p className="text-sm font-semibold">
                  Recommended size -{" "}
                  <span className="text-sm font-light">200px X 200px</span>
                </p>
                <p className="text-sm font-semibold">
                  Maximum file size -{" "}
                  <span className="text-sm font-light">2MB</span>
                </p>
              </div>
              <label
                htmlFor="logo-upload"
                className="text-center w-full bg-active_dark text-white font-semibold px-6 py-2 rounded-full"
              >
                Upload
              </label>
              <input
                id="logo-upload"
                type="file"
                className="opacity-0 absolute w-10"
                onChange={(e) => handleFileChange(e, "logo")}
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="text-sm font-semibold" htmlFor="businessname">
            Business Name
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="businessname"
            name="businessName"
            value={formData.businessName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-2">
          <label className="text-sm font-semibold" htmlFor="jobrole">
            Job Role
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="jobrole"
            name="jobRole"
            value={formData.jobRole}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-2">
          <label className="text-sm font-semibold" htmlFor="Address">
            Address
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="Address"
            name="address"
            value={formData.address}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-2">
          <label className="text-sm font-semibold" htmlFor="emailID_1">
            Email ID 1
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="emailID_1_purpose"
            name="emailID_1_purpose"
            value={formData.emailID_1_purpose}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="emailID_1"
            name="emailID_1"
            value={formData.emailID_1}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-2">
          <label className="text-sm font-semibold" htmlFor="emailID_2">
            Email ID 2
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="emailID_2_purpose"
            name="emailID_2_purpose"
            value={formData.emailID_2_purpose}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="emailID_2"
            name="emailID_2"
            value={formData.emailID_2}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-2">
          <label className="text-sm font-semibold" htmlFor="emailID_3">
            Email ID 3
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="emailID_3_purpose"
            name="emailID_3_purpose"
            value={formData.emailID_3_purpose}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            className="form-control mt-1"
            id="emailID_3"
            name="emailID_3"
            value={formData.emailID_3}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-sm font-semibold">
            Company Number
          </label>
          <div className="relative">
            <PhoneNumber
              value={formData.countryCode}
              onchange={(val) => setFormData({ ...formData, countryCode: val })}
            />
            <input
              type="tel"
              placeholder="Company Number"
              name="companyNumber"
              value={formData.companyNumber}
              onChange={(e) => handleChange(e)}
              className="form-control mt-1"
              style={{ paddingLeft: "5.9rem" }}
            />
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-sm font-semibold">
            Business Category
          </label>
          <select
            name="businessCategory"
            className="form-control mt-1"
            value={formData.businessCategory}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select Category</option>
            {options?.map((item, index) => (
              <option key={index} value={item.cid}>
                {item.category_name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-sm font-semibold">
            About
          </label>
          <textarea
            className="form-control mt-1 min-h-32"
            value={formData.about}
            name="about"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-sm font-semibold">
            Meta Title
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="metaTitle"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-sm font-semibold">
            Meta Keywords
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="metaKeywords"
            name="metaKeywords"
            value={formData.metaKeywords}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="" className="text-sm font-semibold">
            Meta Description
          </label>
          <input
            type="text"
            className="form-control mt-1"
            id="metaDescription"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="banner-section mt-2">
          <p className="text-sm font-semibold">Banner</p>
          <div className=" flex justify-between items-center gap-4 ">
            <div className="p-2 w-32 h-20">
              {formData.logo && (
                <Image
                  src={formData.banner}
                  alt="logo"
                  className="w-full h-16 object-cover"
                  width={200}
                  height={300}
                />
              )}
            </div>
            <div className="p-2 relative flex flex-col justify-center items-start gap-4">
              <div>
                <p className="text-sm font-semibold">
                  Recommended size -{" "}
                  <span className="text-sm font-light">1920px X 300px</span>
                </p>
                <p className="text-sm font-semibold">
                  Maximum file size -{" "}
                  <span className="text-sm font-light">2MB</span>
                </p>
              </div>
              <label
                htmlFor="banner-upload"
                className="text-center w-full bg-active_dark text-white font-semibold px-6 py-2 rounded-full"
              >
                Upload
              </label>
              <input
                id="banner-upload"
                type="file"
                className="opacity-0 absolute w-10"
                onChange={(e) => handleFileChange(e, "banner")}
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="text-sm font-semibold" htmlFor="EmailID-3">
            {`Social Links ( Optional )`}
          </label>
          <input
            type="text"
            className="form-control mt-1"
            name="facebookLink"
            value={formData.facebookLink}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            className="form-control mt-1"
            name="instagramLink"
            value={formData.instagramLink}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            className="form-control mt-1"
            name="twitter"
            value={formData.twitter}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            className="form-control mt-1"
            name="linkedin"
            value={formData.linkedin}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="py-2 px-6 bg-active_dark text-white font-bold mt-4 rounded-full">
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateBusinessProfile;
