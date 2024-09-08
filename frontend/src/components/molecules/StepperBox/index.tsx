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
  steps: any;
}

const StepperBox = ({ children, steps }: PropsWithChildren<Props>) => {
  const StepIconComponent = (i: any) => {
    const isFirstStep = i === 0;
    const isLastStep = i === steps.length - 1;
    return (
      <span className={styles.stepIcon}>
        {isFirstStep ? "発" : isLastStep ? "着" : ""}
      </span>
    );
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical" connector={null}>
        {/* vとiの型定義を直す */}
        {steps.map((v: any, i: number) => (
          <Step key={i} active>
            <StepLabel
              StepIconComponent={() => StepIconComponent(i)}
              style={{ display: "flex", gap: "10px" }}
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
