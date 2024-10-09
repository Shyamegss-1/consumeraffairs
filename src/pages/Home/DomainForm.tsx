"use client";
import { listingDomain } from "@/server-actions/listingDomain";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./Module.css";
import ClickOutside from "@/components/ClickOutside";
import { getListing } from "@/server-actions/getListing";

type Props = {};

const DomainForm = (props: Props) => {
  const [listing, setListing] = useState<
    { id: number; website_link: string }[]
  >([]);
  const [domain, setDomain] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  // Function to handle selection of suggestion
  const handleSuggestionClick = (website_link: string) => {
    setDomain(website_link);
    setShowSuggestions(false); // Close the suggestions list
  };

  // Function to fetch listings from the API
  const fetchListings = async (domain: string) => {
    try {
      if (domain === "") {
        return;
      }
      const res = await fetch(`/api/listing?domain=${domain}`);
      const data = await res.json();
      console.log(data, "data");

      setListing(data.listing || []);
    } catch (error) {
      console.error("Error fetching listings", error);
    }
  };

  return (
    <form
      className="relative"
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
      <div className="relative">
        <input
          type="text"
          name="domain"
          value={domain}
          onChange={async (e) => {
            setDomain(e.target.value);
            if (e.target.value) {
              setShowSuggestions(true); // Show suggestions when user types
              await fetchListings(e.target.value); // Fetch listing suggestions
            } else {
              setShowSuggestions(false); // Hide if input is cleared
            }
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Kindly enter your domain name"
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

        {/* Suggestions dropdown */}
        {showSuggestions && listing.length > 0 && (
          <ClickOutside onClick={() => setShowSuggestions(false)}>
            <ul className="absolute z-10 bg-white border border-gray-300 w-full max-h-60 overflow-y-auto mt-2 rounded-md shadow-lg">
              {listing.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(item.website_link)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {item.website_link}
                </li>
              ))}
            </ul>
          </ClickOutside>
        )}
      </div>
    </form>
  );
};

export default DomainForm;
