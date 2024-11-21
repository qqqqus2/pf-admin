import React, { ReactElement } from "react";

export interface ButtonProps {
  type: "green" | "outline-gray" | "outline-green";
  className: string;
  children: ReactElement;
}

export default function LoginButton({
  type,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn btn-login-${type} ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
