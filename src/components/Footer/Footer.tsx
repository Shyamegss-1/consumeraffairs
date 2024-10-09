import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { LiaAddressCardSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="w-full relative mt-20 ">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between sm:justify-center items-start flex-wrap sm:flex-nowrap sm:gap-8">
          <div className="relative w-full sm:w-1/3">
            <Image
              src={"/SoftWareHub-logo-2.png"}
              alt="brand-logo"
              height={540}
              width={960}
              className="w-[270px] h-auto"
              priority
              objectFit="cover"
            />
            <p className="text-gray-600 py-4 font-medium">
              My Reviews is a platform where people can share their experiences
              and reviews about different companies. With My Reviews, you can
              trust that the reviews are real and verified, making it a reliable
              source for honest opinions.
            </p>
          </div>
          <div className="relative w-1/2 sm:w-1/3">
            <h6>Quick Links</h6>
            <ul className="list-none">
              <li className="py-2 ">
                <Link className="hover:text-blue-700" href="/">
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link className="hover:text-blue-700" href="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="py-2">
                <Link className="hover:text-blue-700" href="/about">
                  About
                </Link>
              </li>
              <li className="py-2">
                <Link className="hover:text-blue-700" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="py-2">
                <Link className="hover:text-blue-700" href="/terms-of-use">
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative w-1/2 sm:w-1/3">
            <h6>Contact Info</h6>
            <ul className="list-none">
              <li className="py-2 text-gray-600 inline-flex items-center gap-2">
                <FaMailBulk />
                <a className="" href="mailto:info@myreviews.com">
                  info@myreviews.com
                </a>
              </li>
              <li className="py-2 text-gray-600 inline-flex items-center gap-2">
                <LiaAddressCardSolid className="size-5 p-0 m-0" />
                Lackland Ave, Piscataway, NJ 08854, United States
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h6 className="text-center py-4 bg-active_dark text-white">
          2024 &copy; All rights reserved | Designed By{" "}
          <Link href={"https://zonewebsites.com"} target="_blank">
            Zonewebsites
          </Link>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
