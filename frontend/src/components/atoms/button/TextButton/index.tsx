import React, { PropsWithChildren } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface Props {}

const TextButton = ({ children }: PropsWithChildren<Props>) => {
  return <Button variant="contained">{children}</Button>;
};

export default TextButton;
