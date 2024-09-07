"use client";

import React, { PropsWithChildren } from "react";
import parseHTML from "@/utils/parseHTML";

interface Props {}

const TextButton = ({ children }: PropsWithChildren<Props>) => {
  const handlClick = async () => {
    const html = await fetch("/api/scrape", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        departure: "東京駅",
        arrival: "大阪駅",
        year: "2024",
        month: "12",
        day: "31",
        hour: "12",
        minutes: "10",
        seconds: "03",
      }),
    });

    const json = await html.json();
    const text = parseHTML(json.html);
    console.log(text);
  };
  return <div onClick={handlClick}>{children}</div>;
};

export default TextButton;
