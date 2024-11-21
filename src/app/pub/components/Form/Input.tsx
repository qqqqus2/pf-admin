import React from "react";

export interface InputProps {
  size?: "m" | "l";
  type?: "text" | "number" | "email" | "password";
  disabled?: boolean;
  error?: string;
  className?: string;
}

export default function Input({
  size,
  type = "text",
  disabled = false,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div
      className={`form-input${error ? " error" : ""}${
        disabled ? " disabled" : ""
      }${size ? ` size-${size}` : ""} ${className ? className : ""}`}
    >
      <div className="inner">
        <input type={type} disabled={disabled} {...props} />
        <button className="btn-reset" aria-label="reset"></button>
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}
