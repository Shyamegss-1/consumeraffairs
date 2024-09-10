import Image from "next/image";
import React from "react";

type Props = {};

const Advertisemnet = (props: Props) => {
  return (
    <div className="col-span-6 shadow-md rounded-lg p-8 bg-white border">
      <div className="flex flex-col justify-center items-start gap-4">
        <h4 className="w-full text-3xl font-semibold text-center mb-4">
          Advertisement
        </h4>
        <div className="grid grid-cols-12 gap-2 justify-center items-center">
          <div className="col-span-6">
            <Image
              src={"/aaaa.png"}
              alt="ad1"
              height={1080}
              width={1080}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center items-start gap-2 p-2">
            <label
              htmlFor="adv-1"
              className="border border-dashed border-active_dark px-6 py-2 text-primary_light rounded-full w-full flex justify-center items-center gap-4"
            >
              <i className="fa fa-upload text-primary_light" />
              <span className="">Adv. 1</span>
              <input
                type="file"
                name="ad1"
                id="adv-1"
                className="absolute opacity-0"
              />
            </label>
            <p className="text-gray-900 text-xs font-normal w-full text-start">
              Image size should be 850px x 320px
            </p>
            <label htmlFor="adv-1-url" className="text-sm font-medium">
              Advertise 1 URL
            </label>
            <input
              type="text"
              name=""
              id="adv-1-url"
              className="form-control placeholder:text-sm placeholder:font-light"
              placeholder="Adv. 1 URL"
            />
            <button className="w-full bg-active_dark rounded-full py-2 px-6 text-white font-semibold">
              Upload
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 justify-center items-center">
          <div className="col-span-6">
            <Image
              src={"/aaaa.png"}
              alt="ad1"
              height={1080}
              width={1080}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center items-start gap-2 p-2">
            <label
              htmlFor="adv-1"
              className="border border-dashed border-active_dark px-6 py-2 text-primary_light rounded-full w-full flex justify-center items-center gap-4"
            >
              <i className="fa fa-upload text-primary_light" />
              <span className="">Adv. 1</span>
              <input
                type="file"
                name="ad1"
                id="adv-1"
                className="absolute opacity-0"
              />
            </label>
            <p className="text-gray-900 text-xs font-normal w-full text-start">
              Image size should be 850px x 320px
            </p>
            <label htmlFor="adv-1-url" className="text-sm font-medium">
              Advertise 1 URL
            </label>
            <input
              type="text"
              name=""
              id="adv-1-url"
              className="form-control placeholder:text-sm placeholder:font-light"
              placeholder="Adv. 1 URL"
            />
            <button className="w-full bg-active_dark rounded-full py-2 px-6 text-white font-semibold">
              Upload
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 justify-center items-center">
          <div className="col-span-6">
            <Image
              src={"/aaaa.png"}
              alt="ad1"
              height={1080}
              width={1080}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center items-start gap-2 p-2">
            <label
              htmlFor="adv-1"
              className="border border-dashed border-active_dark px-6 py-2 text-primary_light rounded-full w-full flex justify-center items-center gap-4"
            >
              <i className="fa fa-upload text-primary_light" />
              <span className="">Adv. 1</span>
              <input
                type="file"
                name="ad1"
                id="adv-1"
                className="absolute opacity-0"
              />
            </label>
            <p className="text-gray-900 text-xs font-normal w-full text-start">
              Image size should be 850px x 320px
            </p>
            <label htmlFor="adv-1-url" className="text-sm font-medium">
              Advertise 1 URL
            </label>
            <input
              type="text"
              name=""
              id="adv-1-url"
              className="form-control placeholder:text-sm placeholder:font-light"
              placeholder="Adv. 1 URL"
            />
            <button className="w-full bg-active_dark rounded-full py-2 px-6 text-white font-semibold">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisemnet;
