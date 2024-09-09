import React, { PropsWithChildren } from "react";
import styles from "./index.module.css";
import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

interface Props {
  steps: {
    station: string;
    time: string;
    line: string;
    destination: string;
  }[];
}

const StepperBox = ({ steps }: PropsWithChildren<Props>) => {
  const StepIconComponent = (i: number) => {
    const step =
      i === 0 ? "firstStep" : i === steps.length - 1 ? "lastStep" : "";

    return (
      <span
        className={[styles.stepIcon, styles[`is-${step}`]].join(" ")}
      ></span>
    );
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical" connector={null}>
        {steps.map((v, i) => (
          <Step key={i} active>
            <StepLabel
              StepIconComponent={() => StepIconComponent(i)}
              className={styles.stepLabel}
            >
              <Typography>{v.station}</Typography>
              <Typography>{v.time}</Typography>
            </StepLabel>
            <StepContent>{v.line}</StepContent>
            <StepContent>{v.destination}</StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperBox;
