import React from "react";
import { prisma } from "../../../prisma/prisma";

type Props = {};

const page = async (props: Props) => {
  const privacyPolicy = await prisma.privacyPolicy.findFirst({
    where: {
      status: true,
    },
  });
  return (
    <div className="py-10 w-full min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center">Privacy Policy</h1>
        <div
          dangerouslySetInnerHTML={{ __html: `${privacyPolicy?.content}` }}
        />
      </div>
    </div>
  );
};

export default page;
