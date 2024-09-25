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
import { Input, Select, SelectItem, Switch, Textarea } from "@nextui-org/react";
import EditorComponent from "@/components/rich-text-editor/CKEEditor";
import { handleSeo } from "@/server-actions/Admin/Footer";

//
interface formData {
  id: number | null;
  pageName: any;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

type Props = {
  userId: string;
};

const AddBusinessForm = ({ userId }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<formData>({
    id: null,
    pageName: null,
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
  });
  const [pageList, setPageList] = useState<any[]>([]);

  const getPages = async () => {
    const res = await fetch("/api/page-master", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data.data);
    setPageList(data.data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const toastId = toast.loading("loading...");
    try {
      setLoading(true);

      console.log(formData);

      const res = await handleSeo(formData);
      setLoading(false);
      if (!res.status) {
        toast.error(res.message, {
          id: toastId,
        });
      } else {
        toast.success(res.status, {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("An error occurred", { id: toastId });
    }
  };

  useEffect(() => {
    getPages();
  }, []);

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 w-full">
            <Select
              id="blogCategory"
              label="Select Page Name"
              placeholder="Select Page Name"
              variant="bordered"
              color="primary"
              name="blogCategory"
              selectedKeys={[formData.pageName]}
              onSelectionChange={({ currentKey }) =>
                setFormData({ ...formData, pageName: currentKey })
              }
              classNames={{
                label: ["text-gray-700, font-medium"],
                base: ["w-full"],
              }}
              labelPlacement="outside"
              className="max-w-xs"
            >
              {pageList.map((item) => {
                return (
                  <SelectItem
                    key={`${item.id}`}
                    textValue={String(item.pageName)}
                  >
                    {item.pageName}
                  </SelectItem>
                );
              })}
            </Select>
          </div>
          <div className="col-span-1 w-full">
            <Input
              value={formData.metaTitle ? formData.metaTitle : ""}
              onValueChange={(value) => {
                setFormData({ ...formData, metaTitle: value });
              }}
              type="text"
              label="Tags (Separated by comma without space)"
              variant="bordered"
              color="primary"
              name="tags"
              id="tags"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Tags"
              description={null}
            />
          </div>
          <div className="col-span-1 w-full">
            <Input
              value={formData.metaKeywords ? formData.metaKeywords : ""}
              onValueChange={(value) => {
                setFormData({ ...formData, metaKeywords: value });
              }}
              type="text"
              label="MetaKeywords (Separated by comma without space)"
              variant="bordered"
              color="primary"
              name="metaKeywords"
              id="metaKeywords"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Meta Keywords"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Textarea
              value={formData.metaDescription ? formData.metaDescription : ""}
              onValueChange={(value) => {
                setFormData({ ...formData, metaDescription: value });
              }}
              label="Meta Description"
              variant="bordered"
              name="metaDescription"
              id="metaDescription"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Meta Description"
              description={null}
            />
          </div>
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
