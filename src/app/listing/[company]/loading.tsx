import UserLayout from "@/components/Layouts/userLayout/UserLayout";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="w-full min-h-[90vh] flex justify-center items-center">
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default loading;
