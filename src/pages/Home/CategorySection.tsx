import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategorySection = () => {
  const categories = [
    {
      href: "https://www.consumeraffairs.com/finance/mortgage/",
      label: "Mortgages",
      description: "Navigate homebuying options",
    },
    {
      href: "https://www.consumeraffairs.com/elder-care-planning/aging-in-place/",
      label: "Aging in Place",
      description: "How to stay independent",
    },
    {
      href: "https://www.consumeraffairs.com/moving/prep/",
      label: "Moving",
      description: "Compare movers, learn relocation basics",
    },
    {
      href: "https://www.consumeraffairs.com/homeowners/solar-energy/",
      label: "Solar",
      description: "Learn how to go solar",
    },
    {
      href: "https://www.consumeraffairs.com/homeowners/home-warranties/",
      label: "Home Warranties",
      description: "Home repairs simplified",
    },
    {
      href: "https://www.consumeraffairs.com/automotive/extended-car-warranties/",
      label: "Car Warranties",
      description: "Protect yourself from the unexpected",
    },
    {
      href: "https://www.consumeraffairs.com/finance/debt/",
      label: "Debt management",
      description: "Get out of debt on your terms",
    },
    {
      href: "https://www.consumeraffairs.com/finance/investing/",
      label: "Investing",
      description: "Explore options for long-term returns",
    },
    {
      href: "https://www.consumeraffairs.com/finance/loans/",
      label: "Loans",
      description: "How to borrow wisely",
    },
    {
      href: "https://www.consumeraffairs.com/homeowners/home-security/",
      label: "Home Security",
      description: "Compare security systems",
    },
  ];
  return (
    <div className="relative max-w-7xl mx-auto mt-20 ">
      <div className="flex flex-col items-start justify-center">
        <h6 className="text-sm font-semibold text-gray-900 font-graphik uppercase tracking-widest mb-5">
          A range of resources
        </h6>
        <h2 className="text-heading-1 font-semibold text-gray-900 font-publico max-w-[610px] mt-4 mb-8">
          Explore our diverse categories
        </h2>
      </div>
      <div className="grid grid-cols-2">
        <div className=" flex justify-start items-center">
          <video width={480} autoPlay loop muted playsInline>
            <source src="category_section_video.mp4" type="video/mp4" />
            {/* <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            /> */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="ring-1 ring-gray-200 rounded-3xl hover:shadow-lg flex justify-start items-center p-6"
              data-uapi-link="homepage_explore_click_cta"
              data-uapi-link-payload={`{"context": {"label": "${category.label}"}}`}
            >
              <div className="flex flex-col justify-center items-start">
                <small className="font-semibold text-sm text-gray-400">
                  {category.label}
                </small>
                <span className="font-semibold">{category.description}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center w-full my-10">
        <ul className="w-full grid grid-cols-2 gap-10">
          <li className="tpcs__li p-6 ring-1 " style={{ display: "none" }}></li>
          <li className="tpcs__li px-6 py-4 ring-1 ring-gray-200 rounded-3xl group hover:shadow-lg">
            <Link
              className="tpcs__lst-itm after:h-0"
              href={"/about"}
              style={{ height: "auto", padding: "4px 0" }}
              data-uapi-link="homepage_topics_click"
              data-uapi-link-payload={`{"context": {"label": "Learn who we are", "url": "/about"}}`}
            >
              Learn who we are
              <span className="tpcs__arw" />
            </Link>
            <p className="group-hover:text-black font-light">
              We help you make informed decisions through news and other
              resources.
            </p>
          </li>
          <li className="tpcs__li px-6 py-4 ring-1 ring-gray-200 rounded-3xl group hover:shadow-lg">
            <Link
              className="tpcs__lst-itm after:h-0 "
              href={"/about"}
              style={{ height: "auto", padding: "4px 0" }}
              data-uapi-link="homepage_topics_click"
              data-uapi-link-payload={`{"context": {"label": "Learn who we are", "url": "/about"}}`}
            >
              Meet our advisory board
              <span className="tpcs__arw" />
            </Link>
            <p className="group-hover:text-black font-light">
              Our panel of experts provides guidance and recommendations.
            </p>
            <div className="ca-authr-rvw mt-5">
              <div className="ca-authr ca-authr-rvw__grp-imgs">
                <Image
                  className="lazy-load fadein ca-authr-rvw__grp-img loaded"
                  data-src="https://media.consumeraffairs.com/files/cache/staff-photos/liz_of_headshot_ad_head_shot_micro.png"
                  alt="Advisory board profile picture"
                  height={32}
                  width={32}
                  src="https://media.consumeraffairs.com/files/cache/staff-photos/liz_of_headshot_ad_head_shot_micro.png"
                />
                <Image
                  className="lazy-load fadein ca-authr-rvw__grp-img loaded"
                  data-src="https://media.consumeraffairs.com/files/cache/staff-photos/mandi-of-headshot-ad_head_shot_micro.png"
                  alt="Advisory board profile picture"
                  height={32}
                  width={32}
                  src="https://media.consumeraffairs.com/files/cache/staff-photos/mandi-of-headshot-ad_head_shot_micro.png"
                />
                <Image
                  className="lazy-load fadein ca-authr-rvw__grp-img loaded"
                  data-src="https://media.consumeraffairs.com/files/cache/staff-photos/ty-of-headshot-ad_head_shot_micro.png"
                  alt="Advisory board profile picture"
                  height={32}
                  width={32}
                  src="https://media.consumeraffairs.com/files/cache/staff-photos/ty-of-headshot-ad_head_shot_micro.png"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategorySection;
