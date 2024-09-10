import React, { PropsWithChildren } from "react";
import TextButton from "@/components/atoms/button/TextButton";
import SearchForm from "@/components/organisms/SearchForm";
import styles from "./index.module.css";

interface Props {
  buttonText: string;
}

const HomeLayout = ({ children, buttonText }: PropsWithChildren<Props>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.actionArea}>
        <TextButton>{buttonText}</TextButton>
      </div>
      <SearchForm />
    </div>
  );
};

export default HomeLayout;
