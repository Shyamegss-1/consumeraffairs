import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  description: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="rounded-xl border border-stroke bg-white px-6 py-4 shadow-md">
      <div className="flex flex-col justify-start items-start gap-2 md:gap-4">
        <h4 className="text-xl font-semibold text-active_dark">{title}</h4>
        <p className="text-sm font-medium text-gray-400">{description}</p>
        <hr className="w-1/4 h-1 bg-active_dark" />
        <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-4 mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
