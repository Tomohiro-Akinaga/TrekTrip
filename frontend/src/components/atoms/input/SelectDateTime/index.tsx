"use client";

import React, { ComponentPropsWithRef, PropsWithChildren } from "react";
import getJST from "@/utils/getJST";

interface Props extends ComponentPropsWithRef<"input"> {
  setDateTime: (value: string) => void;
}

const SelectDateTime = ({
  children,
  setDateTime,
}: PropsWithChildren<Props>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(e.target.value);
  };

  const defaultValue = getJST();

  return (
    <label>
      {children}
      <input
        type="datetime-local"
        onChange={handleChange}
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default SelectDateTime;
