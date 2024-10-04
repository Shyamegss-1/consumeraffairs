"use client";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import EditorComponent from "../../../../components/rich-text-editor/CKEEditor";
import Image from "next/image";
import { convertToBase64 } from "@/lib/Hooks";
import { AddBlog, updateBlog } from "@/server-actions/Admin/Blogs";
import { toast } from "sonner";
import axios from "axios";

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

interface selectBusinessCategoryData {
  cid: number;
  category_name: string;
}
interface selectBlogCategoryData {
  b_c_id: number;
  b_c_name: string;
}

type Props = {
  blogData: any;
  blogCategories: any;
  businessCategories: any;
};

interface formData {
  b_id: string;
  title: string;
  businessCategory: any;
  blogCategory: any;
  tags: string | null;
  slug: string;
  blogImage: string;
  blogImageAlt: string;
  metaTitle: string | null;
  metaKeywords: string | null;
  metaDescription: string | null;
}

const BlogForm = ({ blogData,businessCategories,blogCategories }: Props) => {
  // const [blogCategories, setblogCategories] = useState<
  //   selectBlogCategoryData[]
  // >([]);
  // const [businessCategories, setbusinessCategories] = useState<
  //   selectBusinessCategoryData[]
  // >([]);
  const [blogContent, setBlogContent] = useState<string>("");

  const [formData, setFormData] = useState<formData>({
    b_id: "",
    title: "",
    businessCategory: undefined,
    blogCategory: undefined,
    tags: "",
    slug: "",
    blogImage: "",
    blogImageAlt: "",
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    const _formData = new FormData(e.target);
    const file = _formData.get("blogImage");
    const title = _formData.get("title");
    const blogImage = await convertToBase64(file);
    const blogImageAlt = _formData.get("blogImageAlt");
    const businessCategory = _formData.get("businessCategory");
    const blogCategory = _formData.get("blogCategory");
    const tags = _formData.get("tags");
    const slug = _formData.get("slug");
    const metaTitle = _formData.get("metaTitle");
    const metaKeywords = _formData.get("metaKeywords");
    const metaDescription = _formData.get("metaDescription");

    // if (!businessCategory) {
    //   return toast.error("Please Select Business Category", {
    //     id: toastId,
    //   });
    // }
    // if (!blogCategory) {
    //   return toast.error("Please Select Blog Category", {
    //     id: toastId,
    //   });
    // }

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
    // console.log(businessCategory, blogCategory);

    let res;
    if (formData.b_id !== "") {
      res = await updateBlog({ ...data, b_id: formData.b_id });
    } else {
      res = await AddBlog(data);
    }

    if (res.status) {
      toast.success(res.message, {
        id: toastId,
      });
    } else {
      console.log(res);

      if (res.path) {
        const ele = document.getElementById(String(res.path));
        if (ele) {
          ele.focus();
        }
      }
      return toast.error(res.message, {
        id: toastId,
      });
    }
  };

  // const getBusinessCategoryData = async () => {
  //   const res = await axios.get("/api/business-category", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.data;
  //   console.log(data.data, "getBusinessCategoryData");
  //   setbusinessCategories(data.data);
  // };
  // const getBlogCategoryData = async () => {
  //   const res = await axios.get("/api/blog-category", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.data;
  //   console.log(data.data, "getBlogCategoryData");
  //   setblogCategories(data.data);
  // };

  useEffect(() => {
    // getBusinessCategoryData();
    // getBlogCategoryData();
    if (blogData) {
      setFormData({
        b_id: String(blogData.b_id),
        title: blogData.b_title,
        businessCategory: String(blogData.businessCategory),
        blogCategory: String(blogData.b_category),
        tags: blogData.tags,
        slug: blogData.b_slug,
        blogImage: blogData.b_image,
        blogImageAlt: blogData.image_alt,
        metaTitle: blogData.metaTitle,
        metaKeywords: blogData.metaKeywords,
        metaDescription: blogData.metaDescription,
      });
      setBlogContent(blogData.b_description);
    }
  }, []);

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 w-full">
            <Input
              value={formData.title}
              onValueChange={(value) => {
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  title: value,
                }));
              }}
              type="text"
              label="Title"
              variant="bordered"
              color="primary"
              name="title"
              id="title"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Enter Title"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Select
              id="businessCategory"
              label="Select Business Category"
              placeholder="Select Business Category"
              variant="bordered"
              name="businessCategory"
              color="primary"
              selectedKeys={[formData.businessCategory]} // Controlled selected value
              onSelectionChange={
                ({ currentKey }) =>
                  setFormData({ ...formData, businessCategory: currentKey }) // Update state
              }
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement="outside"
              className="max-w-xs"
            >
              {businessCategories.map((animal:any) => {
                return (
                  <SelectItem
                    key={`${animal.cid}`}
                    textValue={String(animal.category_name)}
                  >
                    {animal.category_name}
                  </SelectItem>
                );
              })}
            </Select>
          </div>
          <div className="col-span-3 w-full">
            <Select
              id="blogCategory"
              label="Select Blog Category"
              placeholder="Select Blog Category"
              variant="bordered"
              color="primary"
              name="blogCategory"
              selectedKeys={[formData.blogCategory]}
              onSelectionChange={({ currentKey }) =>
                setFormData({ ...formData, blogCategory: currentKey })
              }
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement="outside"
              className="max-w-xs"
            >
              {blogCategories.map((animal:any) => {
                return (
                  <SelectItem
                    key={`${animal.b_c_id}`}
                    textValue={String(animal.b_c_name)}
                  >
                    {animal.b_c_name}
                  </SelectItem>
                );
              })}
            </Select>
          </div>
          <div className="col-span-3 w-full">
            <Input
              value={formData.tags ? formData.tags : ""}
              onValueChange={(value) => {
                setFormData({ ...formData, tags: value });
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
          <div className="col-span-3 w-full">
            <Input
              value={formData.slug}
              onValueChange={(value) => {
                setFormData({ ...formData, slug: value });
              }}
              type="text"
              label="Slug (Optional)"
              variant="bordered"
              color="primary"
              name="slug"
              id="slug"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Slug"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Input
              // value={formData.blogImage}
              onChange={async (e) => {
                const blogImage = await convertToBase64(
                  e.target?.files ? e.target.files[0] : ""
                );
                setFormData({ ...formData, blogImage: String(blogImage) });
              }}
              type="file"
              accept="image/png"
              label="Upload Image"
              name="blogImage"
              id="blogImage"
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
              value={formData.blogImageAlt ? formData.blogImageAlt : ""}
              onValueChange={(value) => {
                setFormData({ ...formData, blogImageAlt: value });
              }}
              type="text"
              label="Image Alt"
              variant="bordered"
              name="blogImageAlt"
              id="blogImageAlt"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Image Alt"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Image
              src={formData.blogImage || "/logo.png"}
              alt={formData.blogImageAlt}
              className="size-20"
              width={1080}
              height={1080}
              objectFit="cover"
            />
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
              id="blogContent"
              data={blogContent}
              onChange={(value: any) => setBlogContent(value)}
            />
          </div>
          <div className="col-span-3 w-full">
            <Input
              value={formData.metaTitle ? formData.metaTitle : ""}
              onValueChange={(value) => {
                setFormData({ ...formData, metaTitle: value });
              }}
              type="text"
              name="metaTitle"
              id="metaTitle"
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
              value={formData.metaKeywords ? formData.metaKeywords : ""}
              onValueChange={(value) => {
                setFormData({ ...formData, metaKeywords: value });
              }}
              type="text"
              name="metaKeywords"
              id="metaKeywords"
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
        <Button color="primary" type="submit" variant="solid">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default BlogForm;

// export const blogCategories = [
//   { value: 8, label: "Trends in consumers" },
//   { value: 3, label: "Learn and spread consumer delight" },
//   { value: 9, label: "Top recommended companies" },
// ];
// export const businessCategories = [
//   { value: 42, label: "Automotive Technology" },
//   { value: 45, label: "Beverage" },
//   { value: 53, label: "Cloud Computing" },
// ];
