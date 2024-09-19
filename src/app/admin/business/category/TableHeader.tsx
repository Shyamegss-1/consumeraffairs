"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import React from "react";
import { FaPlus } from "react-icons/fa";
import CategoryModal from "./CategoryModal";

type Props = {};

const TableHeader = (props: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="rounded-xl border bg-white px-6 py-4 shadow-md mb-4 flex justify-between items-center">
      <h3 className=" text-xl font-semibold">Business Categories</h3>
      <button
        onClick={onOpen}
        className="bg-active_dark text-white py-2 px-4 rounded-md inline-flex justify-center items-center gap-2"
      >
        <FaPlus /> Add Category
      </button>
      <CategoryModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        data={{
          cid: null,
          category_name: "",
          description: "",
          category_icon: "",
          popular: false,
          status:true
        }}
      />
    </div>
  );
};

export default TableHeader;
