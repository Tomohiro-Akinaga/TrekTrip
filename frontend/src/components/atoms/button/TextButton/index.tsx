import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import style from "./index.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props extends ComponentPropsWithoutRef<"button"> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const TextButton = ({
  children,
  onClick,
  startIcon,
  endIcon,
}: PropsWithChildren<Props>) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      className={style.button}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};

export default TextButton;
