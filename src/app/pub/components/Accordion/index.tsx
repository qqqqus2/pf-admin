"use client";

import React, { ReactElement, useState } from "react";
import IcArrowUp from "@/assets/icons/ico_arrow_up_acn.svg";

export interface AcnProps {
  open?: boolean;
  title: string;
  desc?: string;
  className?: string;
  children: ReactElement;
}

export default function Accordion({
  open = false,
  title,
  desc,
  className,
  children,
}: AcnProps) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div
      className={`accordion ${isOpen ? "open" : ""} ${
        className ? className : ""
      }`}
    >
      <button className="title-cell" onClick={() => setIsOpen(!isOpen)}>
        <p className="tit">{title}</p>
        {desc && <p className="desc">{desc}</p>}
        <IcArrowUp className="acn-arrow" />
      </button>
      <div className="acn-content">
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
