"use client";
import { uploadPromotions } from "@/server-actions/businessRegister";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import Swal from "sweetalert2";

const thumbsContainer: any = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb: any = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner: any = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img: any = {
  display: "block",
  width: "auto",
  height: "100%",
};

export function Previews({
  mediaType,
  loading,
  setLoading,
}: {
  mediaType: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [files, setFiles] = useState<any[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept:
      mediaType === "PHOTOS"
        ? {
            "image/*": [],
          }
        : {
            "video/mp4": [".mp4", ".MP4"],
          },
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const thumbs: any[] = files.map((file: any) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        {file.type === "video/mp4" ? (
          <video
            width="320"
            height="240"
            controls
            preload="none"
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          >
            <source src={file.preview} type="video/mp4" />
            {/* <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            /> */}
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            alt=""
            src={file.preview}
            style={img}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
            width={1080}
            height={1080}
          />
        )}
      </div>
    </div>
  ));

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    files.forEach((file: any) => {
      formData.append("file", file);
    });
    const res = await uploadPromotions(formData);
    setLoading(false);
    // if (res.status) {
    //   Swal.fire({
    //     title: "Success",
    //     text: "Promotion uploaded successfully",
    //     icon: "success",
    //   });
    // }
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="container mt-10 w-full h-full flex flex-col justify-start gap-4">
      <div>
        <div
          {...getRootProps({
            id: "PHOTOS",
            className:
              "dropzone border-2 border-dashed border-active_dark/60 px-6 py-4 w-full h-40 rounded-xl flex justify-center items-center",
          })}
        >
          <input {...getInputProps()} />
          <p className="font-semibold text-lg text-primary_light ">
            Drag & drop some files here, or Browse files
          </p>
        </div>
        <p className="text-xs mt-2 font-bold">
          {mediaType === "PHOTOS"
            ? "Image size should be 820px x 400px"
            : "Video size should be less than 2MB."}
        </p>
        {thumbs.length > 0 && <aside style={thumbsContainer}>{thumbs}</aside>}
      </div>
      <button
        onClick={handleUpload}
        className="bg-active_dark text-white py-2 px-6 w-full rounded-full"
      >
        Upload
      </button>
    </section>
  );
}
