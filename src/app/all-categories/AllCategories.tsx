"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { categories } from "./PopularCategorySection";
import { getCategories } from "@/server-actions/getPopularCategories";
import Link from "next/link";

const AllCategories = ({ params }: { params: null | { filter: string } }) => {
  const [categories, setCategories] = React.useState<categories[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = useState("");

  // console.log(categories, "hghghfghfg");

  useEffect(() => {
    const fetchCategories = async () => {
      const { allCategories }: any = await getCategories();

      setCategories(() => (allCategories ? allCategories : []));
      setLoading(false);
    };
    fetchCategories();
  }, []);

  return (
    <section className="all-categories-section">
      <div className="categories-main2  mb-5">
        <div className="max-w-7xl mx-auto">
          <div className="title mb-4 text-center">
            <h2 className="text-heading-1 font-heading-1">All Categories</h2>
          </div>
          <nav
            aria-label="Page navigation example "
            className="flex justify-between items-center nav-pagination"
          >
            <ul className="pagination m-0 flex justify-between items-center gap-1 flex-nowrap">
              <li className="page-item page1" data-parent="A">
                <Link scroll={false} className="page-link " href="/all-categories/A">
                  A
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="B">
                <Link scroll={false} className="page-link " href="/all-categories/B">
                  B
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="C">
                <Link scroll={false} className="page-link " href="/all-categories/C">
                  C
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="D">
                <Link scroll={false} className="page-link " href="/all-categories/D">
                  D
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="E">
                <Link scroll={false} className="page-link " href="/all-categories/E">
                  E
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="F">
                <Link scroll={false} className="page-link " href="/all-categories/F">
                  F
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="G">
                <Link scroll={false} className="page-link " href="/all-categories/G">
                  G
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="H">
                <Link scroll={false} className="page-link " href="/all-categories/H">
                  H
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="I">
                <Link scroll={false} className="page-link " href="/all-categories/I">
                  I
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="J">
                <Link scroll={false} className="page-link " href="/all-categories/J">
                  J
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="K">
                <Link scroll={false} className="page-link " href="/all-categories/K">
                  K
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="L">
                <Link scroll={false} className="page-link " href="/all-categories/L">
                  L
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="M">
                <Link scroll={false} className="page-link " href="/all-categories/M">
                  M
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="N">
                <Link scroll={false} className="page-link " href="/all-categories/N">
                  N
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="O">
                <Link scroll={false} className="page-link " href="/all-categories/O">
                  O
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="P">
                <Link scroll={false} className="page-link " href="/all-categories/P">
                  P
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="Q">
                <Link scroll={false} className="page-link " href="/all-categories/Q">
                  Q
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="R">
                <Link scroll={false} className="page-link " href="/all-categories/R">
                  R
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="S">
                <Link scroll={false} className="page-link " href="/all-categories/S">
                  S
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="T">
                <Link scroll={false} className="page-link " href="/all-categories/T">
                  T
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="U">
                <Link scroll={false} className="page-link " href="/all-categories/U">
                  U
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="V">
                <Link scroll={false} className="page-link " href="/all-categories/V">
                  V
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="W">
                <Link scroll={false} className="page-link " href="/all-categories/W">
                  W
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="X">
                <Link scroll={false} className="page-link " href="/all-categories/X">
                  X
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="Y">
                <Link scroll={false} className="page-link " href="/all-categories/Y">
                  Y
                </Link>
              </li>
              <li className="page-item page1 py-1" data-parent="Z">
                <Link scroll={false} className="page-link " href="/all-categories/Z">
                  Z
                </Link>
              </li>
            </ul>
            <ul className="pagination m-0">
              <li className="page-item">
                <Link scroll={false}
                  className="page-link rounded-pill theme-btn1"
                  href="/all-categories "
                >
                  Reset Filter
                </Link>
              </li>
            </ul>
          </nav>
          <div className="grid grid-cols-4 gap-4 mt-10">
            {loading
              ? [...Array(8)].map((itm, index) => (
                  <li
                    key={index}
                    className="flex justify-start items-center ring-2 rounded-lg gap-4  p-4 bg-white animate-pulse"
                  >
                    <div className="size-10 rounded-md animate-pulse bg-gray-200"></div>
                    <p className="min-h-8 animate-pulse rounded-md w-full bg-gray-200"></p>
                  </li>
                ))
              : categories
                  .filter((item) =>
                    item.category_name.startsWith(
                      params?.filter ? params?.filter : "",
                      0
                    )
                  )
                  ?.slice(0, 24)
                  ?.map(
                    (category: categories, i) =>
                      i !== 7 && (
                        <div
                          key={category.category_slug}
                          className="col-xl-3 col-lg-4 col-md-6 mb-4"
                        >
                          <Link scroll={false} href={`/category/${category.category_slug}`}>
                            <div className="singe-category">
                              <Image
                                width={60}
                                alt={""}
                                height={60}
                                src={`/${category.category_icon}`}
                              />
                              <h5 className="ps-3">
                                {category.category_name}{" "}
                              </h5>
                            </div>
                          </Link>
                        </div>
                      )
                  )}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <Link scroll={false} href="/other_categories">
                <div className="singe-category">
                  <Image
                    alt=""
                    width={60}
                    height={60}
                    src="/1694521481application.png"
                  />
                  <h5 className="ps-3">Others</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example"></nav>
      </div>
    </section>
  );
};

export default AllCategories;
