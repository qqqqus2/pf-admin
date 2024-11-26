"use client";
import React, { useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group2";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";

import IcInfo from "@/assets/icons/ico_circle_info.svg";

import ShareRequestSearch from "./shareRequestSearch";

export default function VoucherMgtList() {
  // Drawer 상태 관리
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState(null);

  // 조회 drawer
  const openSearchDrawer = () => {
    setDrawerType("search");
    setIsDrawerOpen(true);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setDrawerType(null);
    }, 300);
  };

  return (
    <DefaultLayout>
      <Topbar
        title="공유신청관리"
        tip="주차공유 중 개인소유주차공간에 대해 신청을 확인하고 관리합니다."
        path={[
          { text: "홈", url: "/" },
          { text: "문의관리", url: "/" },
          { text: "공유신청관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li>
              <p className="inline-flex items-center gap-2">
                신청유형
                <span
                  data-tooltip-id="tooltip"
                  data-tooltip-html="신청유형: <br/>-개인주차공간-빌라/가게/주택 등<br/>-유료주차장-사업자 또는 개발/운영 준비 중"
                >
                  <IcInfo />
                </span>
              </p>
              <div className="flex items-center gap-6">
                <Radio name="f1" label="전체" defaultChecked />
                <Radio name="f1" label="개인주차공간" />
                <Radio name="f1" label="유료주차장" />
              </div>
            </li>
            <li>
              <p className="inline-flex items-center gap-2">
                검토결과
                <span data-tooltip-id="tooltip" data-tooltip-html="검토결과: 전체/등록/보류/미등록">
                  <IcInfo />
                </span>
              </p>
              <div className="flex items-center gap-6">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="검토중" />
                <Checkbox label="승인완료" />
                <Checkbox label="반려" />
              </div>
            </li>

            <li>
              <p className="inline-flex items-center gap-2">
                신청지역
                <span
                  data-tooltip-id="tooltip"
                  data-tooltip-html="신청지역: 신청한 주차장의 위치정보 중, 시/도 및 구 단위까지 세분화 검색 제공"
                >
                  <IcInfo />
                </span>
              </p>
              <div className="inline-flex items-center gap-2">
                <SelectBasic size="m" placeholder="전체" />
                <SelectBasic size="m" placeholder="전체" disabled />
              </div>
            </li>
            <li>
              <p className="inline-flex items-center gap-2">요금방식</p>
              <div className="flex items-center gap-6">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="시간권" />
                <Checkbox label="당일권" />
                <Checkbox label="월주차" />
                <Checkbox label="기타" />
              </div>
            </li>

            <li className="col-span-2">
              <p>검색어</p>
              <Input placeholder="검색어를 입력하세요." className="grow" />
            </li>

            <li className="col-span-2">
              <p>등록일</p>
              <div className="flex items-center gap-2">
                <FormDateRange />
                <ButtonGroup />
              </div>
            </li>
          </ul>
          <div className="search-btn">
            <Button type="green" size="m">
              검색
            </Button>
          </div>
        </div>
        {/* //search box */}

        <div>
          <div className="flex items-center min-h-[2.5rem] gap-3">
            <p className="h4">
              총 <span className="text-green">231</span>건
            </p>
            <div className="ml-auto flex flex-wrap gap-3">
              <SelectBasic size="m" placeholder="50개씩 보기" />
            </div>
          </div>
          <div className="table-grid mt-4">
            <table>
              <colgroup>
                <col width="60px" />
                <col width="100px" />
                <col />
                <col />
                <col />
                <col width="100px" />
                <col />
                <col />
                <col width="160px" />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <Checkbox />
                  </th>
                  <th>신청번호</th>
                  <th>신청유형</th>
                  <th>시/도</th>
                  <th>구/시</th>
                  <th>요금방식</th>
                  <th>신청자</th>
                  <th>검토결과</th>
                  <th>담당자</th>
                  <th>검토일시</th>
                  <th>최종수정자</th>
                  <th>최종수정일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <button type="button" className="flex items-center gap-1" onClick={openSearchDrawer}>
                      <span className="underline text-green">RS12345678</span>
                    </button>
                  </td>
                  <td>개인주차공간</td>
                  <td>경기도</td>
                  <td>성남시</td>
                  <td>시간권</td>
                  <td>010-1234-5678</td>
                  <td>-</td>
                  <td>
                    <SelectBasic size="s" placeholder="담당자명" className="ml-auto" />
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <button type="button" className="flex items-center gap-1" onClick={openSearchDrawer}>
                      <span className="underline text-green">RS12345678</span>
                    </button>
                  </td>
                  <td>개인주차공간</td>
                  <td>경기도</td>
                  <td>성남시</td>
                  <td>시간권</td>
                  <td>010-1234-5678</td>
                  <td>-</td>
                  <td>
                    <SelectBasic size="s" placeholder="담당자명" className="ml-auto" />
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <button type="button" className="flex items-center gap-1" onClick={openSearchDrawer}>
                      <span className="underline text-green">RS12345678</span>
                    </button>
                  </td>
                  <td>개인주차공간</td>
                  <td>경기도</td>
                  <td>성남시</td>
                  <td>시간권</td>
                  <td>010-1234-5678</td>
                  <td>-</td>
                  <td>
                    <SelectBasic size="s" placeholder="담당자명" className="ml-auto" />
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-4 items-center mt-6">
            <Paging className="col-start-2 col-span-2" />
            <div className="flex ml-auto items-center gap-3">
              <Button type="outline" size="m" className="justify-self-end">
                <IcExcel />
                엑셀다운로드
              </Button>
              <Button type="black" size="m" className="justify-self-start" onClick={() => setIsDrawerOpen(true)}>
                저장
              </Button>
            </div>
          </div>
        </div>
        <ShareRequestSearch
          key="search-drawer"
          isOpen={isDrawerOpen && drawerType === "search"}
          onClose={handleClose}
        />
      </div>
    </DefaultLayout>
  );
}
