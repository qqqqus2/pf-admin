import React from "react";
import SnbMenu from "@pub/layout/SnbMenu";
import IcLogo from "@/assets/icons/logo_pf.svg";
import IcLogo2 from "@/assets/icons/logo_pf_2.svg";

import IcSnb01 from "@/assets/icons/sidebar/ico_snb_01.svg";
import IcSnb02 from "@/assets/icons/sidebar/ico_snb_02.svg";
import IcSnb03 from "@/assets/icons/sidebar/ico_snb_03.svg";
import IcSnb04 from "@/assets/icons/sidebar/ico_snb_04.svg";
import IcSnb05 from "@/assets/icons/sidebar/ico_snb_05.svg";
import IcSnb06 from "@/assets/icons/sidebar/ico_snb_06.svg";
import IcSnb07 from "@/assets/icons/sidebar/ico_snb_07.svg";
import IcSnb08 from "@/assets/icons/sidebar/ico_snb_08.svg";
import IcSnb09 from "@/assets/icons/sidebar/ico_snb_09.svg";
import IcSnb10 from "@/assets/icons/sidebar/ico_snb_10.svg";
import IcSnb11 from "@/assets/icons/sidebar/ico_snb_11.svg";
import IcSnb12 from "@/assets/icons/sidebar/ico_snb_12.svg";
import IcSnb13 from "@/assets/icons/sidebar/ico_snb_13.svg";
import IcSnb14 from "@/assets/icons/sidebar/ico_snb_14.svg";

const snbData = [
  {
    cate: "Menu",
    menus: [
      { icon: <IcSnb01 />, tit: "대시보드" },
      {
        icon: <IcSnb02 />,
        tit: "사용자관리",
        sub: [{ name: "회원관리" }, { name: "그룹생성관리" }],
      },
      {
        icon: <IcSnb03 />,
        tit: "파트너/시설관리",
        sub: [
          { name: "파트너관리" },
          { name: "배정자관리" },
          { name: "시설관리" },
          { name: "주차신고관리" },
        ],
      },
      {
        icon: <IcSnb04 />,
        tit: "전시/컨텐츠관리",
        sub: [
          { name: "이벤트/공지 관리" },
          { name: "배너관리" },
          { name: "상품권관리" },
          { name: "약관관리" },
        ],
      },
      {
        icon: <IcSnb05 />,
        tit: "쿠폰/포인트관리",
        sub: [{ name: "쿠폰관리" }, { name: "포인트관리" }],
      },
      {
        icon: <IcSnb06 />,
        tit: "문의관리",
        sub: [
          { name: "공유신청관리" },
          { name: "1:1문의관리" },
          { name: "결제대행관리" },
          { name: "FAQ관리" },
        ],
      },
      {
        icon: <IcSnb07 />,
        tit: "정산관리",
        sub: [{ name: "결제내역관리" }, { name: "정산관리" }],
      },
      {
        icon: <IcSnb08 />,
        tit: "이력관리",
        sub: [
          { name: "접속이력관리" },
          { name: "다운로드이력관리" },
          { name: "약관이력관리" },
          { name: "정보변경관리" },
        ],
      },
    ],
  },
  {
    cate: "파트너 메뉴",
    menus: [
      { icon: <IcSnb09 />, tit: "주차현황관리" },
      { icon: <IcSnb10 />, tit: "차량검색" },
      { icon: <IcSnb11 />, tit: "배정자현황" },
      { icon: <IcSnb12 />, tit: "수익정산" },
      { icon: <IcSnb13 />, tit: "계정/권한관리" },
      { icon: <IcSnb14 />, tit: "주차리포트" },
    ],
  },
];

export default function Sidebar({ open }) {
  return (
    <aside className={`sidebar${open ? " snb-open" : ""}`}>
      <div className="logo">{open ? <IcLogo /> : <IcLogo2 />}</div>

      <div className="container">
        <nav>
          {snbData.map((d, ord) => (
            <div key={`${ord}-${d.cate}`} className="cate-box">
              <p className="cate-tit">{d.cate}</p>
              <ul>
                {d.menus.map((m, i) => (
                  <SnbMenu menu={m} key={`${i}-${m.tit}`} />
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
