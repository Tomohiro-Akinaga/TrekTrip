import React, { PropsWithChildren } from "react";
import TextButton from "@/components/atoms/button/TextButton";
import SearchForm from "@/components/organisms/SearchForm";
import styles from "./index.module.css";

interface Props {
  buttonText: string;
  startIcon: React.ReactNode;
}

const HomeLayout = ({
  children,
  buttonText,
  startIcon,
}: PropsWithChildren<Props>) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.actionArea}>
        <TextButton startIcon={startIcon}>{buttonText}</TextButton>
      </div>
      <SearchForm />
    </div>
  );
};

export default HomeLayout;
