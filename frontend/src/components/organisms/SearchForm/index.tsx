import React, { PropsWithChildren } from "react";

interface Props {}

const SearchForm = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div>
      {children}
      検索窓
    </div>
  );
};

export default SearchForm;
