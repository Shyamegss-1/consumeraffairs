"use client";
import React, { ReactNode, useEffect } from "react";
import "./Module.css";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

const InfiniteCarousel = (props: Props) => {
  useEffect(() => {
    var copy = document
      .querySelector(".logos-slide")
      ?.cloneNode(true) as HTMLElement;
    document.querySelector(".logos")?.appendChild(copy);
  },[]);
  return (
    <div className="logos">
      <div className="logos-slide">
        {props.children}
      </div>
      {/* <div className="logos-slide">
        {props.children}
      </div> */}
    </div>
  );
};

export default InfiniteCarousel;
