"use client";

import { useState } from "react";
import Sidebar from "@pub/layout/Sidebar";
import IcAlarm from "@/assets/icons/ico_alarm.svg";
import IcSnbOpen from "@/assets/icons/ico_snb_open.svg";
import IcSnbClose from "@/assets/icons/ico_snb_close.svg";

export default function DefaultLayout({ children }) {
  const [snbOpen, setSnbOpen] = useState(true);

  return (
    <div className="root-container">
      <Sidebar open={snbOpen} />
      <main className="grow">
        <header className="header">
          <button
            type="button"
            className="btn-snb"
            onClick={() => setSnbOpen((prev) => !prev)}
          >
            {snbOpen ? <IcSnbClose /> : <IcSnbOpen />}
          </button>
          <div className="flex items-center gap-3 ml-auto">
            <p className="user">홍길동님</p>
            <button className="btn-header">로그아웃</button>
            <button className="btn-header">비밀번호 변경</button>
            <button className="btn-header btn-alarm" data-cnt="99+">
              <IcAlarm />
            </button>
          </div>
        </header>
        <div className="overflow-y-auto flex flex-col h-[calc(100vh-5rem)] px-[2.5rem] pb-[2.5rem] bg-[#F7F9FC]">
          {children}
        </div>
      </main>
    </div>
  );
}
