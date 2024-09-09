import React, { PropsWithChildren } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface Props {}

const Icon = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default Icon;
