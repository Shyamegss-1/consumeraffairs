"use client"
import { listingDomain } from "@/server-actions/listingDomain";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";
import './Module.css'

type Props = {};

const DomainForm = (props: Props) => {
  return (
    <form
      action={async (formData) => {
        const domain = formData.get("domain");
        const res = await listingDomain(domain);
        if (!res.status) {
          Swal.fire({
            title: "Error",
            text: String(res.error),
            icon: "error",
          });
          return;
        } else {
          redirect(`/listing/${String(res.domain)?.replaceAll(".", "-")}`);
        }
      }}
    >
      <input
        type="text"
        name="domain"
        placeholder="Kindly enter your domain name Eg. consumeraffairs.com"
        className="py-3 pl-3 rounded-md pr-14 text-xl w-full focus:ring-2 focus:outline-none placeholder:text-base ring-2 ring-gray-200 focus:ring-blue-700"
      />
      <button type="submit">
        <Image
          className="absolute z-20 top-3.5 right-4"
          src={"/next-solid-arrow.svg"}
          width={20}
          height={20}
          alt=""
        />
      </button>
    </form>
  );
};

export default DomainForm;
