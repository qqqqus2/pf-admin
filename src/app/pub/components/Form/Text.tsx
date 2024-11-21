import React from "react";

export interface TextProps {
  disabled?: boolean;
  className?: string;
}

export default function Text({
  disabled = false,
  className,
  ...props
}: TextProps) {
  return (
    <div
      className={`form-text${disabled ? " disabled" : ""} ${
        className ? className : ""
      }`}
    >
      <textarea disabled={disabled} {...props} />
    </div>
  );
}
