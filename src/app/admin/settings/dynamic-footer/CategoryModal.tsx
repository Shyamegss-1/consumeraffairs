"use client";
import { CategoryOptions } from "@/app/business/add-business/CategoryOptions";
import EditorComponent from "@/components/rich-text-editor/CKEEditor";
import { convertToBase64 } from "@/lib/Hooks";
import { addBusinessCategory } from "@/server-actions/Admin/BusinessCategory";
import { handleCreateCategoryFooter } from "@/server-actions/Admin/Footer";

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
import React, {
  Dispatch,
  FormEvent,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  data: {
    id: string | null;
    category: string;
    content: string;
    status: boolean;
  };
  // setActiveRowData: Dispatch<
  //   SetStateAction<{
  //     id: null;
  //     category: string;
  //     content: string;
  //     status: boolean;
  //   }>
  // >;
};

const CategoryModal = ({
  isOpen,
  onOpen,
  onOpenChange,
  data,
  // setActiveRowData,
}: Props) => {
  const router = useRouter();
  const [options, setOptins] = useState<any[]>([]);
  const [formData, setFormData] = useState<Props["data"]>({
    id: null,
    category: "",
    content: "",
    status: true,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await handleCreateCategoryFooter(formData);
    setLoading(false);
    if (res.status) {
      router.refresh();
      toast.success(res.message);
      // setActiveRowData({
      //   id: null,
      //   category: "",
      //   content: "",
      //   status: true,
      // });
    } else {
      toast.error(res.message);
    }
    setFormData({
      id: null,
      category: "",
      content: "",
      status: true,
    });
  };

  useEffect(() => {
    if (data.id) {
      setFormData(data);
    }
    const options = async () => {
      let res = await CategoryOptions();
      setOptins(res);
    };
    options();
  }, [data]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        size="5xl"
        onOpenChange={onOpenChange}
        isDismissable={false}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {formData.id ? "Update" : "Add"} Category Footer
              </ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <div className="mt-2">
                    <label
                      className="text-sm font-semibold mb-2"
                      htmlFor="category-footer"
                    >
                      Catagory
                    </label>
                    <select
                      name="category"
                      className="form-control"
                      value={formData.category ? formData.category : ""}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                    >
                      <option value="">Select Category</option>
                      {options?.map((item, index) => (
                        <option key={index} value={item.cid}>
                          {item.category_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-2">
                    <label
                      className="text-sm font-semibold mb-2"
                      htmlFor="category-footer"
                    >
                      Content
                    </label>
                    <EditorComponent
                      data={formData.content}
                      id={"category-footer"}
                      name={"content"}
                      onChange={(content: any) => {
                        setFormData({
                          ...formData,
                          content: content,
                        });
                      }}
                    />
                  </div>
                  <div className="mt-2">
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
                      setFormData({
                        id: null,
                        category: "",
                        content: "",
                        status: true,
                      });
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
                      : formData.id
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
