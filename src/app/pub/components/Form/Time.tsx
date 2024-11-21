"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";

export interface TimeProps {
  size?: "m";
}

export default function FormTime({ size, ...props }: TimeProps) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      locale={ko}
      selected={startDate}
      onChange={(date) => {
        if (date !== null) {
          setStartDate(date);
        }
      }}
      wrapperClassName={`form-date time${size ? " size-m" : ""}`}
      enableTabLoop={false}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="aa hh:mm"
      {...props}
    />
  );
}
