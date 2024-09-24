"use client";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";

import { toast } from "sonner";
import { convertToBase64 } from "@/lib/Hooks";
import Swal from "sweetalert2";
import {
  addListingByAdmin,
  addListingByBusinessOwner,
} from "@/server-actions/addListingByBusinessUser";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { CategoryOptions } from "@/app/business/add-business/CategoryOptions";
import PhoneNumber from "@/app/business/add-business/PhoneNumber";
import { Switch } from "@nextui-org/react";
import EditorComponent from "@/components/rich-text-editor/CKEEditor";

//

type Props = {
  userId: string;
};

const AddBusinessForm = ({ userId }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [content, setContent] = useState<string | null>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(e.currentTarget);
    const toastId = toast.loading("loading...");

    try {
      setLoading(true);

      const data = {
        userId: userId,
        content,
      };

      console.log(data);

      // const res = await addListingByAdmin(data);
      // setLoading(false);
      // if (!res.status) {
      //   toast.error(res.message, {
      //     id: toastId,
      //   });
      // } else {
      //   toast.dismiss();
      //   Swal.fire({
      //     title: "Success",
      //     text: "Check your email to verify your account",
      //   });
      // }
    } catch (error) {
      toast.error("An error occurred", { id: toastId });
    }
  };

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <label
            className="pointer-events-none origin-top-left rtl:origin-top-right subpixel-antialiased block will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:start-0 start-3 end-auto text-small group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)] pe-2 max-w-full text-ellipsis overflow-hidden text-gray-700, font-medium"
            htmlFor=""
          >
            Add Footer Content
          </label>
          <EditorComponent
            name="content"
            id="content"
            data={content}
            onChange={(value: any) => setContent(value)}
          />
        </div>
        <button className="py-2 px-6 rounded-full mt-4 bg-active_dark text-white font-bold">
          Submit
        </button>
      </form>
      {loading && (
        <div className="absolute z-30 w-full left-0 top-0 backdrop-blur-sm h-screen flex justify-center items-center">
          <LoadingScreen text="Please Wait..." />
        </div>
      )}
    </>
  );
};

export default AddBusinessForm;
