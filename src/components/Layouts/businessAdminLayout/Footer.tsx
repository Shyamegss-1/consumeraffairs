import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const pathName = usePathname();
  
  return (
    <div className="fix-navbar">
      <div className="navbar-container">
        <Link href="/business">
          <div className={`nav-item home ${pathName?.split("/")[2]?"":"active"}`}>
            <div className="icon-container ">
              {/* <i className="fa fa-home " /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.625em"
                height="1.625em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M11.03 2.59a1.5 1.5 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"
                />
              </svg>
            </div>
            <div className="label">Home</div>
          </div>
        </Link>
        <Link href="/business/my-business-reviews">
          <div className={`nav-item reviews ${pathName?.split("/")[2]==='my-business-reviews'?"active":""}`}>
            <div className="icon-container">
              {/* <i className="fa fa-home" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.625em"
                height="1.625em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M6 14h3.05l5-5q.225-.225.338-.513t.112-.562t-.125-.537t-.325-.488l-.9-.95q-.225-.225-.5-.337t-.575-.113q-.275 0-.562.113T11 5.95l-5 5zm7-6.075L12.075 7zM7.5 12.5v-.95l2.525-2.525l.5.45l.45.5L8.45 12.5zm3.025-3.025l.45.5l-.95-.95zm.65 4.525H18v-2h-4.825zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z"
                />
              </svg>
              {/*<div class="badge">3</div>*/}
            </div>
            <div className="label">Reviews</div>
          </div>
        </Link>
        <Link href="/business/business-profile">
          <div className={`nav-item business-profile ${pathName?.split("/")[2]==='business-profile'?"active":""}`}>
            <div className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.625em"
                height="1.625em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6.5 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M3 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3H3zm5-3a3 3 0 0 0-3 3v1h14v-1a3 3 0 0 0-3-3z"
                />
              </svg>
            </div>
            <div className="label">Business Profile</div>
          </div>
        </Link>
        <Link href="/business/subscription-history">
          <div className={`nav-item subscription-history ${pathName?.split("/")[2]==='subscription-history'?"active":""}`}>
            <div className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.625em"
                height="1.625em"
                viewBox="0 0 512 512"
              >
                <rect
                  width={416}
                  height={320}
                  x={48}
                  y={96}
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  rx={56}
                  ry={56}
                />
                <path
                  fill="none"
                  stroke="white"
                  strokeLinejoin="round"
                  strokeWidth={60}
                  d="M48 192h416M128 300h48v20h-48z"
                />
              </svg>
            </div>
            <div className="label">Subscription</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
