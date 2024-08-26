import React from "react";

type Props = {};

const LoadingUi = (props: Props) => {
  return (
    <div className="w-full min-h-[90vh]">
      <div className="w-full min-h-[30vh] bg-gray-200 animate-pulse"></div>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="flex justify-start items-center gap-10">
          <div className="min-h-[5vh] min-w-48 bg-gray-200 rounded-2xl animate-pulse"></div>
          <div className="min-h-[5vh] min-w-48 bg-gray-200 rounded-2xl animate-pulse"></div>
          <div className="min-h-[5vh] min-w-48 bg-gray-200 rounded-2xl animate-pulse"></div>
          <div className="min-h-[5vh] min-w-48 bg-gray-200 rounded-2xl animate-pulse"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 mt-10">
        <div className="col-span-8">
          <div className="min-h-[20vh] bg-gray-200 animate-pulse rounded-xl mt-10"></div>
          <div className="min-h-[20vh] bg-gray-200 animate-pulse rounded-xl mt-10"></div>
          <div className="min-h-[20vh] bg-gray-200 animate-pulse rounded-xl mt-10"></div>
        </div>
        <div className="col-span-4">
          <div className="min-h-[10vh] bg-gray-200 animate-pulse rounded-xl mt-10"></div>
          <div className="min-h-[20vh] bg-gray-200 animate-pulse rounded-xl mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingUi;
