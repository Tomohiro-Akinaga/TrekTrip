import React, { PropsWithChildren } from "react";

interface Props {}

const HomeLayout = ({ children }: PropsWithChildren<Props>) => {
  return <div>{children}</div>;
};

export default HomeLayout;
