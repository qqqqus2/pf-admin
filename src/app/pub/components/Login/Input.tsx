import React from "react";

export interface InputProps {
  icon?: "id" | "pw";
  btn?: string;
  type?: "text" | "number" | "email" | "password";
  disabled?: boolean;
  error?: boolean;
  count?: boolean;
  className?: string;
}

export default function LoginInput({
  icon,
  btn,
  count = false,
  type = "text",
  disabled = false,
  error = false,
  className,
  ...props
}: InputProps) {
  return (
    <div
      className={`login-input${error ? " error" : ""}${
        icon ? ` icon-${icon}` : ""
      }${disabled ? " disabled" : ""} ${className ? className : ""}`}
    >
      <div className="inner">
        <input type={type} disabled={disabled} {...props} />
        {btn && (
          <button type="button" className="btn-evt" disabled={disabled}>
            {btn}
          </button>
        )}
        {count && (
          <div className="count">
            <span>09:33</span>
            <button className="btn-reset" aria-label="reset"></button>
          </div>
        )}
      </div>
    </div>
  );
}
