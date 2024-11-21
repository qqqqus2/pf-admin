"use client";

import React, { useState } from "react";

export interface ToggleProps {
  checked: boolean;
  label?: string[];
  className?: string;
}

export default function Toggle({
  checked = true,
  label,
  className,
  ...props
}: ToggleProps) {
  const [toggle, setToggle] = useState(checked);

  return (
    <label
      className={`toggle ${label ? "with-label" : ""} ${
        className ? className : ""
      }`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={toggle}
        {...props}
        onChange={() => setToggle((prev) => !prev)}
      />
      {label ? (
        <div
          className="toggle-btn"
          data-yes={label[0]}
          data-no={label[1]}
        ></div>
      ) : (
        <div className="toggle-btn"></div>
      )}
    </label>
  );
}
