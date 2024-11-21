"use client";

import React, { useState, useRef } from "react";
export interface InputProps {
  label?: string;
  size?: "m" | "l";
  disabled?: boolean;
  className: string;
}

export default function FormFile({
  label = "파일선택",
  size = "m",
  disabled = false,
  className,
  ...props
}: InputProps) {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  return (
    <div className={`flex items-center gap-3 ${className ? className : ""}`}>
      <div
        className={`flex items-center h-10 px-3 bg-[#F4F5F8] border border-[#E2E8F0] rounded text-sm font-medium ${
          size === "m" ? "w-[12.25rem]" : "grow"
        }`}
      >
        <span className="text-muted">
          {file !== null ? file.name : "선택된 파일 없음"}
        </span>
      </div>
      <label className="btn btn-outline btn-m">
        <input
          ref={inputRef}
          type="file"
          hidden
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        {label}
      </label>
    </div>
  );
}
