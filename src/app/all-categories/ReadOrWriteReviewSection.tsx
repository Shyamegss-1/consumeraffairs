import DomainForm from "@/pages/Home/DomainForm";
import Image from "next/image";
import React from "react";

type Props = {};

const ReadOrWriteReviewSection = (props: Props) => {
  return (
    <div className="search-section">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-4">
            <h1>
              Read or write a review <br />
              <span className="me-2 inline-flex">
                <Image
                  sizes="100vw"
                  width={50}
                  height={30}
                  alt=""
                  src="/star.png"
                />
              </span>{" "}
              For a company.{" "}
              <span className="ms-2 inline-flex">
                <Image
                  sizes="100vw"
                  width={50}
                  height={30}
                  alt=""
                  src="/star.png"
                />
              </span>
            </h1>
            <div className="mt-4 mb-8 relative w-full min-h-[80vh]">
              <DomainForm />
            </div>
            {/* <form
              name="searchForm "
              className="my-4 mt-10 w-full"
              id="searchForm"
            >
              <div className="search ">
                <div className="input-container">
                  <input
                    type="text"
                    name="search"
                    className="search-input "
                    placeholder="Kindly enter your domain name Eg: abc.xyz"
                    autoComplete="off"
                  />
                </div>
                <div className="results" />
                <div className="no-results">
                  Kindly enter the domain name of the website you want to post a
                  review about
                </div>
              </div>
            </form> */}
            <div className="data2" id="data_12">
              <ul id="" className="result2"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadOrWriteReviewSection;
