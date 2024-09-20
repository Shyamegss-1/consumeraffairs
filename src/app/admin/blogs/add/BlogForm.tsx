import { Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";

type Props = {};

const BlogForm = (props: Props) => {
  return (
    <div className="">
      <form action="">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 w-full">
            <Input
              type="text"
              label="Title"
              variant="bordered"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Enter Title"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <Input
              type="file"
              label="Upload Image"
              variant="bordered"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Enter your email"
              description={"Image Size (1200X400) px | max 3MB"}
            />
          </div>
          <div className="col-span-3 w-full">
            <Input
              type="text"
              label="Image Alt"
              variant="bordered"
              color="primary"
              classNames={{ label: ["text-gray-700, font-medium"] }}
              labelPlacement={"outside"}
              placeholder="Image Alt"
              description={null}
            />
          </div>
          <div className="col-span-3 w-full">
            <div className="w-full flex flex-col gap-4">
        
                <div
                  key={"borderes"}
                  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                >
                  <Select
                    variant={"bordered"}
                    label="Select an animal"
                    className="max-w-xs"
                  >
                    
                      <SelectItem key={"jghfghf"}>{"jgghdfdg"}</SelectItem>
           
                  </Select>
                  
                </div>
         
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
