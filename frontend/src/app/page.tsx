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

type TransiteType = {
  station: string;
  time: string;
  line: string;
  destination: string;
};

export default function Home() {
  const initialDateTime = getJST();
  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  const [dataTime, setDataTime] = useState<string>(initialDateTime);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [steps, setSteps] = useState<TransiteType[]>([]);

  const handleChangeDeparture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeparture(e.target.value);
  };
  const handleChangeArrival = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrival(e.target.value);
  };
  const handleChangeDateTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataTime(e.target.value);
  };

  const handleClick = async () => {
    setIsLoading(true);
    const { year, month, day, hour, minutes } = parseISODate(dataTime);

    const html = await fetch("/api/scrape", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        departure: departure,
        arrival: arrival,
        year: year,
        month: month,
        day: day,
        hour: hour,
        minutes: minutes,
      }),
    });

    const json = await html.json();
    const text = parseHTML(json.html);
    setSteps(text.transit);
    setIsLoading(false);
  };

  const TransiteBox = () => {
    if (isLoading) return <Icon />;
    return <StepperBox steps={steps} />;
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TypeText onChange={handleChangeDeparture}>出発駅: </TypeText>
        <TypeText onChange={handleChangeArrival}>到着駅: </TypeText>
        <SelectDateTime onChange={handleChangeDateTime}>日時: </SelectDateTime>
        <button onClick={handleClick}>乗り換え案内情報を取得</button>
        <TransiteBox />
      </main>
    </div>
  );
}
