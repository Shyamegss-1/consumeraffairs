import Image from "next/image";
import Link from "next/link";
import React from "react";
import InfiniteCarousel from "../../components/InfiniteCarousel/InfiniteCarousel";

const Banner = () => {
  return (
    <div className="relative max-w-7xl mx-auto my-20 ">
      <div className="w-full grid grid-cols-2  relative">
        <div className="col-span-1 bg-hover flex justify-center items-center  rounded-l-3xl">
          <div className="">
            <h6 className="text-sm font-semibold text-gray-900 font-graphik uppercase tracking-widest mb-5">
              2024 Awards
            </h6>
            <h2 className="exprt-insght__ttl ca-h--marg-top-0 ca-h--base-fnt-fmly ca-h--shine font-bold mb-2">
              {"Buyer's Choice Awards"}
            </h2>
            <p className="text-base font-normal mb-12">
              See the best of the best in 9 categories
            </p>
            <Link
              href="/awards/"
              className=" bg-[#060D17] text-white px-6 py-4 rounded-lg font-bold"
              data-uapi-link="bca-see-the-winners-banner"
            >
              See the winners
            </Link>
          </div>
        </div>
        <div className="col-span-1 bg-primary_dark rounded-r-3xl py-10">
          <div className="mx-auto flex justify-center items-center">
            <Image
              alt="banner"
              height={350}
              width={350}
              src={"/banner-image.jpg"}
              priority
            />
          </div>
        </div>
      </div>
      
{/* 
      <InfiniteCarousel>
        freedom isn't just about the absence of restrictions; 
        it's also about the presence of conditions that allow everyone to thrive. 
        This includes access to healthcare, education, housing, and economic opportunities. 
        A society that values social welfare ensures that freedom is not limited to those with wealth or power but is extended to all, 
        recognizing that true freedom can only be achieved when everyone has the means to participate fully in society.
      </InfiniteCarousel> */}
    </div>
  );
};

export default Banner;
