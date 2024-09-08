"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import SelectDateTime from "../components/atoms/input/SelectDateTime";
import parseHTML from "@/utils/parseHTML";
import parseISODate from "@/utils/parseISODate";
import getJST from "@/utils/getJST";
import TypeText from "@/components/atoms/input/TypeText";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import { StepIcon } from "@mui/material";

export default function Home() {
  const initialDateTime = getJST();
  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  const [dataTime, setDataTime] = useState<string>(initialDateTime);

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
    console.log(text);
  };

  const steps = [
    {
      label: "Select campaign settings",
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

  const CustomStepIcon = () => {
    return (
      <div
        style={{
          width: "24px",
          height: "24px",
          backgroundColor: "red",
          borderRadius: "50%",
        }}
      ></div>
    ); // 空のアイコンに変更
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TypeText onChange={handleChangeDeparture}>出発駅: </TypeText>
        <TypeText onChange={handleChangeArrival}>到着駅: </TypeText>
        <SelectDateTime onChange={handleChangeDateTime}>日時: </SelectDateTime>
        <button onClick={handleClick}>乗り換え案内情報を取得</button>

        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={4} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </main>
    </div>
  );
}
