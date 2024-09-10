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
    <div className="absolute z-20 top-0.5 flex items-center left-2">
      <CountrySelector
        buttonStyle={{ border: "none",backgroundColor:"transparent" }}
        selectedCountry={country}
        onSelect={(country) => {
          setCountryCode(country.dialCode);
          setCountry(country.iso2);
          onchange(`${country.dialCode}-${value}`);
        }}
      />
      <span className="text-primary font-medium">+{countryCode}</span>
    </div>
  );
};

export default PhoneNumber;
