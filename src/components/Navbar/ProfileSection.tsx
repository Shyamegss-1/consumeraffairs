import React from "react";
import { ProfileIcon } from "../icons/Icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

type Props = {};

const ProfileSection = (props: Props) => {
  const { data: session } = useSession();
  console.log(session, "session");

  return session?.user.userType==='USER' ? (
    <div className="relative px-4 py-4 group hover:bg-hover rounded-lg ">
      <ProfileIcon className="size-5 fill-black" />
      <ul className="hidden group-hover:block absolute top-12 right-0 p-2 bg-white rounded-lg shadow min-w-40">
        <li className="">
          <Link
            href={"/profile"}
            className="py-2 text-sm font-bold text-black w-full px-2 hover:bg-primary_dark hover:text-white block rounded"
          >
            My Profile
          </Link>
        </li>
        <li className="">
          <Link
            href={"/reviews"}
            className="py-2 text-sm font-bold text-black w-full px-2 hover:bg-primary_dark hover:text-white block rounded"
          >
            My Reviews
          </Link>
        </li>
        <li className="">
          <p
            // href={"#/logout"}
            onClick={() => signOut({ callbackUrl: '/' })}
            className="cursor-pointer py-2 text-sm font-bold text-black w-full px-2 hover:bg-primary_dark hover:text-white block rounded"
          >
            Logout
          </p>
        </li>
      </ul>
    </div>
  ) : (
    <Link href={"/signin"} className="px-4 py-3 hover:bg-hover rounded-lg ">
      <ProfileIcon className="size-5 fill-black" />
    </Link>
  );
};

export default ProfileSection;
