"use client";
import { changeBusinessPassword } from "@/server-actions/businessRegister";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {};

const ChangePasswordForm = (props: Props) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [claimUrl, setClaimUrl] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const id = searchParams?.get("id") as string | null;
    const _claimUrl = searchParams?.get('claimUrl') as string | null;
    setClaimUrl(_claimUrl);
    setUserId(id);
  }, [searchParams]);

  const handleChangePassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password") as string;
    const cpassword = formData.get("confirm_password") as string;

    if (password !== cpassword) {
      return toast.error("Password and Confirm Password do not match");
    }

    if (userId) {
      const res = await changeBusinessPassword({
        password,
        cpassword,
        userId,
      },claimUrl);
      if (res.status) {
        toast.success("Password changed successfully", {
          id: toastId,
        });
        router.push("/business/login");
      } else {
        toast.error(res.message, {
          id: toastId,
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleChangePassword}
      className="horizontal-form mt-4"
      method="POST"
    >
      <div className="form-group mb-4" style={{ position: "relative" }}>
        <label htmlFor="new_password">New password</label>
        <input
          type="password"
          name="password"
          className="form-control input-lg"
          id="new_password"
          required={true}
          aria-autocomplete="list"
        />
      </div>
      <div className="form-group" style={{ position: "relative" }}>
        <label htmlFor="confirm_password">Confirm new password</label>
        <input
          type="password"
          name="confirm_password"
          className="form-control input-lg"
          id="confirm_password"
          required={true}
        />
      </div>
      <button
        type="submit"
        className="bg-primary_light py-2 mt-4 w-full rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default ChangePasswordForm;
