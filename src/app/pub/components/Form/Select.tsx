"use client";

import React, { useState } from "react";
import {
  Field,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import IcArrowDown from "@/assets/icons/ico_arrow_down.svg";

export interface SelectProps {
  size?: "m" | "l";
  defaultSelect?: number;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className: string;
}

const data = [
  { id: "A", name: "선택A", dis: false },
  { id: "B", name: "선택B", dis: false },
  { id: "C", name: "선택C - dis", dis: true },
  { id: "D", name: "선택D", dis: false },
  { id: "F", name: "선택F선택F선택F선택F선택F", dis: false },
];

export default function SelectBasic({
  size,
  defaultSelect,
  placeholder = "선택하세요",
  disabled = false,
  error = false,
  className,
}: SelectProps) {
  const [selected, setSelected] = useState(defaultSelect ? data[1] : null);

  return (
    <Field
      disabled={disabled}
      as="div"
      className={`form-select${size ? ` size-${size}` : ""} ${
        className ? className : ""
      }`}
    >
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton className={`select-btn ${error ? " error" : ""}`}>
          {selected ? (
            <p className="truncate">{selected.name}</p>
          ) : (
            <p className="placeholder">{placeholder}</p>
          )}
          <IcArrowDown className="select-arrow" />
        </ListboxButton>

        <ListboxOptions anchor="bottom" className="select-options">
          {data.map((t, i) => (
            <ListboxOption key={`${i}-${t.id}`} value={t} disabled={t.dis}>
              <p className="truncate">{t.name}</p>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
      {error && <p className="form-error">다시 선택해주세요</p>}
    </Field>
  );
}
