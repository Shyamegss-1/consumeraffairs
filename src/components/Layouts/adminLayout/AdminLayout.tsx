import React, { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {children}
    </div>
  );
};

export default AdminLayout;
