import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface Props extends ComponentPropsWithoutRef<"button"> {}

const TextButton = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};

export default TextButton;
