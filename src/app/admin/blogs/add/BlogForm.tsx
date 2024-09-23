"use client";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import EditorComponent from "../../../../components/rich-text-editor/CKEEditor";
import Image from "next/image";
import { convertToBase64 } from "@/lib/Hooks";
import { AddBlog } from "@/server-actions/Admin/Blogs";
import { toast } from "sonner";

interface data {
  title: string;
  blogImage: string;
  blogImageAlt: string;
  businessCategory: number;
  blogCategory: number;
  tags: string;
  slug: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  blogContent: string;
}

type Props = {};

const BlogForm = (props: Props) => {
  const [blogContent, setBlogContent] = useState<string>("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    const formData = new FormData(e.target);
    const file = formData.get("blogImage");
    const title = formData.get("Title");
    const blogImage = await convertToBase64(file);
    const blogImageAlt = formData.get("blogImageAlt");
    const businessCategory = formData.get("businessCategory");
    const blogCategory = formData.get("blogCategory");
    const tags = formData.get("tags");
    const slug = formData.get("slug");
    const metaTitle = formData.get("metaTitle");
    const metaKeywords = formData.get("metaKeywords");
    const metaDescription = formData.get("metaDescription");

    if (!businessCategory) {
      return toast.error("Please Select Business Category", {
        id: toastId,
      });
    }
    if (!blogCategory) {
      return toast.error("Please Select Blog Category", {
        id: toastId,
      });
    }

    const data: data = {
      title: title ? (title as string) : "",
      blogImage: blogImage ? (blogImage as string) : "",
      blogImageAlt: blogImageAlt ? (blogImageAlt as string) : "",
      businessCategory: Number(businessCategory),
      blogCategory: Number(blogCategory),
      tags: tags ? (tags as string) : "",
      slug: slug ? (slug as string) : "",
      metaTitle: metaTitle ? (metaTitle as string) : "",
      metaKeywords: metaKeywords ? (metaKeywords as string) : "",
      metaDescription: metaDescription ? (metaDescription as string) : "",
      blogContent: blogContent ? (blogContent as string) : "",
    };
    const res = await AddBlog(data);
    if (res.status) {
      return toast.success("Blog Added Successfully", {
        id: toastId,
      });
    } else {
      return toast.error("Failed to Add Blog", {
        id: toastId,
      });
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 w-full">
            <Input
              type="text"
              label="Title"
              variant="bordered"
              color="primary"
              name="Title"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Enter Title"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Select
              label="Select Business Category"
              placeholder="Select Business Category"
              variant="bordered"
              name="businessCategory"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement="outside"
              className="max-w-xs"
            >
              {businessCategories.map((animal) => {
                return (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                );
              })}
            </Select>
          </div>
          <div className="col-span-3 w-full">
            <Select
              label="Select Blog Category"
              placeholder="Select Blog Category"
              variant="bordered"
              color="primary"
              name="blogCategory"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement="outside"
              className="max-w-xs"
            >
              {blogCategories.map((animal) => {
                return (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                );
              })}
            </Select>
          </div>
          <div className="col-span-3 w-full">
            <Input
              type="text"
              label="Tags (Separated by comma without space)"
              variant="bordered"
              color="primary"
              name="tags"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Tags"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Input
              type="text"
              label="Slug (Optional)"
              variant="bordered"
              color="primary"
              name="slug"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Slug"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Input
              type="file"
              accept="image/png"
              label="Upload Image"
              name="blogImage"
              variant="bordered"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Enter your email"
              description={"Image Size (1200X400) px | max 3MB"}
            />
          </div>
          <div className="col-span-3 w-full">
            <Input
              type="text"
              label="Image Alt"
              variant="bordered"
              name="blogImageAlt"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Image Alt"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Image src={""} alt="" />
          </div>
          <div className="col-span-12 w-full mt-4">
            <label
              className="pointer-events-none origin-top-left rtl:origin-top-right subpixel-antialiased block will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:start-0 start-3 end-auto text-small group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)] pe-2 max-w-full text-ellipsis overflow-hidden text-gray-700, font-medium"
              htmlFor=""
            >
              Add Blog Content
            </label>
            <EditorComponent
              name="blogContent"
              data={blogContent}
              onChange={(value: any) => setBlogContent(value)}
            />
          </div>
          <div className="col-span-3 w-full">
            <Input
              type="text"
              name="metaTitle"
              label="Meta Title"
              variant="bordered"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Slug"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Input
              type="text"
              name="metaKeywords"
              label="Meta Keywords"
              variant="bordered"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Meta"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Textarea
              label="Meta Description"
              variant="bordered"
              name="metaDescription"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Meta Description"
              description={null}
            />
          </div>
        </div>
        <Button color="primary" type="submit" variant="solid">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default BlogForm;

export const blogCategories = [
  { value: 8, label: "Trends in consumers" },
  { value: 3, label: "Learn and spread consumer delight" },
  { value: 9, label: "Top recommended companies" },
];
export const businessCategories = [
  { value: 42, label: "Automotive Technology" },
  { value: 45, label: "Beverage" },
  { value: 53, label: "Cloud Computing" },
];
