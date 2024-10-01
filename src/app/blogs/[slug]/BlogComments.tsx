"use client";
import { postComments } from "@/server-actions/blogComments";
import { Avatar, AvatarIcon, Button, Input, Textarea } from "@nextui-org/react";
import { data } from "framer-motion/client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";

type Props = {
  blogId: number;
  user: any;
};

const BlogComments = (props: Props) => {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [comments, setComments] = useState<any[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await postComments({
      ...formData,
      blogId: props.blogId,
      userId: props.user
        ? props.user.userType === "USER"
          ? props.user.id
          : null
        : null,
    });

    console.log({ data, res });
    if (res.status) {
      router.refresh();
      toast.success(res.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="w-full relative">
      <h4>Enter Your Comments Here</h4>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <div className="col-span-1">
          <Input
            value={formData.name}
            onValueChange={(value) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                name: value,
              }));
            }}
            type="text"
            label="Name"
            variant="bordered"
            color="primary"
            name="name"
            id="name"
            classNames={{ label: ["text-gray-700, font-medium"] }}
            labelPlacement={"outside"}
            placeholder="Enter name"
            description={null}
          />
        </div>
        <div className="col-span-1">
          <Input
            value={formData.email}
            onValueChange={(value) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                email: value,
              }));
            }}
            type="text"
            label="Email"
            variant="bordered"
            color="primary"
            name="email"
            id="email"
            classNames={{ label: ["text-gray-700, font-medium"] }}
            labelPlacement={"outside"}
            placeholder="Enter email"
            description={null}
          />
        </div>
        <div className="col-span-2">
          <Textarea
            value={formData.message ? formData.message : ""}
            onValueChange={(value) => {
              setFormData({ ...formData, message: value });
            }}
            label="Message"
            variant="bordered"
            name="message"
            id="message"
            color="primary"
            classNames={{ label: ["text-gray-700, font-medium"] }}
            labelPlacement={"outside"}
            placeholder="Message..."
            description={null}
          />
        </div>
        <div>
          <Button type="submit" variant="solid" color="primary">
            Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogComments;
