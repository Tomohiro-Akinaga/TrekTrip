"use client";

import React, {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useState,
  useRef,
} from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import getJST from "@/utils/getJST";

interface Props {
  onChange: (date: Dayjs | null) => void;
}

const SelectDateTime = ({ onChange }: PropsWithChildren<Props>) => {
  const defaultValue = getJST();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          label="日時"
          defaultValue={dayjs(defaultValue)}
          onChange={onChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default SelectDateTime;
