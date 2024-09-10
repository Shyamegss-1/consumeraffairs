import Image from "next/image";
import React from "react";
import { prisma } from "../../../../prisma/prisma";

type Props = {};

const CategoryWiseCompanyList = async ({
  params,
}: {
  params: { slug: string };
}) => {


  const categoryWiseCompany = await prisma.listing.findMany({
    where: {
      category: {
        category_slug: params.slug,
      },
    },
  });

  console.log(categoryWiseCompany);

  return (
    <div className="col-span-8 my-3">
      {categoryWiseCompany?.map((company) => (
        <div key={company.id} className="software-list-box mt-3 ">
          <div className="software-list-header">
            <div className="flex justify-center items-start gap-4">
              <div className="software-logo">
                <a href="/listing/boeing">
                  <Image
                    height={100}
                    width={100}
                    src={
                      company.logo
                        ? `/${company.logo}`
                        : "No_Image_Available.jpg"
                    }
                    // blurDataURL="/No_Image_Available.jpg"
                    // onError={(e) => over('/No_Image_Available.jpg')}
                    // overrideSrc="/No_Image_Available.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="software-short-desc">
                <a href="/listing/boeing" className="">
                  <h4 className="lg:text-xl font-bold">{company.name} </h4>
                </a>
                <div className="ratings flex items-center justify-start gap-2 mt-2">
                  {/* <Image
                          src={"/star.png"}
                          width={20}
                          height={20}
                          alt=""
                        />
                        <Image
                          src={"/star.png"}
                          width={20}
                          height={20}
                          alt=""
                        />
                        <Image
                          src={"/star.png"}
                          width={20}
                          height={20}
                          alt=""
                        />
                        <Image
                          src={"/star.png"}
                          width={20}
                          height={20}
                          alt=""
                        />
                        <Image
                          src={"/star.png"}
                          width={20}
                          height={20}
                          alt=""
                        /> */}

                  <i className="fa fa-star text-yellow-600" />
                  <i className="fa fa-star text-yellow-600" />
                  <i className="fa fa-star text-yellow-600" />
                  <i className="fa fa-star text-yellow-600" />
                  <i className="fa fa-star text-yellow-600" />
                </div>
                <small className="fw-normal text-secondary mt-1" />
              </div>
            </div>
          </div>
          <div className="software-list-body">
            <h4>Product Description:</h4>
            <p>
              {`Boeing is an aerospace company that works globally. This American
              multinational corporation manufactures, designs, and sells
              rockets, satellites, airplanes, and missiles worldwide. William
              Boeing incorporated this company on July 15, 1916. In its mission
              statement, the company states to connect, inspire, and explore the
              world with the help of aerospace innovation. In all aspects of its
              business, the company takes safety as a top priority. This company
              is consistently re-examining its capabilities and processes to
              ensure its strength. Its core values include several terms, i.e.,
              corporate citizenship, trust and respect, quality and integrity,
              diversity and inclusion. In short, the company's purpose and
              values define the design to inspire and focus all employees. `}
            </p>
          </div>
          <div
            className="claim-website text-end mt-4"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <a href="/listing/boeing">
              <button className=" theme-btn1 unfill">
                View Company reviews
              </button>
            </a>
            <a href=" /business/register.php?claim=boeing.com">
              <button className="theme-btn1 ">Claim website/listing</button>
            </a>
          </div>
        </div>
      ))}

      {/* <ul className="pagination justify-center mt-5">
        <li className="page-item active">
          <a className="page-link" href="/category/aerospace-and-defense/1">
            {" "}
            1
          </a>
        </li>
        <li className="page-item ">
          <a className="page-link" href="/category/aerospace-and-defense/2">
            {" "}
            2
          </a>
        </li>
        <a className="page-link" href="/category/aerospace-and-defense/2">
          Next
        </a>
      </ul> */}
    </div>
  );
};

export default CategoryWiseCompanyList;
