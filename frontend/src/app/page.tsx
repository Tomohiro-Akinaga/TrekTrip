"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import DateTimeLocal from "../components/atoms/input/DateTimeLocal";
import parseHTML from "@/utils/parseHTML";
import parseISODate from "@/utils/parseISODate";
import getJST from "@/utils/getJST";

export default function Home() {
  const initialDateTime = getJST();
  const [dataTime, setDataTime] = useState<string>(initialDateTime);

  const handleClick = async () => {
    const { year, month, day, hour, minutes } = parseISODate(dataTime);

    const html = await fetch("/api/scrape", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        departure: "東京駅",
        arrival: "大阪駅",
        year: year,
        month: month,
        day: day,
        hour: hour,
        minutes: minutes,
      }),
    });

    const json = await html.json();
    const text = parseHTML(json.html);
    console.log(text);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <DateTimeLocal type="datetime-local" setDateTime={setDataTime} />
        <button onClick={handleClick}>乗り換え案内情報を取得</button>
        <a href="/api/auth/login">Login</a>
        <a href="/api/auth/logout">Logout</a>
      </main>
    </div>
  );
}
