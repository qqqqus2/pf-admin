import React, { ReactElement } from "react";

export interface ButtonProps {
  type: "green" | "blue" | "gray" | "black" | "outline";
  size: "s" | "m" | "l";
  className: string;
  children: ReactElement;
}

export default function Button({
  type,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn btn-${type} btn-${size} ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
