"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import './Module.css'

const ProductInfo = () => {
  const data = [
    {
      label: "Automotive",
      url: "/automotive/automotive.htm",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_14964.png",
    },
    {
      label: "Business Services",
      url: "/business-services/",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_15077.png",
    },
    {
      label: "Education",
      url: "/education/",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_14962.png",
    },
    {
      label: "Elder Care",
      url: "/elder-care-planning/",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_14992.png",
    },
    {
      label: "Electronics & Tech",
      url: "/electronics.html",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Electronics__Tech.png",
    },
    {
      label: "Family & Parenting",
      url: "/family/",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_15076.png",
    },
    {
      label: "Finance",
      url: "/finance/financial_services.htm",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_14989.png",
    },
    {
      label: "Health & Fitness",
      url: "/health/",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_14982.png",
    },
    {
      label: "Homeowners",
      url: "/homeowners/",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_14984.png",
    },
    {
      label: "Insurance",
      url: "/insurance/",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_14968.png",
    },
    {
      label: "Moving",
      url: "/moving-checklist/",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_14972_mtcNeg8.png",
    },
    {
      label: "Pets",
      url: "/pets/",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/Group_14973.png",
    },
    {
      label: "Travel",
      url: "/travel/travel.htm",
      imgSrc:
        "https://media.consumeraffairs.com/files/homepage-items-images/CA_sketches_3.png",
    },
    {
      label: "View All",
      url: "https://www.consumeraffairs.com/resources/",
      imgSrc:
        "https://media.consumeraffairs.com/static/img/home/topics/view-all.5b340f8ab4f4.webp",
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".tpcs__li");

    elements.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        if (index !== 0) {
          const ele = document.getElementsByClassName("tpcs__li");
          const _ele = ele[0].children[1] as HTMLElement;
          _ele.style.display = "none";
          const _ele2 = ele[0].children[0] as HTMLElement;
          _ele2.style.color = "#000000";
          (_ele2.children[0] as HTMLElement).style.opacity = "0";
        } else {
          const ele = document.getElementsByClassName("tpcs__li");
          const _ele = ele[0].children[1] as HTMLElement;
          _ele.style.display = "block";
          const _ele2 = ele[0].children[0] as HTMLElement;
          _ele2.style.color = "#1758a6";
          (_ele2.children[0] as HTMLElement).style.opacity = "1";
        }
      });

      item.addEventListener("mouseleave", () => {
        const ele = document.getElementsByClassName("tpcs__li");
        const _ele = ele[0].children[1] as HTMLElement;
        _ele.style.display = "block";
        const _ele2 = ele[0].children[0] as HTMLElement;
        _ele2.style.color = "#1758a6";
        (_ele2.children[0] as HTMLElement).style.opacity = "1";
      });
    });

    return () => {
      elements.forEach((item) => {
        item.removeEventListener("mouseleave", () => {});
      });
    };
  });
  return (
    <div className="relative max-w-7xl mx-auto mt-20 ">
      <div className="flex flex-col items-start justify-center">
        <h6 className="text-heading-6 font-semibold text-gray-900 font-graphik uppercase">
          Buying Decisions Made Easy
        </h6>
        <h2 className="text-heading-1 font-semibold text-gray-900 font-publico max-w-[610px] mt-4 mb-8">
          Comprehensive product information and research
        </h2>
      </div>
      <div className="grid grid-cols-2">
        <ul className="grid grid-cols-2 list-none m-0 p-0">
          {data.map((item, i) => (
            <li key={i} className="tpcs__li li_fst">
              <a
                className="tpcs__lst-itm "
                href={item.url}
                style={i === data.length - 1 ? { color: "#1758a6" } : {}}
                data-uapi-link="homepage_topics_click"
                data-uapi-link-payload={`{"context": {"label": "${item.label}", "url": "${item.url}"}}`}
              >
                {item.label}
                <span className="tpcs__arw" />
              </a>
              <Image
                width={600}
                height={600}
                priority
                className="tpcs__img  lazy-load fadein loaded "
                data-src={item.imgSrc}
                alt=""
                src={item.imgSrc}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
