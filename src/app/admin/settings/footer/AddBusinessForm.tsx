"use client";
import React, { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";
import LoadingScreen from "@/components/ui/LoadingScreen";
import EditorComponent from "@/components/rich-text-editor/CKEEditor";
import { handleCreateUpdateFooter } from "@/server-actions/Admin/Footer";

//

type Props = {
  userId: string;
  footerData: any;
};

const AddBusinessForm = ({ userId, footerData }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [content, setContent] = useState<string | null>(null);
  const [id, setId] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const toastId = toast.loading("Please wait...");
    try {
      setLoading(true);
      if (!content) {
        return toast.error("Please add content in editor", {
          id: toastId,
        });
      }
      const res = await handleCreateUpdateFooter({ content, id });
      setLoading(false);
      if (!res.status) {
        toast.error(res.message, {
          id: toastId,
        });
      } else {
        toast.success(res.message, {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("An error occurred", { id: toastId });
    }
  };

  useEffect(() => {
    setContent(footerData?.content);
    setId(footerData?.id);
  }, []);

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
            data={content ? content : ""}
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
