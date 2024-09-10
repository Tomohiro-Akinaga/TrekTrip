import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import style from "./index.module.css";
import Button from "@mui/material/Button";

interface Props extends ComponentPropsWithoutRef<"button"> {}

const TextButton = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <Button variant="contained" onClick={onClick} className={style.button}>
      {children}
    </Button>
  );
};

export default TextButton;
