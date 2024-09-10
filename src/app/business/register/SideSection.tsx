import Image from "next/image";
import React from "react";

type Props = {};

const SideSection: React.FC = (props: Props) => {
  return <div className="h-full flex justify-center items-center">
    <Image src={'/signup-banner.png'} height={300} width={300} alt="sideimage"/>
  </div>;
};

export default SideSection;
