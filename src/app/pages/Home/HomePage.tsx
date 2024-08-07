import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="h-[50vh] relative rounded-b-[3rem] bg-gradient-to-r from-[#1758A6]  to-[#214272] flex justify-center items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 justify-between items-center">
            <div className="mx-auto flex justify-end items-start">
                <div className="flex flex-col justify-center items-center"></div>
                <div className="flex flex-col justify-center items-center"></div>
            </div>
            <div className="mx-auto flex justify-center items-center">
              <Image
                alt="banner"
                height={350}
                width={350}
                src={"/banner-image.jpg"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
