"use client";
import { addBlogCategory } from "@/server-actions/addBlogCategory";
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
  data: {
    b_c_id: number | null;
    categoryName: string;
    description: string;
  };
};

const CategoryModal = ({ isOpen, onOpen, onOpenChange, data }: Props) => {
  const router = useRouter();

  const [formData, setFormData] = useState<Props["data"]>({
    b_c_id: null,
    categoryName: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await addBlogCategory(formData);
    setLoading(false);
    console.log(res);
    if (res.status) {
      router.refresh();
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setFormData({
      b_c_id: null,
      categoryName: "",
      description: "",
    });
  };

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    if (data.b_c_id) {
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
                Add Category
              </ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody>
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
                      name="categoryName"
                      value={formData.categoryName}
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
                    {loading ? "Please wait..." : "Add"}
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
