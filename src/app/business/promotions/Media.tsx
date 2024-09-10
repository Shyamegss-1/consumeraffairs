"use client";
import React, { useState } from "react";
import { Previews } from "./FileUploader";

type Props = {};

const Media = (props: Props) => {
  const [toggleButton, setToggleButton] = useState<string>("PHOTOS");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="col-span-6 shadow-md rounded-lg p-8 bg-white border">
      <div className="flex flex-col justify-start items-start gap-4 h-full">
        <h4 className="w-full text-3xl font-semibold text-center mb-4">
          Media
        </h4>
        <div className="w-full h-full flex flex-col justify-start">
          <div className="bg-primary_dark/50 shadow-inner rounded-full p-2 flex justify-between items-center gap-4 w-2/3  mx-auto">
            <button
              onClick={() => setToggleButton("PHOTOS")}
              className={`w-full py-2 px-6 ring ring-active_dark ${
                toggleButton === "PHOTOS" ? "bg-active_dark text-white " : ""
              } rounded-full`}
            >
              Photos
            </button>
            <button
              onClick={() => setToggleButton("VIDEOS")}
              className={`w-full py-2 px-6 ring ring-active_dark  ${
                toggleButton === "VIDEOS" ? "bg-active_dark text-white" : ""
              } rounded-full`}
            >
              Videos
            </button>
          </div>
          <Previews
            mediaType={toggleButton}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
