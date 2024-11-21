"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";

export interface DateProps {
  disabled?: boolean;
  className: string;
}

export default function FormTimeRange({
  disabled,
  className,
  ...props
}: DateProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className={`form-date-range time ${className ? className : ""}`}>
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={(date) => {
          if (date !== null) {
            setStartDate(date);
          }
        }}
        disabled={disabled}
        wrapperClassName="form-date time"
        enableTabLoop={false}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="aa hh:mm"
        {...props}
      />
      <p>~</p>
      <DatePicker
        locale={ko}
        selected={endDate}
        onChange={(date) => {
          if (date !== null) {
            setEndDate(date);
          }
        }}
        disabled={disabled}
        wrapperClassName="form-date time"
        enableTabLoop={false}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="aa hh:mm"
        {...props}
      />
    </div>
  );
}
