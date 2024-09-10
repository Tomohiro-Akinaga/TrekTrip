"use client";

import React, {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useState,
} from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import getJST from "@/utils/getJST";

interface Props extends ComponentPropsWithoutRef<"input"> {}

const SelectDateTime = ({}: PropsWithChildren<Props>) => {
  const defaultValue = getJST();

  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (e: any) => {
    const { $y, $M, $D, $H, $m } = e;
    const year = $y;
    const month = $M + 1 > 9 ? $M + 1 : `0${$M + 1}`;
    const day = $D > 9 ? $D : `0${$D}`;
    const hour = $H > 9 ? $H : `0${$H}`;
    const minutes = $m > 10 ? $m : `0${$m}`;
    setValue(`${year}-${month}-${day}T${hour}:${minutes}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          label="Basic date time picker"
          defaultValue={dayjs(defaultValue)}
          onChange={handleChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default SelectDateTime;
