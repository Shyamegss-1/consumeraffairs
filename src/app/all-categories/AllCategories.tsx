"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { categories } from "./PopularCategorySection";
import { getCategories } from "@/server-actions/getPopularCategories";
import Link from "next/link";

const AllCategories = () => {
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
                <a className="page-link " href="/all-categories/A">
                  A
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="B">
                <a className="page-link " href="/all-categories/B">
                  B
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="C">
                <a className="page-link " href="/all-categories/C">
                  C
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="D">
                <a className="page-link " href="/all-categories/D">
                  D
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="E">
                <a className="page-link " href="/all-categories/E">
                  E
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="F">
                <a className="page-link " href="/all-categories/F">
                  F
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="G">
                <a className="page-link " href="/all-categories/G">
                  G
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="H">
                <a className="page-link " href="/all-categories/H">
                  H
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="I">
                <a className="page-link " href="/all-categories/I">
                  I
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="J">
                <a className="page-link " href="/all-categories/J">
                  J
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="K">
                <a className="page-link " href="/all-categories/K">
                  K
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="L">
                <a className="page-link " href="/all-categories/L">
                  L
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="M">
                <a className="page-link " href="/all-categories/M">
                  M
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="N">
                <a className="page-link " href="/all-categories/N">
                  N
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="O">
                <a className="page-link " href="/all-categories/O">
                  O
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="P">
                <a className="page-link " href="/all-categories/P">
                  P
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="Q">
                <a className="page-link " href="/all-categories/Q">
                  Q
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="R">
                <a className="page-link " href="/all-categories/R">
                  R
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="S">
                <a className="page-link " href="/all-categories/S">
                  S
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="T">
                <a className="page-link " href="/all-categories/T">
                  T
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="U">
                <a className="page-link " href="/all-categories/U">
                  U
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="V">
                <a className="page-link " href="/all-categories/V">
                  V
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="W">
                <a className="page-link " href="/all-categories/W">
                  W
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="X">
                <a className="page-link " href="/all-categories/X">
                  X
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="Y">
                <a className="page-link " href="/all-categories/Y">
                  Y
                </a>
              </li>
              <li className="page-item page1 py-1" data-parent="Z">
                <a className="page-link " href="/all-categories/Z">
                  Z
                </a>
              </li>
            </ul>
            <ul className="pagination m-0">
              <li className="page-item">
                <a
                  className="page-link rounded-pill theme-btn1"
                  href="/all-categories "
                >
                  Reset Filter
                </a>
              </li>
            </ul>
          </nav>
          <div className="grid grid-cols-4 gap-x-4 mt-10">
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
              : categories.slice(0, 24).map(
                  (category: categories, i) =>
                    i !== 7 && (
                      <div
                        key={category.category_slug}
                        className="col-xl-3 col-lg-4 col-md-6 mb-4"
                      >
                        <a href={`/category/${category.category_slug}`}>
                          <div className="singe-category">
                            <Image
                              width={60}
                              alt={""}
                              height={60}
                              src={`/${category.category_icon}`}
                            />
                            <h5 className="ps-3">{category.category_name} </h5>
                          </div>
                        </a>
                      </div>
                    )
                )}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
              <a href="/other_categories">
                <div className="singe-category">
                  <Image
                    alt=""
                    width={60}
                    height={60}
                    src="/1694521481application.png"
                  />
                  <h5 className="ps-3">Others</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example"></nav>
      </div>
    </section>
  );
};

export default AllCategories;
