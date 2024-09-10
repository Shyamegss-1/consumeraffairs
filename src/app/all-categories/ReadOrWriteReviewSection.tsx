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
                  // style={{
                  //   // width: "100%",
                  //   height: "auto",
                  // }}
                  width={50}
                  height={30}
                  // style={{ objectFit: "cover" }}
                  alt=""
                  src="/star.png"
                />
              </span>{" "}
              For a company.{" "}
              <span className="ms-2 inline-flex">
                <Image
                  sizes="100vw"
                  // style={{
                  //   // width: "100%",
                  //   height: "auto",
                  // }}
                  width={50}
                  height={30}
                  // style={{ objectFit: "contain" }}
                  alt=""
                  src="/star.png"
                />
              </span>
            </h1>
            <form
              action="/search"
              method="get"
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
            </form>
            <div className="data2" id="data_12">
              <ul id="" className="result2"></ul>
            </div>
          </div>
          {/*<div class="col-lg-5">*/}
          {/*    <div class="search-right0img">*/}
          {/*        <Image width={60} height={60} alt="" src="https://rating-scale.com/assets/Image/home-banner-main.png" class="Image-fluid w-100" alt="">*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default ReadOrWriteReviewSection;
