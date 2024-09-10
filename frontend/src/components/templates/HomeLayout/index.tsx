import React, { PropsWithChildren } from "react";
import TextButton from "@/components/atoms/button/TextButton";
import SearchForm from "@/components/organisms/SearchForm";

interface Props {}

const HomeLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <TextButton></TextButton>
      <SearchForm />
    </div>
  );
};

export default HomeLayout;
