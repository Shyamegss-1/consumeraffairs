"use client";
import { addBlogCategory } from "@/server-actions/addBlogCategory";
import { changePassword } from "@/server-actions/Admin/Users";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { useRouter } from "next/navigation";
import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  data: number;
};

const ChangePasswordModal = ({ isOpen, onOpen, onOpenChange, data }: Props) => {
  const router = useRouter();

  const [formData, setFormData] = useState<{
    id: number | null;
    password: string;
    confirmPassword: string;
  }>({
    id: null,
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await changePassword(formData);
    setLoading(false);
    console.log(res);
    if (res.status) {
      router.refresh();
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setFormData({
      id: null,
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    if (data) {
      setFormData({
        id: data,
        password: "",
        confirmPassword: "",
      });
    }
  }, [data]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Change Password
              </ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <div className="mt-2">
                    <label className="text-sm font-semibold" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      id="password"
                      required={true}
                      name="password"
                      value={formData.password}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="text-sm font-semibold"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      setFormData({
                        password: "",
                        id: null,
                        confirmPassword: "",
                      });
                    }}
                  >
                    Close
                  </button>
                  <button
                    disabled={loading}
                    className="ring-active_dark ring-2 text-active_dark_dark ml-4 rounded-md p-2 px-4 hover:bg-active_dark hover:text-white font-semibold"
                  >
                    {loading ? "Please wait..." : "Submit"}
                  </button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;
