import React from "react";
import { prisma } from "../../../../prisma/prisma";
import Image from "next/image";
import BlogContent from "./BlogContent";
import { div } from "framer-motion/client";
import BlogAsideSection from "./BlogAsideSection";
import BlogComments from "./BlogComments";
import { auth } from "@/auth";
import { Avatar, AvatarIcon } from "@nextui-org/react";

type Props = {
  params: {
    slug: string;
  };
};

const BlogDetails = (props: Props) => {
  const { slug } = props.params;
  const blog = async (_slug: string) => {
    const session = await auth();
    const _blogData = await prisma.blog.findFirst({
      where: {
        b_slug: _slug,
      },
      include: {
        blog_comment: {
          include: {
            user: true,
          },
        },
      },
    });

    // const
    // console.log(_blogData?.b_description);
    // const formatedHtml = document.getElementById("blog-content");
    // console.log(formatedHtml);

    return (
      <>
        <div className="col-span-8">
          <div>
            <h2>{_blogData?.b_title}</h2>
            <Image
              className="w-full"
              src={_blogData?.b_image ? _blogData.b_image : "/bg.png"}
              alt={_blogData?.image_alt ? _blogData?.image_alt : "blog-image"}
              width={800}
              height={400}
              objectFit="cover"
            />

            {
              <BlogContent
                content={
                  _blogData?.b_description ? _blogData?.b_description : ""
                }
              />
            }
            {/* <div
          className="mt-10 blog-content"
        //   id=""
          dangerouslySetInnerHTML={{
            __html: `<div>${_blogData?.b_description.replaceAll(
              "<h2",
              "<h2 id=h2"
            )}</div>`,
          }}
        /> */}
          </div>
        </div>
        <div className="col-span-4 sticky h-fit top-10">
          <BlogAsideSection
            {...props}
            categoryId={Number(_blogData?.b_category)}
            tags={_blogData?.tags ? _blogData?.tags : ""}
          />
        </div>
        <hr className="col-span-8" />
        <div className="w-full p-4 col-span-8 bg-gray-100 rounded-xl">
          <BlogComments
            blogId={Number(_blogData?.b_id)}
            user={session?.user ? session.user : null}
          />
          <div className="mt-10">
            <h5>Comments:</h5>
            <div className="flex flex-col justify-start items-start gap-4 mt-8">
              {_blogData?.blog_comment.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start gap-2 w-full"
                >
                  <div className="flex justify-center items-center">
                    <Avatar
                      icon={<AvatarIcon />}
                      classNames={{
                        base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                        icon: "text-black/80",
                      }}
                    />
                  </div>
                  <div className="bg-white p-4 border rounded-xl w-full">
                    <h6>{item.name ? item.name : item.user?.firstName}</h6>
                    <p>{item.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{blog(slug)}</>;
};

export default BlogDetails;
