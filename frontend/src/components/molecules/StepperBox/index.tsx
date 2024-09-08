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
  steps: { label: string; description: string }[];
}

const StepperBox = ({ children, steps }: PropsWithChildren<Props>) => {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={0} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} active>
            <StepLabel>{step.label}</StepLabel>
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
