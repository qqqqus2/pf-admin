import React from "react";

export interface FlagProps {
  type: "gray" | "blue" | "red" | "black";
  size?: "s" | "m";
  label: string;
  tip?: string;
  className?: string;
}

export default function Flag({
  type,
  size = "m",
  label,
  tip,
  className,
}: FlagProps) {
  return (
    <span
      data-tooltip-id="tooltip"
      data-tooltip-content={tip}
      className={`flag flag-${type} size-${size} ${className ? className : ""}`}
    >
      {label}
    </span>
  );
}
