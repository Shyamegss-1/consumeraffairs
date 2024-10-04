import UserLayout from "@/components/Layouts/userLayout/UserLayout";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <UserLayout>
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    </UserLayout>
  );
};

export default loading;
