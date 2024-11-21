"use client";

import React, { useState } from "react";

const groupData = [
  { id: "all", text: "전체" },
  { id: "today", text: "오늘" },
  { id: "week", text: "일주일" },
  { id: "6mth", text: "6개월" },
];
export interface GroupProps {
  className?: string;
}

export default function Button({ className }: GroupProps) {
  const [selected, setSelected] = useState(groupData[0].id);

  return (
    <div className={`button-group ${className ? className : ""}`}>
      {groupData.map((item) => (
        <button
          key={item.id}
          className={`group-item${item.id === selected ? " selected" : ""}`}
          onClick={() => setSelected(item.id)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}
