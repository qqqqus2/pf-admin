"use client";

import React, { useState } from "react";
import Link from "next/link";
import IcStarOff from "@/assets/icons/ico_star_off.svg";
import IcStarOn from "@/assets/icons/ico_star_on.svg";
import IcInfo from "@/assets/icons/ico_circle_info.svg";

export interface TopbarProps {
  checked?: boolean;
  title: string;
  tip?: string;
  path: { text: string; url: string }[];
}

export default function Topbar({
  checked = false,
  title,
  tip,
  path = [{ text: "홈", url: "/" }],
}: TopbarProps) {
  const [bm, setBm] = useState(checked);

  return (
    <div className="topbar">
      <div className="title-box">
        <button onClick={() => setBm((prev) => !prev)}>
          {bm ? <IcStarOn /> : <IcStarOff />}
        </button>
        <span className="h1">{title}</span>
        {tip ? (
          <span data-tooltip-id="tooltip" data-tooltip-html={tip}>
            <IcInfo />
          </span>
        ) : (
          ""
        )}
      </div>

      <ul className="breadcrumb">
        {path.map((p, i) => (
          <li key={`${i}-${p.text}`}>
            {i === path.length - 1 ? (
              <span className="current">{p.text}</span>
            ) : (
              <Link href={p.url}>{p.text}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
