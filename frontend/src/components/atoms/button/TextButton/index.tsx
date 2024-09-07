"use client";

import React, { PropsWithChildren } from "react";
import parseHTML from "@/utils/parseHTML";

interface Props {}

const TextButton = ({ children }: PropsWithChildren<Props>) => {
  const handlClick = async () => {
    const html = await fetch("/api/scrape", {
      method: "POST",
      body: JSON.stringify({ departure: "東京駅", arrival: "大阪駅" }),
    });

    const json = await html.json();
    console.log(json);

    const text = parseHTML(json.html as any);
    console.log(text);
  };
  return <div onClick={handlClick}>{children}</div>;
};

export default TextButton;
