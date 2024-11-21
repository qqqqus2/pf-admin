import React from "react";
import IcSearch from "@/assets/icons/ico_search.svg";

export interface InputProps {
  size?: "m" | "l";
  disabled?: boolean;
  className?: string;
}

export default function InputSearch({
  size,
  disabled = false,
  className,
  ...props
}: InputProps) {
  return (
    <div
      className={`form-input${disabled ? " disabled" : ""}${
        size ? ` size-${size}` : ""
      } ${className ? className : ""}`}
    >
      <div className="inner gap-2">
        <input type="text" disabled={disabled} {...props} />
        <button className="btn-icon" aria-label="search">
          <IcSearch />
        </button>
      </div>
    </div>
  );
}
