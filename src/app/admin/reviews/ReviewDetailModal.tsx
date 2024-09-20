"use client";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { Avatar, Tab, Tabs } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BiEdit } from "react-icons/bi";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  data: any;
};

const ReviewDetailModal = ({ isOpen, onOpen, onOpenChange, data }: Props) => {
  const router = useRouter();

  console.log(data, "currentData");

  return (
    <>
      <Modal
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Review Details
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-12 mb-4 gap-4">
                  <div className="col-span-5 border shadow-md p-4 rounded-xl">
                    <div className="flex flex-col justify-center items-center w-full h-full gap-4">
                      <Avatar
                        isBordered
                        color="primary"
                        className="w-24 h-24 text-large"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      />
                      <h3 className="text-lg font-medium">Shyam</h3>
                    </div>
                  </div>
                  <div className="col-span-7 h-full">
                    <div className="flex w-full flex-col h-full">
                      <Tabs
                        aria-label="Dynamic tabs"
                        color="primary"
                        variant="bordered"
                        items={[
                          {
                            id: "user",
                            label: "User Details",
                          },
                          {
                            id: "review",
                            label: "Review",
                          },
                          {
                            id: "company",
                            label: "Company",
                          },
                        ]}
                      >
                        {(item) => (
                          <Tab key={item.id} title={item.label}>
                            {/* <CardBody>{item.content}</CardBody> */}
                            <div className="border shadow-md p-4 rounded-xl h-full min-h-96">
                              <h3 className="text-xl font-medium">
                                {item.label}
                              </h3>
                              <table className="mt-4">
                                {item.id === "user" && (
                                  <tbody>
                                    <tr>
                                      <th className="text-start py-2">
                                        Full Name
                                      </th>
                                      <td className="text-start py-2 pl-4">
                                        {`${data[item.id].firstName} ${
                                          data[item.id].lastName
                                        }`}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="text-start py-2">Phone</th>
                                      <td className="text-start py-2 pl-4">
                                        {`${data[item.id].mobile_number}`}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="text-start py-2">Email</th>
                                      <td className="text-start py-2 pl-4">
                                        {`${data[item.id].email}`}
                                      </td>
                                    </tr>
                                  </tbody>
                                )}
                                {item.id === "company" && (
                                  <tbody>
                                    <tr>
                                      <th className="text-start py-2">
                                        Company Name
                                      </th>
                                      <td className="text-start py-2 pl-4">
                                        {`${data[item.id].companyName}`}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="text-start py-2">Phone</th>
                                      <td className="text-start py-2 pl-4">
                                        {`${data[item.id].companyNumber}`}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="text-start py-2">Email</th>
                                      <td className="text-start py-2 pl-4">
                                        {`${data[item.id].email}`}
                                      </td>
                                    </tr>
                                  </tbody>
                                )}
                                {item.id === "review" && (
                                  <>
                                    <tbody>
                                      <tr>
                                        <th className="text-start py-2">
                                          Review Title
                                        </th>
                                        <td className="text-start py-2 pl-4">
                                          {`${data?.review_title}`}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="text-start py-2">
                                          Review date
                                        </th>
                                        <td className="text-start py-2 pl-4">
                                          {`${data?.review_date.getDate()}/${data?.review_date.getMonth()}/${data?.review_date.getFullYear()}`}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="text-start py-2">
                                          Review Rating
                                        </th>
                                        <td className="text-start py-2 pl-4">
                                          {`${data?.review_rating}`}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="text-start py-2">
                                          Review Comment
                                        </th>
                                        <td className="text-start py-2 pl-4">
                                          {`${data?.review_comment}`}
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/* <button className="px-4 py-2 bg-primary-500 rounded-md mt-4">
                                      <BiEdit className="text-white font-semibold" />
                                    </button> */}
                                  </>
                                )}
                              </table>
                              {/* {item.content} */}
                            </div>
                          </Tab>
                        )}
                      </Tabs>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReviewDetailModal;
