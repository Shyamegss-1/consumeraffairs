import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { ReactNode } from "react";

type Props = {
  btnLabel: ReactNode | string;
  children: any;
};

const ActionDropdowns = ({ btnLabel, children }: Props) => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="light">{btnLabel}</Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        {children}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ActionDropdowns;
