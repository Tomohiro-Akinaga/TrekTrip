import React, { PropsWithChildren, useState } from "react";
import TypeText from "@/components/atoms/input/TypeText";
import styles from "./index.module.css";
import SelectDateTime from "@/components/molecules/SelectDateTime";
import TextButton from "@/components/atoms/button/TextButton";
import getJST from "@/utils/getJST";
import Icon from "@/components/atoms/Icon";
import StepperBox from "@/components/molecules/box/StepperBox";
import parseHTML from "@/utils/parseHTML";
import parseISODate from "@/utils/parseISODate";
import { Dayjs } from "dayjs";

interface Props {}

type TransiteType = {
  station: string;
  time: string;
  line: string;
  destination: string;
};

const SearchForm = ({ children }: PropsWithChildren<Props>) => {
  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  const [dataTime, setDataTime] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [steps, setSteps] = useState<TransiteType[]>([]);

  const handleChangeDeparture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeparture(e.target.value);
  };

  const handleChangeArrival = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrival(e.target.value);
  };

  const handleChangeDateTime = (value: Dayjs | null) => {
    const date = value?.format().slice(0, 16);
    setDataTime(date);
  };

  const handleClick = async () => {
    setIsLoading(true);
    const { year, month, day, hour, minutes } = parseISODate(dataTime || "");

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
    setSteps(text.transit);
    setIsLoading(false);
  };

  const TransiteBox = () => {
    if (isLoading) return <Icon />;
    return <StepperBox steps={steps} />;
  };

  return (
    <div className={styles.wrapper}>
      <TypeText onChange={handleChangeArrival}>出発</TypeText>
      <TypeText onChange={handleChangeDeparture}>到着</TypeText>
      <SelectDateTime onChange={handleChangeDateTime} />
      <TextButton onClick={handleClick}>検索</TextButton>
      <TransiteBox />
    </div>
  );
};

export default SearchForm;
