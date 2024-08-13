"use client";
import React, { useEffect } from "react";
import { prisma } from "../../../prisma/prisma";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/server-actions/getPopularCategories";

type Props = {};
export interface categories {
  cid: number;
  category_name: string;
  category_slug: string;
  category_icon: string | null;
  popular: number | null;
  date: string;
}

const CategorySection = (props: Props) => {
  const [categories, setCategories] = React.useState<categories[]>([]);
  const [loading, setLoading] = React.useState(true);

  // console.log(categories, "hghghfghfg");

  useEffect(() => {
    const fetchCategories = async () => {
      const { popularCategories }: any = await getCategories();
      setCategories(popularCategories);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto  ">
      <h2 className="text-4xl font-bold text-center text-white">
        Popular Categories
      </h2>
      <ul className="grid grid-cols-4 gap-4 mt-10">
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
          : categories?.map((category: categories) => (
              <li
                key={category.cid}
                className="flex justify-start items-center ring-2 rounded-lg gap-4  p-4 bg-white"
              >
                <Image
                  src={`/${category.category_icon}`}
                  width={40}
                  height={40}
                  alt=""
                />
                <Link href={""} className="font-semibold">
                  {category.category_name}
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default CategorySection;
