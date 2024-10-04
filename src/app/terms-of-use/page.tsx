import React from "react";
import { prisma } from "../../../prisma/prisma";

type Props = {};

const page = async (props: Props) => {
  const policy = await prisma.termsAndConditions.findFirst({
    where: {
      status: true,
    },
  });

  return (
    <div className="py-10 w-full min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center">Terms And Conditions</h1>
        <div dangerouslySetInnerHTML={{ __html: `${policy?.content}` }} />
      </div>
    </div>
  );
};

export default page;
