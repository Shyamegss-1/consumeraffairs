import React from "react";
import { prisma } from "../../../../prisma/prisma";
import Image from "next/image";
import BlogContent from "./BlogContent";

type Props = {
  params: {
    slug: string;
  };
};

const BlogDetails = (props: Props) => {
  const { slug } = props.params;
  const blog = async (_slug: string) => {
    const _blogData = await prisma.blog.findFirst({
      where: {
        b_slug: _slug,
      },
    });
    // console.log(_blogData?.b_description);
    // const formatedHtml = document.getElementById("blog-content");
    // console.log(formatedHtml);

    return (
      <div>
        <h2>{_blogData?.b_title}</h2>
        <Image
          src={_blogData?.b_image ? _blogData.b_image : "/bg.png"}
          alt={_blogData?.image_alt ? _blogData?.image_alt : "blog-image"}
          width={800}
          height={400}
          objectFit="cover"
        />

        {
          <BlogContent
            content={_blogData?.b_description ? _blogData?.b_description : ""}
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
    );
  };

  return <>{blog(slug)}</>;
};

export default BlogDetails;


