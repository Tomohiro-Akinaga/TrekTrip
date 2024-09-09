"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import SelectDateTime from "../components/atoms/input/SelectDateTime";
import parseHTML from "@/utils/parseHTML";
import parseISODate from "@/utils/parseISODate";
import getJST from "@/utils/getJST";
import TypeText from "@/components/atoms/input/TypeText";
import StepperBox from "@/components/molecules/StepperBox";

export default function Home() {
  const initialDateTime = getJST();
  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  const [dataTime, setDataTime] = useState<string>(initialDateTime);
  const [steps, setSteps] = useState<any>([]);

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
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TypeText onChange={handleChangeDeparture}>出発駅: </TypeText>
        <TypeText onChange={handleChangeArrival}>到着駅: </TypeText>
        <SelectDateTime onChange={handleChangeDateTime}>日時: </SelectDateTime>
        <button onClick={handleClick}>乗り換え案内情報を取得</button>
        <StepperBox steps={steps} />
      </main>
    </div>
  );
}
