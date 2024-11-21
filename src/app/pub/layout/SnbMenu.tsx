"use client";

import React, { ReactNode, useState } from "react";
import IcCate from "@/assets/icons/sidebar/ico_cate_arrow.svg";

export interface props {
  menu: {
    icon: ReactNode;
    tit: string;
    sub: { name: string }[];
  }[];
}

export default function SnbMenu({ menu }: props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className={`menu-item ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="menu-item-icon">{menu.icon}</span>
        <span className="menu-item-tit">{menu.tit}</span>
        {menu.sub ? <IcCate className="menu-item-arrow" /> : ""}
      </button>

      {menu.sub && (
        <div className="sub-menu">
          <div className="overflow-hidden">
            <ul>
              {menu.sub.map((s) => (
                <li key={s.name}>
                  {/* active class: selected */}
                  <button className="sub-item">{s.name}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}
