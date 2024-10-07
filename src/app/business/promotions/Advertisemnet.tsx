"use client";
import { convertToBase64 } from "@/lib/Hooks";
import {
  getPromotionAds,
  handleCreateUpdatePromotionsAds,
} from "@/server-actions/Business/promotions";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  listingId: number;
  userId: number;
  prevAds: any;
};

const Advertisemnet = (props: Props) => {
  const [ads, setAds] = useState<
    { id: number | null; image: string; adUrl: string }[]
  >([
    {
      id: null,
      image: "",
      adUrl: "",
    },
    {
      id: null,
      image: "",
      adUrl: "",
    },
    {
      id: null,
      image: "",
      adUrl: "",
    },
  ]);

  console.log(props, "props");

  const handleUpload = (
    id: number,
    item: {
      adUrl: string;
      image: string;
      userId: number;
      listingId: number;
    }
  ) => {
    const res = handleCreateUpdatePromotionsAds(id, { ...item });
  };

  useEffect(() => {
    const res = props.prevAds.map((item:any) => ({
      id: item.id,
      image: item.image,
      adUrl: item.adUrl,
    }));
    setAds([...res]);
  }, [props.prevAds]);

  return (
    <div className="col-span-6 shadow-md rounded-lg p-8 bg-white border">
      <div className="flex flex-col justify-center items-start gap-4">
        <h4 className="w-full text-3xl font-semibold text-center mb-4">
          Advertisement
        </h4>
        {ads.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-2 justify-center items-center"
          >
            <div className="col-span-6">
              <Image
                src={item.image !== "" ? item.image : "/aaaa.png"}
                alt={`ad-${i + 1}`}
                height={1080}
                width={1920}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="col-span-6 flex flex-col justify-center items-start gap-2 p-2">
              <label
                htmlFor={`adv-${i + 1}`}
                className="border border-dashed border-active_dark px-6 py-2 text-primary_light rounded-full w-full flex justify-center items-center gap-4"
              >
                <i className="fa fa-upload text-primary_light" />
                <span className="">Adv. {i + 1}</span>
                <input
                  type="file"
                  name={`image`}
                  id={`adv-${i + 1}`}
                  onChange={async (e: any) => {
                    const file = await convertToBase64(e.target.files[0]);
                    console.log(file);

                    item.image = String(file);
                    setAds([...ads]);
                  }}
                  className="absolute opacity-0"
                />
              </label>
              <p className="text-gray-900 text-xs font-normal w-full text-start">
                Image size should be 850px x 320px
              </p>
              <label
                htmlFor={`adv-${i + 1}-url`}
                className="text-sm font-medium"
              >
                Advertise {i + 1} URL
              </label>
              <input
                type="text"
                name="adUrl"
                id="adv-1-url"
                className="form-control placeholder:text-sm placeholder:font-light"
                placeholder="Adv. 1 URL"
                value={item.adUrl}
                onChange={(e) => {
                  item.adUrl = String(e.target.value);
                  setAds([...ads]);
                }}
              />
              <button
                onClick={(e) =>
                  handleUpload(Number(item.id), {
                    adUrl: item.adUrl,
                    image: item.image,
                    listingId: props.listingId,
                    userId: props.userId,
                  })
                }
                className="w-full bg-active_dark rounded-full py-2 px-6 text-white font-semibold"
              >
                Upload
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisemnet;
