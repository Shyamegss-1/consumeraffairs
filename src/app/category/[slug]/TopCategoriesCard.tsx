import Image from "next/image";
import React from "react";

type Props = {};

const TopCategoriesCard = (props: Props) => {
  return (
    <div className="col-span-4 my-3">
      <div className="business-review-right-side">
        <div className="business-social-links my-4">
          <div className="w-100 text-start">
            <h4 className="text-start">Social Links</h4>
            <div className="underline w-100 mt-3" />
          </div>
          <div className="social-media-icons mt-3">
            <a href="">
              <Image height={40} width={40} src="/bi_facebook.png" alt="" />
            </a>
            <a href="">
              <Image height={40} width={40} src="/bi_instagram.png" alt="" />
            </a>
            <a href="">
              <Image height={40} width={40} src="/bi_twitter.png" alt="" />
            </a>
            <a href="">
              <Image height={40} width={40} src="/bi_linkedin.png" alt="" />
            </a>
          </div>
        </div>
        <div className="business-top-categories mt-4">
          <div className="text-start w-full">
            <h4 className="text-start text-heading-4 font-heading-4">
              Top Categories
            </h4>
            <div className="underline w-full h-0.5 bg-blue-600 mt-3 " />
          </div>
          <div className="top-categories-list">
            <ul>
              <li>
                <a href=" document-solutions">Document Solutions</a>
              </li>{" "}
              <li>
                <a href=" education-management">Education Management</a>
              </li>{" "}
              <li>
                <a href=" electrical-power">Electrical Power</a>
              </li>{" "}
              <li>
                <a href=" transportation">Transportation</a>
              </li>{" "}
              <li>
                <a href=" webops-platform">WebOps Platform</a>
              </li>{" "}
              <li>
                <a href=" workflow-solutions">Workflow Solutions</a>
              </li>{" "}
              <li>
                <a href=" workforce-management">Workforce Management</a>
              </li>{" "}
              <li>
                <a href=" accounting">Accounting</a>
              </li>{" "}
              <li>
                <a href="/other_categories">Others</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategoriesCard;