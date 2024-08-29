import Link from "next/link";
import React from "react";

type Props = {};

const MainDashboardLayout = (props: Props) => {
  return (
    <div className="min-w-screen-2xl mx-auto px-10 py-5">
      <div className="w-full grid grid-cols-3 gap-5">
        <div className="col-span-3 md:col-span-1 ">
          <div className="bg-white rounded-lg shadow-md border">
            <div className="grid grid-cols-12">
              <div className="col-span-12 p-5">
                <div className="grid grid-cols-12">
                  <div className="col-span-4 flex justify-center items-center bg-hover rounded-md size-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g id="material-symbols:verified-rounded">
                        <path
                          id="Vector"
                          d="M14.6009 16.9334L12.6676 15.0334C12.4231 14.7889 12.1178 14.6667 11.7516 14.6667C11.3854 14.6667 11.0685 14.8001 10.8009 15.0667C10.5565 15.3112 10.4342 15.6223 10.4342 16.0001C10.4342 16.3778 10.5565 16.6889 10.8009 16.9334L13.6676 19.8001C13.9342 20.0667 14.2454 20.2001 14.6009 20.2001C14.9565 20.2001 15.2676 20.0667 15.5342 19.8001L21.2009 14.1334C21.4676 13.8667 21.5951 13.5556 21.5836 13.2001C21.572 12.8445 21.4445 12.5334 21.2009 12.2667C20.9342 12.0001 20.6178 11.8614 20.2516 11.8507C19.8854 11.8401 19.5685 11.9676 19.3009 12.2334L14.6009 16.9334ZM10.8676 29.0001L8.93425 25.7334L5.26758 24.9334C4.93424 24.8667 4.66758 24.6947 4.46758 24.4174C4.26758 24.1401 4.1898 23.8343 4.23424 23.5001L4.60091 19.7334L2.10091 16.8667C1.87869 16.6223 1.76758 16.3334 1.76758 16.0001C1.76758 15.6667 1.87869 15.3778 2.10091 15.1334L4.60091 12.2667L4.23424 8.50005C4.1898 8.16672 4.26758 7.86094 4.46758 7.58272C4.66758 7.3045 4.93424 7.1325 5.26758 7.06672L8.93425 6.26672L10.8676 3.00005C11.0454 2.71116 11.2898 2.5165 11.6009 2.41605C11.912 2.31561 12.2231 2.3325 12.5342 2.46672L16.0009 3.93339L19.4676 2.46672C19.7787 2.33339 20.0898 2.3165 20.4009 2.41605C20.712 2.51561 20.9565 2.71027 21.1342 3.00005L23.0676 6.26672L26.7342 7.06672C27.0676 7.13339 27.3342 7.30583 27.5342 7.58405C27.7342 7.86227 27.812 8.16761 27.7676 8.50005L27.4009 12.2667L29.9009 15.1334C30.1231 15.3778 30.2342 15.6667 30.2342 16.0001C30.2342 16.3334 30.1231 16.6223 29.9009 16.8667L27.4009 19.7334L27.7676 23.5001C27.812 23.8334 27.7342 24.1392 27.5342 24.4174C27.3342 24.6956 27.0676 24.8676 26.7342 24.9334L23.0676 25.7334L21.1342 29.0001C20.9565 29.2889 20.712 29.4836 20.4009 29.5841C20.0898 29.6845 19.7787 29.6676 19.4676 29.5334L16.0009 28.0667L12.5342 29.5334C12.2231 29.6667 11.912 29.6836 11.6009 29.5841C11.2898 29.4845 11.0454 29.2898 10.8676 29.0001Z"
                          fill="#1972F5"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="col-span-8 ">
                    <h1 className="text-2xl font-semibold text-active_dark">
                      Acevedo Mason Trading
                    </h1>
                    <h4 className="text-xl font-semibold flex justify-start items-center mt-4">
                      <span className="flex justify-start items-center">
                        <span className="text-gray-500 font-bold text-base">
                          Status :
                        </span>
                        <span className="text-gray-400 font-normal text-base ml-2">
                          Claimed
                        </span>
                        <span className="ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <g id="material-symbols:verified-rounded">
                              <path
                                id="Vector"
                                d="M14.6009 16.9334L12.6676 15.0334C12.4231 14.7889 12.1178 14.6667 11.7516 14.6667C11.3854 14.6667 11.0685 14.8001 10.8009 15.0667C10.5565 15.3112 10.4342 15.6223 10.4342 16.0001C10.4342 16.3778 10.5565 16.6889 10.8009 16.9334L13.6676 19.8001C13.9342 20.0667 14.2454 20.2001 14.6009 20.2001C14.9565 20.2001 15.2676 20.0667 15.5342 19.8001L21.2009 14.1334C21.4676 13.8667 21.5951 13.5556 21.5836 13.2001C21.572 12.8445 21.4445 12.5334 21.2009 12.2667C20.9342 12.0001 20.6178 11.8614 20.2516 11.8507C19.8854 11.8401 19.5685 11.9676 19.3009 12.2334L14.6009 16.9334ZM10.8676 29.0001L8.93425 25.7334L5.26758 24.9334C4.93424 24.8667 4.66758 24.6947 4.46758 24.4174C4.26758 24.1401 4.1898 23.8343 4.23424 23.5001L4.60091 19.7334L2.10091 16.8667C1.87869 16.6223 1.76758 16.3334 1.76758 16.0001C1.76758 15.6667 1.87869 15.3778 2.10091 15.1334L4.60091 12.2667L4.23424 8.50005C4.1898 8.16672 4.26758 7.86094 4.46758 7.58272C4.66758 7.3045 4.93424 7.1325 5.26758 7.06672L8.93425 6.26672L10.8676 3.00005C11.0454 2.71116 11.2898 2.5165 11.6009 2.41605C11.912 2.31561 12.2231 2.3325 12.5342 2.46672L16.0009 3.93339L19.4676 2.46672C19.7787 2.33339 20.0898 2.3165 20.4009 2.41605C20.712 2.51561 20.9565 2.71027 21.1342 3.00005L23.0676 6.26672L26.7342 7.06672C27.0676 7.13339 27.3342 7.30583 27.5342 7.58405C27.7342 7.86227 27.812 8.16761 27.7676 8.50005L27.4009 12.2667L29.9009 15.1334C30.1231 15.3778 30.2342 15.6667 30.2342 16.0001C30.2342 16.3334 30.1231 16.6223 29.9009 16.8667L27.4009 19.7334L27.7676 23.5001C27.812 23.8334 27.7342 24.1392 27.5342 24.4174C27.3342 24.6956 27.0676 24.8676 26.7342 24.9334L23.0676 25.7334L21.1342 29.0001C20.9565 29.2889 20.712 29.4836 20.4009 29.5841C20.0898 29.6845 19.7787 29.6676 19.4676 29.5334L16.0009 28.0667L12.5342 29.5334C12.2231 29.6667 11.912 29.6836 11.6009 29.5841C11.2898 29.4845 11.0454 29.2898 10.8676 29.0001Z"
                                fill="current"
                                className="fill-active_dark"
                              />
                            </g>
                          </svg>
                        </span>
                      </span>
                      <hr className="w-0.5 mx-2 rounded-3xl h-4 bg-gray-400" />
                      <span className="flex justify-start items-center">
                        <span className="text-gray-500 font-bold text-base">
                          Reviews :
                        </span>
                        <span className="text-gray-400 font-normal text-base ml-2">
                          0
                        </span>
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-span-12 p-5">
                <h2 className="text-lg flex justify-start items-center gasize-2 p-1 mt-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        className="fill-active_dark"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539a7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539a7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-active_dark">Domain :</span>
                  <span className="">www.apifan.com</span>
                </h2>
                <h2 className="text-lg flex justify-start items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      className="fill-active_dark"
                      d="M20 6c.58 0 1.05.2 1.42.59c.38.41.58.86.58 1.41v11c0 .55-.2 1-.58 1.41c-.37.39-.84.59-1.42.59H4c-.58 0-1.05-.2-1.42-.59C2.2 20 2 19.55 2 19V8c0-.55.2-1 .58-1.41C2.95 6.2 3.42 6 4 6h4V4c0-.58.2-1.05.58-1.42C8.95 2.2 9.42 2 10 2h4c.58 0 1.05.2 1.42.58c.38.37.58.84.58 1.42v2zM4 8v11h16V8zm10-2V4h-4v2z"
                    />
                  </svg>

                  <span className="font-bold text-active_dark">Job/Role :</span>
                  <span className="">Optio aut nisi adip</span>
                </h2>
                <h2 className="text-lg flex justify-start items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      className="fill-active_dark"
                      d="M19.44 13c-.22 0-.45-.07-.67-.12a9.4 9.4 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.2 12.2 0 0 1-2.66-2a12.2 12.2 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10 10 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9m.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.1 1.1 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11 11 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.5 14.5 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a14 14 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z"
                    />
                  </svg>

                  <span className="font-bold text-active_dark">Phone :</span>
                  <span className="">+1 888-647-3712</span>
                </h2>
                <h2 className="text-lg flex justify-start items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      className="fill-active_dark"
                      d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8m0 17.65c-2.13-2-6-6.31-6-9.65a6 6 0 0 1 12 0c0 3.34-3.87 7.66-6 9.65M12 6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                    />
                  </svg>

                  <span className="font-bold text-active_dark">Address :</span>
                  <span className="">New Delhi</span>
                </h2>
                <h2 className="text-lg flex justify-start items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      className="fill-active_dark"
                      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                    />
                  </svg>
                  <span className="font-bold text-active_dark">
                    Customer Support Email :
                  </span>
                  <span className="">wadod68192@apifan.com</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-5 col-span-12 p-5">
                <Link
                  className="bg-primary_dark font-semibold w-full text-center py-2 rounded-lg text-white"
                  href="/business/business-profile"
                >
                  Read More
                </Link>
                <Link
                  className="ring-2 ring-primary_dark font-semibold w-full text-center py-2 rounded-lg text-primary_dark"
                  href="/business/my-listing"
                >
                  View All Business Listings
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-3 md:col-span-1 ">
          <div className="h-full grid grid-rows-12 gap-5">
            <div className="bg-white  row-span-6 rounded-lg shadow-md border p-4">
              <div className="grid grid-cols-12 h-full">
                <div className="col-span-6">
                  <div className="review-info pt-4">
                    <h5 className="text-xl font-bold text-active_dark">
                      Reviews Analytics
                    </h5>
                    <p className="m-0 mt-4 mb-1 font-medium text-gray-500">
                      Reviews Last Month :{" "}
                      <span className="font-bold text-gray-400">0</span>
                    </p>
                    <p className="m-0 font-medium text-gray-500">
                      Reviews This Month : <span className="fw-bold">0</span>
                    </p>
                    <p className="mt-4 text-gray-400">
                      <span className="text-purple font-bold text-gray-500">
                        Increased
                      </span>{" "}
                      since last month by{" "}
                      <span className="text-purple font-bold text-gray-500">
                        0%
                      </span>
                      .
                    </p>
                  </div>
                </div>
                <div className="col-span-6 ">
                  <div className="bg-hover w-full h-full flex justify-center items-center rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g id="material-symbols:verified-rounded">
                        <path
                          id="Vector"
                          d="M14.6009 16.9334L12.6676 15.0334C12.4231 14.7889 12.1178 14.6667 11.7516 14.6667C11.3854 14.6667 11.0685 14.8001 10.8009 15.0667C10.5565 15.3112 10.4342 15.6223 10.4342 16.0001C10.4342 16.3778 10.5565 16.6889 10.8009 16.9334L13.6676 19.8001C13.9342 20.0667 14.2454 20.2001 14.6009 20.2001C14.9565 20.2001 15.2676 20.0667 15.5342 19.8001L21.2009 14.1334C21.4676 13.8667 21.5951 13.5556 21.5836 13.2001C21.572 12.8445 21.4445 12.5334 21.2009 12.2667C20.9342 12.0001 20.6178 11.8614 20.2516 11.8507C19.8854 11.8401 19.5685 11.9676 19.3009 12.2334L14.6009 16.9334ZM10.8676 29.0001L8.93425 25.7334L5.26758 24.9334C4.93424 24.8667 4.66758 24.6947 4.46758 24.4174C4.26758 24.1401 4.1898 23.8343 4.23424 23.5001L4.60091 19.7334L2.10091 16.8667C1.87869 16.6223 1.76758 16.3334 1.76758 16.0001C1.76758 15.6667 1.87869 15.3778 2.10091 15.1334L4.60091 12.2667L4.23424 8.50005C4.1898 8.16672 4.26758 7.86094 4.46758 7.58272C4.66758 7.3045 4.93424 7.1325 5.26758 7.06672L8.93425 6.26672L10.8676 3.00005C11.0454 2.71116 11.2898 2.5165 11.6009 2.41605C11.912 2.31561 12.2231 2.3325 12.5342 2.46672L16.0009 3.93339L19.4676 2.46672C19.7787 2.33339 20.0898 2.3165 20.4009 2.41605C20.712 2.51561 20.9565 2.71027 21.1342 3.00005L23.0676 6.26672L26.7342 7.06672C27.0676 7.13339 27.3342 7.30583 27.5342 7.58405C27.7342 7.86227 27.812 8.16761 27.7676 8.50005L27.4009 12.2667L29.9009 15.1334C30.1231 15.3778 30.2342 15.6667 30.2342 16.0001C30.2342 16.3334 30.1231 16.6223 29.9009 16.8667L27.4009 19.7334L27.7676 23.5001C27.812 23.8334 27.7342 24.1392 27.5342 24.4174C27.3342 24.6956 27.0676 24.8676 26.7342 24.9334L23.0676 25.7334L21.1342 29.0001C20.9565 29.2889 20.712 29.4836 20.4009 29.5841C20.0898 29.6845 19.7787 29.6676 19.4676 29.5334L16.0009 28.0667L12.5342 29.5334C12.2231 29.6667 11.912 29.6836 11.6009 29.5841C11.2898 29.4845 11.0454 29.2898 10.8676 29.0001Z"
                          fill="#1972F5"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white  row-span-6 rounded-lg shadow-md border p-4">
              <div className="grid grid-cols-12 h-full">
                <div className="col-span-6">
                  <div className="review-info pt-4">
                    <h5 className="text-xl font-bold text-active_dark">
                      All Reviews
                    </h5>
                    <p className="m-0 mt-4 mb-1 font-medium text-gray-500 my-2">
                      <span className="bg-[#86E2D7] size-0.5 px-2.5 m-2 rounded-sm"></span>
                      Live Reviews
                    </p>
                    <p className="m-0 font-medium text-gray-500 my-2">
                      <span className="bg-[#5247A5] size-0.5 px-2.5 m-2 rounded-sm"></span>Under Moderation
                    </p>
                    <p className="m-0 font-medium text-gray-500 my-2">
                      <span className="bg-[#141414] size-0.5 px-2.5 m-2 rounded-sm"></span>Reported Reviews
                    </p>
                    <p className="m-0 font-medium text-gray-500 my-2">
                      <span className="bg-[#8478DF] size-0.5 px-2.5 m-2 rounded-sm"></span>Removed Reviews
                    </p>
                  </div>
                </div>
                <div className="col-span-6 ">
                  <div className="bg-hover w-full h-full flex justify-center items-center rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g id="material-symbols:verified-rounded">
                        <path
                          id="Vector"
                          d="M14.6009 16.9334L12.6676 15.0334C12.4231 14.7889 12.1178 14.6667 11.7516 14.6667C11.3854 14.6667 11.0685 14.8001 10.8009 15.0667C10.5565 15.3112 10.4342 15.6223 10.4342 16.0001C10.4342 16.3778 10.5565 16.6889 10.8009 16.9334L13.6676 19.8001C13.9342 20.0667 14.2454 20.2001 14.6009 20.2001C14.9565 20.2001 15.2676 20.0667 15.5342 19.8001L21.2009 14.1334C21.4676 13.8667 21.5951 13.5556 21.5836 13.2001C21.572 12.8445 21.4445 12.5334 21.2009 12.2667C20.9342 12.0001 20.6178 11.8614 20.2516 11.8507C19.8854 11.8401 19.5685 11.9676 19.3009 12.2334L14.6009 16.9334ZM10.8676 29.0001L8.93425 25.7334L5.26758 24.9334C4.93424 24.8667 4.66758 24.6947 4.46758 24.4174C4.26758 24.1401 4.1898 23.8343 4.23424 23.5001L4.60091 19.7334L2.10091 16.8667C1.87869 16.6223 1.76758 16.3334 1.76758 16.0001C1.76758 15.6667 1.87869 15.3778 2.10091 15.1334L4.60091 12.2667L4.23424 8.50005C4.1898 8.16672 4.26758 7.86094 4.46758 7.58272C4.66758 7.3045 4.93424 7.1325 5.26758 7.06672L8.93425 6.26672L10.8676 3.00005C11.0454 2.71116 11.2898 2.5165 11.6009 2.41605C11.912 2.31561 12.2231 2.3325 12.5342 2.46672L16.0009 3.93339L19.4676 2.46672C19.7787 2.33339 20.0898 2.3165 20.4009 2.41605C20.712 2.51561 20.9565 2.71027 21.1342 3.00005L23.0676 6.26672L26.7342 7.06672C27.0676 7.13339 27.3342 7.30583 27.5342 7.58405C27.7342 7.86227 27.812 8.16761 27.7676 8.50005L27.4009 12.2667L29.9009 15.1334C30.1231 15.3778 30.2342 15.6667 30.2342 16.0001C30.2342 16.3334 30.1231 16.6223 29.9009 16.8667L27.4009 19.7334L27.7676 23.5001C27.812 23.8334 27.7342 24.1392 27.5342 24.4174C27.3342 24.6956 27.0676 24.8676 26.7342 24.9334L23.0676 25.7334L21.1342 29.0001C20.9565 29.2889 20.712 29.4836 20.4009 29.5841C20.0898 29.6845 19.7787 29.6676 19.4676 29.5334L16.0009 28.0667L12.5342 29.5334C12.2231 29.6667 11.912 29.6836 11.6009 29.5841C11.2898 29.4845 11.0454 29.2898 10.8676 29.0001Z"
                          fill="#1972F5"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 ">
          <div className="h-full grid grid-rows-12 gap-5">
            <div className="bg-white row-span-3 rounded-lg shadow-md border py-4 px-6 flex justify-between items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  className="fill-active_dark"
                  d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"
                />
              </svg>
              <h2 className="text-3xl font-bold flex-grow text-active_dark">
                Total Reviews
              </h2>
              <p className="py-4 px-6 text-3xl font-bold bg-hover text-active_dark rounded-lg">
                0
              </p>
            </div>
            <div className="bg-white  row-span-9 rounded-lg shadow-md border">
              <h3 className="px-6 py-4 text-2xl font-bold text-active_dark">
                Recent Notifications
              </h3>
              <hr className="w-full h-0.5 bg-active_dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboardLayout;
