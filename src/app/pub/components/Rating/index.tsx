import React, { ReactElement } from "react";
import IcStar from "@/assets/icons/ico_star.svg";

export interface RatingProps {
  value: 1 | 2 | 3 | 4 | 5;
  className: string;
}

export default function Rating({ value, className }: RatingProps) {
  return (
    <ul
      className={`inline-flex items-center gap-1 min-h-[1.375rem] ${
        className ? className : ""
      }`}
    >
      {Array.from({ length: value }, (_, i) => (
        <IcStar key={`rating-${i}`} />
      ))}
    </ul>
  );
}
