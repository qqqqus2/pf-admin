"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";

export interface DateProps {
  size?: "m";
  time?: boolean;
}

export default function FormDate({ size, time, ...props }: DateProps) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      dateFormat={time ? "YYYY-MM-dd  aa hh:mm" : "YYYY-MM-dd"}
      locale={ko}
      onChange={(date) => {
        if (date !== null) {
          setStartDate(date);
        }
      }}
      wrapperClassName={`form-date${size ? " size-m" : ""}`}
      enableTabLoop={false}
      showTimeSelect={time}
      {...props}
    />
  );
}
