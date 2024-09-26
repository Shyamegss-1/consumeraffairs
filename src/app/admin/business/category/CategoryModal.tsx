"use client";
import { convertToBase64 } from "@/lib/Hooks";
import { addBusinessCategory } from "@/server-actions/Admin/BusinessCategory";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Switch } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  data: {
    cid: number | null;
    category_name: string;
    category_icon: string;
    description: string;
    popular: boolean;
    status: boolean;
  };
};

const CategoryModal = ({ isOpen, onOpen, onOpenChange, data }: Props) => {
  const router = useRouter();

  const [formData, setFormData] = useState<Props["data"]>({
    cid: null,
    category_icon: "",
    category_name: "",
    description: "",
    popular: false,
    status: true,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await addBusinessCategory(formData);
    setLoading(false);
    console.log(res);
    if (res.status) {
      router.refresh();
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setFormData({
      cid: null,
      category_name: "",
      category_icon: "",
      description: "",
      popular: false,
      status: true,
    });
  };

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    if (data.cid) {
      setFormData(data);
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
                {formData.cid?"Update":"Add"} Category
              </ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <div className="mt-2">
                    <label
                      className="text-sm font-semibold"
                      htmlFor="category_icon"
                    >
                      Category Logo
                    </label>
                    <input
                      type="file"
                      className="form-control mt-1"
                      id="category_icon"
                      name="category_icon"
                      onChange={async (e: any) => {
                        let file = await convertToBase64(e.target.files[0]);
                        setFormData((prevFormData: any) => {
                          return {
                            ...prevFormData,
                            category_icon: file,
                          };
                        });
                      }}
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="text-sm font-semibold"
                      htmlFor="category_name"
                    >
                      Category Name
                    </label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      id="category_name"
                      required={true}
                      name="category_name"
                      value={formData.category_name}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="text-sm font-semibold"
                      htmlFor="category_description"
                    >
                      Category Description
                    </label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      id="category_description"
                      name="description"
                      value={formData.description}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="mt-2">
                    <Switch
                      className="inline-flex"
                      isSelected={formData.popular}
                      onChange={(e) => {
                        setFormData((prevFormData: any) => {
                          return {
                            ...prevFormData,
                            popular: e.target.checked,
                          };
                        });
                      }}
                    >
                      Popular Category
                    </Switch>
                    <Switch
                      className="inline-flex ml-4"
                      isSelected={formData.status}
                      onChange={(e) => {
                        setFormData((prevFormData: any) => {
                          return {
                            ...prevFormData,
                            status: e.target.checked,
                          };
                        });
                      }}
                    >
                      Status
                    </Switch>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                    }}
                  >
                    Close
                  </button>
                  <button
                    disabled={loading}
                    className="ring-active_dark ring-2 text-active_dark_dark ml-4 rounded-md p-2 px-4 hover:bg-active_dark hover:text-white font-semibold"
                  >
                    {loading
                      ? "Please wait..."
                      : formData.cid
                      ? "Update"
                      : "Add"}
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

export default CategoryModal;
