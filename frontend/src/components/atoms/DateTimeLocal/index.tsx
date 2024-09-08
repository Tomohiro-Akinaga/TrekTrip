"use client";

import React, { ComponentPropsWithRef, PropsWithChildren } from "react";

interface Props extends ComponentPropsWithRef<"input"> {
  setDateTime: (value: string) => void;
}

const DateTimeLocal = ({ children, setDateTime }: PropsWithChildren<Props>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(e.target.value);
  };

  const now = new Date();

  // UTCベースでの日時取得
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const day = String(now.getUTCDate()).padStart(2, "0");
  const hours = String(now.getUTCHours() + 9).padStart(2, "0"); // UTCに9時間を加算してJSTに変換
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");

  const defaultValue = `${year}-${month}-${day}T${hours}:${minutes}`;

  return (
    <label>
      {children}
      <input
        type="datetime-local"
        onChange={handleChange}
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default DateTimeLocal;
