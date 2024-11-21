import React from "react";

export interface CheckProps {
  size?: "s";
  label?: string;
  className?: string;
}

export default function Checkbox({
  size,
  label,
  className,
  ...props
}: CheckProps) {
  return (
    <label
      className={`form-check${size ? " size-s" : ""} ${
        className ? className : ""
      }`}
    >
      <input type="checkbox" className="hidden" {...props} />
      <span className="icon"></span>
      {label && <span className="label">{label}</span>}
    </label>
  );
}
