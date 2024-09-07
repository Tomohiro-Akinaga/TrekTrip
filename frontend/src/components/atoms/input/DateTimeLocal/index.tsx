"use client";

import React, { ComponentPropsWithRef, PropsWithChildren } from "react";

interface Props extends ComponentPropsWithRef<"input"> {
  setDateTimeLocal: (value: string) => void;
}

const DateTimeLocal = ({
  children,
  setDateTimeLocal,
}: PropsWithChildren<Props>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateTimeLocal(e.target.value);
  };

  return (
    <label>
      {children}
      <input type="datetime-local" onChange={handleChange} />
    </label>
  );
};

export default DateTimeLocal;
