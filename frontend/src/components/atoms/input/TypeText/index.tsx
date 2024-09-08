import React, { ComponentPropsWithRef, PropsWithChildren } from "react";

interface Props extends ComponentPropsWithRef<"input"> {}

const TypeText = ({ children, onChange }: PropsWithChildren<Props>) => {
  return (
    <label>
      {children}
      <input type="text" onChange={onChange} />
    </label>
  );
};

export default TypeText;
