"use client";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import { CategoryOptions } from "./CategoryOptions";
import PhoneNumber from "./PhoneNumber";
import { toast } from "sonner";

//

type Props = {};

const NewBusinessForm = (props: Props) => {
  const [options, setOptins] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [logo, setLogo] = useState<string | null>(null);

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
      // const data = {
      //   name: name as string,
      //   jobTitle: jobTitle as string,
      //   email: email ? ((email + emailAddressDomain) as string) : "",
      //   website: websiteUrl ? (websiteUrl as string) : (website as string),
      //   businessName: businessName as string,
      //   phoneNumber: number ? (`${"+" + numberCode}-${number}` as string) : "",
      //   userType: "BUSINESS_USER" as
      //     | $Enums.UserType
      //     | Prisma.EnumUserTypeFilter<"users">
      //     | undefined,
      // };

      // const res = await businessRegister(data, claimUrl);
      // if (!res.status) {
      //   toast.error(res.message, {
      //     id: toastId,
      //   });
      // } else {
      //   toast.dismiss();
      //   Swal.fire({
      //     title: "Success",
      //     text: "Check your email to verify your account",
      //   });
      // }
    } catch (error) {
      toast.error("An error occurred", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const options = async () => {
      let res = await CategoryOptions();
      setOptins(res);
    };
    options();
  }, []);
  return (
    <div className="px-10">
      <form
        className="bg-white rounded-2xl shadow-md p-6"
        onSubmit={handleSubmit}
      >
        <h3 className="border-b-2 border-active_dark py-4 w-fit text-2xl font-bold text-slate-900">
          Add New Business
        </h3>
        <div className="w-full mt-10">
          <p className="text-lg text-slate-900 font-semibold mb-2">Logo</p>
          <div className="grid grid-cols-12 gap-x-10">
            <Image
              src={"/logo.png"}
              alt=""
              width={1080}
              height={1080}
              className="border rounded-full p-2 col-span-2"
            />
            <div className="col-span-10 flex flex-col justify-center items-start relative">
              <label
                htmlFor="logo"
                className="w-full ring-2 ring-primary_dark text-primary_dark font-semibold rounded-3xl text-center py-2 px-10"
              >
                Browse Files
                <input
                  type="file"
                  className="absolute  "
                  onChange={(file) => {
                    // setLogo(file?.target?.files[0]);
                  }}
                />
              </label>
              <p className="text-gray-500 mt-5 font-semibold">
                Note*:{" "}
                <span className="text-gray-400">
                  File should be 200px X 200px.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="form-field col-span-4">
            <label htmlFor="">Company Name</label>
            <input
              type="text"
              placeholder="Enter company name"
              name="company_name"
              className="form-control"
            />
          </div>
          <div className="form-field col-span-4">
            <label htmlFor="">Website URL</label>
            <input
              type="text"
              placeholder="Website URL"
              name="websiteUrl"
              className="form-control"
            />
          </div>
          <div className="form-field col-span-4">
            <label htmlFor="">Business Category</label>
            <select name="category" className="form-control">
              <option value="">Select Category</option>
              {options?.map((item, index) => (
                <option key={index} value={item.cid}>
                  {item.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field col-span-12 ">
            <label htmlFor="">About Description</label>
            <textarea
              placeholder="Website URL"
              name="description"
              className="form-control min-h-32"
            />
          </div>
          <h3 className="border-b-2 border-active_dark py-4 w-fit text-2xl font-bold text-slate-900 col-span-12">
            Address & Details
          </h3>
          <div className="form-field col-span-6">
            <label htmlFor="">Company Email Address</label>
            <input
              type="email"
              placeholder="Company Email Address"
              name="CompanyEmail"
              className="form-control"
            />
          </div>
          <div className="form-field col-span-6">
            <label htmlFor="">Company Number</label>
            <div className="relative">
              <PhoneNumber value="1" onchange={(val) => console.log(val)} />
              <input
                type="tel"
                placeholder="Company Number"
                name="CompanyNumber"
                className="form-control"
                style={{ paddingLeft: "5.9rem" }}
              />
            </div>
          </div>
          <div className="form-field col-span-6">
            <label htmlFor="">Website URL</label>
            <input
              type="text"
              placeholder="Company Address"
              name="companyAddress"
              className="form-control"
            />
          </div>
          <div className="form-field col-span-6">
            <label htmlFor="">Country</label>
            <select name="category" className="form-control">
              <option value="">Select Country</option>
              {options?.map((item, index) => (
                <option key={index} value={item.cid}>
                  {item.category_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="py-2 px-6 rounded-full mt-4 bg-active_dark text-white font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBusinessForm;
