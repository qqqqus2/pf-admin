"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";

export interface DateProps {
  size?: "s" | "m";
  time?: boolean;
  className: string;
}

export default function FormDateRange({
  size = "m",
  time,
  className,
  ...props
}: DateProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div
      className={`form-date-range${size === "s" ? " size-s" : ""} ${
        className ? className : ""
      }`}
    >
      <DatePicker
        dateFormat={time ? "YYYY-MM-dd  aa hh:mm" : "YYYY-MM-dd"}
        locale={ko}
        selected={startDate}
        onChange={(date) => {
          if (date !== null) {
            setStartDate(date);
          }
        }}
        wrapperClassName="form-date"
        enableTabLoop={false}
        showTimeSelect={time}
        {...props}
      />
      <p>~</p>
      <DatePicker
        dateFormat={time ? "YYYY-MM-dd  aa hh:mm" : "YYYY-MM-dd"}
        locale={ko}
        selected={endDate}
        onChange={(date) => {
          if (date !== null) {
            setEndDate(date);
          }
        }}
        wrapperClassName="form-date"
        enableTabLoop={false}
        showTimeSelect={time}
        {...props}
      />
    </div>
  );
}
