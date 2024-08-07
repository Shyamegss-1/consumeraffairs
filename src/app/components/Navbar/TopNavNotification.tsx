import Link from "next/link";
import React from "react";

const TopNavNotification = () => {
  return (
    <div className="hidden sm:flex justify-center items-center bg-hover w-full p-3">
      <p className="hidden sm:block text-xs md:text-sm">
        We are not a government agency and may be paid by companies displayed.{" "}
        <Link href="/about/faq" className="underline">How it works.</Link>
      </p>
    </div>
  );
};

export default TopNavNotification;
