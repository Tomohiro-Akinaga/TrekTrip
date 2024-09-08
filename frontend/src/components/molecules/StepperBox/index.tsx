import React, { PropsWithChildren } from "react";
import styles from "./index.module.css";
import {
  Box,
  Step,
  StepConnector,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

interface Props {
  steps: { label: string; description: string }[];
}

const StepperBox = ({ children, steps }: PropsWithChildren<Props>) => {
  const StepIconComponent = () => {
    return <span className={styles.stepIcon}></span>;
  };
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical" connector={null}>
        {steps.map((step, index) => (
          <Step key={step.label} active>
            <StepLabel StepIconComponent={StepIconComponent}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperBox;
