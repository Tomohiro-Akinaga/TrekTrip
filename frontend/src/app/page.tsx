"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import SelectDateTime from "../components/atoms/input/SelectDateTime";
import parseHTML from "@/utils/parseHTML";
import parseISODate from "@/utils/parseISODate";
import getJST from "@/utils/getJST";
import TypeText from "@/components/atoms/input/TypeText";
import Icon from "@/components/atoms/Icon";
import StepperBox from "@/components/molecules/box/StepperBox";
import Header from "@/components/organisms/Header";
import HomePage from "@/components/pages";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  );
}
