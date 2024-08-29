import React, { Suspense } from "react";
import "./Module.css";
import Image from "next/image";
import ChangePasswordForm from "./ChangePasswordForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto" style={{ marginTop: 40 }}>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="horizontal-container flex flex-col justify-center items-center gap-y-10">
            <div className="text-center">
              <Image
                alt="logo"
                src="/img/SoftWareHub-logo-1.png"
                width={200}
                height={300}
              />
            </div>
            <div className="horizontal-form-box mt-5">
              <div className="horizontal-info-container">
                <h2 className="horizontal-heading">Set your password</h2>
              </div>
              <Suspense fallback={<>Loading...</>}>
                <ChangePasswordForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
