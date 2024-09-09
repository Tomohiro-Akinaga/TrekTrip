import React, { PropsWithChildren } from "react";

interface Props {}

const SummaryBox = ({ children }: PropsWithChildren<Props>) => {
  return <div>{children}</div>;
};

export default SummaryBox;