"use client";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import { CategoryOptions } from "./CategoryOptions";
import PhoneNumber from "./PhoneNumber";
import { toast } from "sonner";
import { convertToBase64 } from "@/lib/Hooks";
import Swal from "sweetalert2";
import { addListingByBusinessOwner } from "@/server-actions/addListingByBusinessUser";
import LoadingScreen from "@/components/ui/LoadingScreen";

//

type Props = {
  userId: string;
};

const NewBusinessForm = ({ userId }: Props) => {
  const [options, setOptins] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [logo, setLogo] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string | null>("us");
  const [countryDialCode, setCountryDialCode] = useState<string | null>("1");
  const [country, setCountry] = useState<string>("United States");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(e.currentTarget);
    const toastId = toast.loading("loading...");

    try {
      setLoading(true);
      const company_name = formData.get("company_name");
      const websiteUrl = formData.get("websiteUrl");
      const category = formData.get("category");
      const description = formData.get("description");
      const companyEmail = formData.get("companyEmail");
      const companyNumber = formData.get("companyNumber");
      const companyAddress = formData.get("companyAddress");
      const country = formData.get("country");
      // const data = {
      //   name: name as string,
      //   jobTitle: jobTitle as string,
      //   email: email ? ((email + emailAddressDomain) as string) : "",
      //   website: websiteUrl ? (websiteUrl as string) : (website as string),
      //   businessName: businessName as string,
      //   phoneNumber: number ? (`${"+" + numberCode}-${number}` as string) : "",
      //   userType: "BUSINESS_USER",
      // };
      const data = {
        userId: userId,
        companyName: company_name as string,
        websiteUrl: websiteUrl as string,
        category: category as string,
        description: description as string,
        companyEmail: companyEmail as string,
        companyNumber: companyNumber as string,
        companyAddress: companyAddress as string,
        country: country as string,
        countryCode: countryCode as string,
        logo: logo as string,
      };

      console.log(data);

      const res = await addListingByBusinessOwner(data);
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

  const handleFileChange = async (event: any, key: string) => {
    if (event.target.files && event.target.files.length > 0) {
      // console.log(convertToBase64(event.target.files[0]),"jhhhgjh");
      let logo: any = await convertToBase64(event.target.files[0]);
      setLogo(logo);
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
    <div className="px-10   overflow-y-auto h-full custom-scrollbar">
      <form
        className="bg-white rounded-2xl shadow-md p-6 my-20"
        onSubmit={handleSubmit}
      >
        <h3 className="border-b-2 border-active_dark py-4 w-fit text-2xl font-bold text-slate-900">
          Add New Business
        </h3>
        <div className="w-full mt-10">
          <p className="text-lg text-slate-900 font-semibold mb-2">Logo</p>
          <div className="grid grid-cols-12 gap-x-10 ">
            <Image
              src={logo || "/logo.png"}
              alt=""
              width={1080}
              height={1080}
              className="border rounded-full p-2 col-span-2"
            />
            <div className="col-span-10 flex flex-col justify-center items-center relative">
              <label
                htmlFor="logo"
                className="w-1/2 ring-2 ring-primary_dark text-primary_dark font-semibold rounded-3xl text-center py-2"
              >
                Browse Files
                <input
                  id="logo"
                  type="file"
                  className="absolute  opacity-0"
                  onChange={(e) => handleFileChange(e, "logo")}
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
        <div className="grid grid-cols-12 gap-4 mt-6">
          <div className="form-field col-span-4">
            <label htmlFor="company_name">Company Name</label>
            <input
              type="text"
              placeholder="Enter company name"
              name="company_name"
              className="form-control"
            />
          </div>
          <div className="form-field col-span-4">
            <label htmlFor="websiteUrl">Website URL</label>
            <input
              type="text"
              id="websiteUrl"
              placeholder="Enter Website Url"
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
              name="companyEmail"
              className="form-control"
            />
          </div>
          <div className="form-field col-span-6">
            <label htmlFor="">Company Number</label>
            <div className="relative">
              <PhoneNumber
                value={{
                  countryCode: countryCode ? countryCode : "us",
                  countryDialCode: countryDialCode ? countryDialCode : "1",
                }}
                onchange={(val: any) => {
                  setCountry(val.name);
                  setCountryDialCode(val.dialCode);
                  setCountryCode(val.iso2);
                }}
              />
              <input
                type="tel"
                placeholder="Company Number"
                name="companyNumber"
                className="form-control"
                style={{ paddingLeft: "6rem" }}
              />
            </div>
          </div>
          <div className="form-field col-span-6">
            <label htmlFor="">Company Address</label>
            <input
              type="text"
              placeholder="Company Address"
              name="companyAddress"
              className="form-control"
            />
          </div>
          <div className="form-field col-span-6">
            <label htmlFor="">Country</label>
            <input
              type="text"
              placeholder="Company Address"
              name="country"
              defaultValue={country}
              className="form-control"
            />
          </div>
        </div>
        <button className="py-2 px-6 rounded-full mt-4 bg-active_dark text-white font-bold">
          Submit
        </button>
      </form>
      {loading && (
        <div className="absolute z-30 w-full left-0 backdrop-blur-sm h-screen flex justify-center items-center">
          <LoadingScreen text="Please Wait..." />
        </div>
      )}
    </div>
  );
};

export default NewBusinessForm;
