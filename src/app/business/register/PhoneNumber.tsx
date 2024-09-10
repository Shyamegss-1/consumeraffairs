"use client";
import { Value } from "@prisma/client/runtime/library";
import React, { useState } from "react";
import { PhoneInput, CountrySelector } from "react-international-phone";
import "react-international-phone/style.css";

type Props = {
  value: string;
  onchange: (value: string) => void;
};

export const PhoneNumber: React.FC<Props> = ({ value, onchange }) => {
  const [countryCode, setCountryCode] = useState("1");
  const [country, setCountry] = useState("us");

  return (
    <div className="relative flex w-full">
      <div className="flex justify-start items-center gap-4 w-full ">
        {/* <PhoneCode phone={phone} setPhone={setPhone} /> */}
        <div className="absolute z-20 flex items-center left-3">
          <CountrySelector
            buttonStyle={{ border: "none" }}
            selectedCountry={country}
            onSelect={(country) => {
              setCountryCode(country.dialCode);
              setCountry(country.iso2);
              onchange(`${country.dialCode}-${value}`);
            }}
          />
          <span className="text-primary font-medium">+{countryCode}</span>
        </div>
        <input
          name="contactNumber"
          value={value}
          onChange={(e) => onchange(`${countryCode}-${e.target.value}`)}
          className="w-full phone-input rounded focus:outline-none placeholder:text-[#A9A3AF] text-sm lg:text-base font-medium"
          type="tel"
          placeholder="Phone..."
        />
      </div>
    </div>
  );
};

export default PhoneNumber;
