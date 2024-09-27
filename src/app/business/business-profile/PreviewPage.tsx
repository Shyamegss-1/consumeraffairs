import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  logo: string;
  banner: string;
  listing: any;
  userDetails: any;
  user: any;
};

const PreviewPage = ({ logo, banner, listing, userDetails, user }: Props) => {
  return (
    <div className="main-business-profile-section custom-scroll">
      <div className="banner-profile-box">
        <Image
          src={banner || '/banner.png'}
          className="img-fluid banner-img w-full h-[300px] bannerimg "
          width={1920}
          height={1080}
          alt=""
          priority
        />
        <div className="banner-profile-content">
          <div className="banner-profile-logo">
            <Image src={logo || "/logo.png"} alt="" width={40} height={40} priority />
          </div>
          <div className="banner-profile-info ml-4">
            <h1 className="text-white text-4xl tracking-wide font-semibold">
              {userDetails.companyName}
            </h1>
            <div className="banner-ratings">
              <span className="banner-rating-icons flex">
                <i className="fa fa-star me-1" />
                <i className="fa fa-star me-1" />
                <i className="fa fa-star me-1" />
                <i className="fa fa-star me-1" />
                <i className="fa fa-star me-1" />
              </span>
              <span className="ms-2">0.0 ( 0 Reviews )</span>
            </div>
          </div>
        </div>
      </div>
      <div className="business-profile-btns mt-6 mx-4 gap-3">
        <Link className="mr-2" href="#review-new-form-box">
          <button className="fill mb-2">
            <i className="fa fa-edit " />
            {/* <iconify-icon icon="bxs:edit" className="text-white" />  */}
            Write a review
          </button>
        </Link>
        <Link className="mr-2" href="#business-profile-review-section">
          <button className=" mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 4v13.17L18.83 16H4V4zm0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m-2 10H6v2h12zm0-3H6v2h12zm0-3H6v2h12z"
              ></path>
            </svg>
            {/* <i class="fas fa-readme    "></i> */}
            {/* <iconify-icon icon="ic:outline-insert-comment" /> */}
            Read Reviews
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-10 mx-6">
        <div className="col-span-8">
          <h1 className="text-3xl w-fit font-semibold border-b-2 border-active_dark pb-6">
            About Business
          </h1>
          <p className="text-lg font-normal py-4">{listing.about}</p>
          <div className="mt-4 flex justify-start items-center flex-wrap gap-4">
            <div className="flex justify-start items-center bg-gray-100 p-4 rounded-2xl">
              <h3 className="inline-flex justify-start items-center gap-2 text-lg font-medium ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                    />
                  </svg>
                </span>
                <span>Email : </span>
                <span>{user.email}</span>
              </h3>
            </div>
            <div className="flex justify-start items-center bg-gray-100 p-4 rounded-2xl">
              <h3 className="inline-flex justify-start items-center gap-2 text-lg font-medium ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                    />
                  </svg>
                </span>
                <span>Phone : </span>
                <span>{userDetails.phone}</span>
              </h3>
            </div>
            <div className="flex justify-start items-center bg-gray-100 p-4 rounded-2xl">
              <h3 className="inline-flex justify-start items-center gap-2 text-lg font-medium ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M11.291 21.706L12 21zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007l-.017-.017l-.062-.063a48 48 0 0 1-1.04-1.106a50 50 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8s8 3.461 8 8c0 1.248-.535 2.612-1.213 3.87c-.693 1.286-1.604 2.585-2.497 3.735a50 50 0 0 1-3.496 4.014l-.062.063l-.017.017l-.006.006zm0-8a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>Address : </span>
                <span>{userDetails.address}</span>
              </h3>
            </div>
          </div>
          <div className="mt-8">
            <Image
              src={"/ad1.png"}
              alt="banner add"
              width={1920}
              height={1080}
              className="rounded-2xl w-full h-[320px] object-cover object-center shadow-md"
            />
          </div>
          <h1 className="text-3xl w-fit font-semibold border-b-2 border-active_dark pb-6 mt-8">
            Media
          </h1>
        </div>
        <div className="col-span-4 ">
          <div className="flex flex-col justify-start items-center gap-4 business-review-right-side">
            <div className="business-social-links my-4">
              <div className="w-full text-start">
                <h4 className="text-start text-3xl pb-4 border-b-2 border-active_dark">
                  Social Links
                </h4>
              </div>
              <div className="social-media-icons mt-3">
                <a href="">
                  <Image height={40} width={40} src="/bi_facebook.png" alt="" />
                </a>
                <a href="">
                  <Image
                    height={40}
                    width={40}
                    src="/bi_instagram.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <Image height={40} width={40} src="/bi_twitter.png" alt="" />
                </a>
                <a href="">
                  <Image height={40} width={40} src="/bi_linkedin.png" alt="" />
                </a>
              </div>
            </div>
            <Link href={""}>
              <Image
                src={"/ad1.png"}
                alt="ad1"
                className="rounded-2xl shadow-md"
                height={1080}
                width={1080}
                priority
              />
            </Link>
            <Link href={""}>
              <Image
                src={"/ad1.png"}
                alt="ad1"
                className="rounded-2xl shadow-md"
                height={1080}
                width={1080}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
