"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import {  BsArrowLeft, } from "react-icons/bs";

type Props = {};

const FormHeader = (props: Props) => {
  const router = useRouter();

  return (
    <div className="rounded-xl border bg-white px-6 py-4 shadow-md mb-4 text-xl font-semibold w-full flex justify-between items-center">
      <h3 className="">Edit Business</h3>
      <Button
        // variant="bordered"
        // color="danger"
        onPress={() => router.back()}
        className="py-1 px-6 ring-2 bg-slate-50 ring-red-500 text-red-500 rounded-md font-medium text-[16px]"
      >
        <BsArrowLeft className="font-medium"/>
        Go Back
      </Button>
    </div>
  );
};

export default FormHeader;
