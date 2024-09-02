import { Logo } from "@/components/icons/Icons";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const handleLogout = async () => {
    // const res = await logoutHandler();
    // if (res?.status) {
      await signOut({ callbackUrl: "/business/login" });
      // toast.success(res.message)
    // }else{
    //   toast.error("Something went wrong.")
    // }
  };

  return (
    <div className="sticky top-0 z-30 shadow-lg w-full bg-white">
      {/* <TopNavNotification /> */}
      <div className="max-w-7xl mx-auto">
        <div className="header">
          <div className="logo">
            <Link href="/business">
              <Image
                width={300}
                height={100}
                src="/SoftWareHub-logo-1.png"
                alt=""
              />
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link href="/business/add-business">Add Business</Link>
              </li>
              <li>
                <Link href="/business/my-listings">My Listings</Link>
              </li>
              <li>
                <Link href="/business/promotions">Promotions</Link>
              </li>
            </ul>
          </div>
          <div className="nav-actions">
            {/* <div class="notifications">
                      <i class="bi bi-bell text-dark fs-2"></i>
                  </div> */}
            <div className="logout mx-4">
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
            <div className="user-img">
              <Link href="/business/my-profile">
                <Logo />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative grid grid-cols-12 justify-between px-20 py-3 items-center">
        <Link
          href={"/"}
          className="col-span-3 lg:size-[40%] mx-auto flex justify-center items-center"
        >
          <Logo />
        </Link>
        <div className='col-span-6'>


        </div>
        <div className="col-span-3 hidden md:flex justify-end items-center">
          <Link
            href={"/business"}
            className="hover:bg-hover ml-2 px-4 py-2 rounded-lg font-semibold ring-2 ring-primary_dark text-primary_dark"
          >
            Logout
          </Link>

        </div>
      </div> */}
    </div>
  );
};

export default Header;
