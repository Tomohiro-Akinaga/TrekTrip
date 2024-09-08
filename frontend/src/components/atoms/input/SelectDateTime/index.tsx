"use client";

import React, { ComponentPropsWithRef, PropsWithChildren } from "react";
import getJST from "@/utils/getJST";

interface Props extends ComponentPropsWithRef<"input"> {}

const SelectDateTime = ({ children, onChange }: PropsWithChildren<Props>) => {
  const defaultValue = getJST();

  return (
    <label>
      {children}
      <input
        type="datetime-local"
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default SelectDateTime;
