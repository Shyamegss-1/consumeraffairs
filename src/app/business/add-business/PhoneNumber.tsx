"use client";
import { Value } from "@prisma/client/runtime/library";
import React, { useEffect, useState } from "react";
import { PhoneInput, CountrySelector } from "react-international-phone";
import "react-international-phone/style.css";

type Props = {
  value: {
    countryDialCode: string;
    countryCode: string;
  };
  onchange: (value: string) => void;
};

export const PhoneNumber: React.FC<Props> = ({ value, onchange }) => {
  const [countryCode, setCountryCode] = useState("1");
  const [countryiso2, setCountryiso2] = useState("us");

  useEffect(() => {
    setCountryCode(value.countryDialCode);
    setCountryiso2(value.countryCode);
  }, [value]);

  return (
    <div className="absolute z-20 top-0.5 flex items-center left-2">
      <CountrySelector
        buttonStyle={{ border: "none", backgroundColor: "transparent" }}
        selectedCountry={countryiso2}
        onSelect={(_country: any) => {
          setCountryCode(_country.dialCode);
          setCountryiso2(_country.iso2);
          onchange(_country);
        }}
      />
      <span className="text-primary font-medium">+{countryCode}</span>
    </div>
  );
};

export default PhoneNumber;
