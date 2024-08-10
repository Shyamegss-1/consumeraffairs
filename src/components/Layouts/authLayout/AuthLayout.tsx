import React, { ReactElement, ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="bnr ca-hide-only-mobile ca-bg-pttrn-hxgn ca-bg-pttrn-hxgn--bttm-lft">
        <h1 className="bnr__ttl">Make Big Purchases No Big Deal</h1>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
