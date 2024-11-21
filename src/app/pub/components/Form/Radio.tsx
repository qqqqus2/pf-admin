import React, { ReactElement } from "react";

export interface RadioProps {
  size?: "s";
  name: string;
  label?: string;
  className?: string;
  children?: ReactElement;
}

export default function Radio({
  size,
  name,
  label,
  className,
  children,
  ...props
}: RadioProps) {
  return (
    <label
      className={`form-radio${size ? " size-s" : ""} ${
        className ? className : ""
      }`}
    >
      <input type="radio" name={name} className="hidden" {...props} />
      <span className="icon"></span>
      {label && <span className="label">{label}</span>}
      {children}
    </label>
  );
}
