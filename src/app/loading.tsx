import UserLayout from "@/components/Layouts/userLayout/UserLayout";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="relative min-h-[80vh]">
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default loading;
