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
import Flag from "@pub/components/Flag";
import Drawer from "@pub/components/Drawer";
import Text from "@pub/components/Form/Text";

import IcInfo from "@/assets/icons/ico_circle_info.svg";

//등록 레이어팝업
// import { useState } from "react";
// import RegistePop from "../regist/RegistePop";

export default function VoucherMgtList() {
  // Drawer 상태 관리
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Drawer 닫기 핸들러
  const handleDrawerClose = (prevState: boolean) => {
    setIsDrawerOpen(prevState);
  };
  const drawerButtons = [
    {
      type: "black",
      icon: false,
      label: "저장",
    },
    {
      type: "outline",
      icon: false,
      label: "취소",
    },
  ];
  return (
    <DefaultLayout>
      <Topbar
        title="제보관리"
        tip="주차장정보에 대해 일부 수정 요청하는 수정제보와 APP에 없는 신규 주차장에 대한 제보를 확인하고 관리합니다."
        path={[
          { text: "홈", url: "/" },
          { text: "문의관리", url: "/" },
          { text: "제보관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li>
              <p className="inline-flex items-center gap-2">제보유형</p>
              <div className="flex items-center gap-6">
                <Radio name="f1" label="전체" defaultChecked />
                <Radio name="f1" label="수정" />
                <Radio name="f1" label="신규" />
              </div>
            </li>
            <li>
              <p className="inline-flex items-center gap-2">답변</p>
              <div className="flex items-center gap-6">
                <Radio name="f2" label="전체" defaultChecked />
                <Radio name="f2" label="Y" />
                <Radio name="f2" label="N" />
              </div>
            </li>

            <li>
              <p className="inline-flex items-center gap-2">제보지역</p>
              <div className="flex items-center gap-2">
                <SelectBasic placeholder="전체" size="m" />
                <SelectBasic placeholder="전체" size="m" disabled />
              </div>
            </li>
            <li>
              <p className="inline-flex items-center gap-2">검토결과</p>
              <div className="flex items-center gap-6">
                <Radio name="f3" label="전체" defaultChecked />
                <Radio name="f3" label="반영필요" />
                <Radio name="f3" label="미반영" />
              </div>
            </li>

            <li className="col-span-2">
              <p>검색어</p>
              <Input placeholder="검색어를 입력하세요." className="grow" />
            </li>

            <li className="col-span-2">
              <p>등록일자</p>
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
                <col />
                <col />
                <col width="240px" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <Checkbox />
                  </th>
                  <th>제보접수번호</th>
                  <th>제보유형</th>
                  <th>주차장명</th>
                  <th>시/도</th>
                  <th>구/시</th>
                  <th>사진첨부</th>
                  <th>제보자</th>
                  <th>제보일시</th>
                  <th>검토자</th>
                  <th>검토일시</th>
                  <th>검토결과</th>
                  <th>포인트</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <button type="button" className="flex items-center gap-1">
                      <span className="underline text-green">RN00002</span>
                    </button>
                  </td>
                  <td>신규</td>
                  <td>
                    <div className="line-clamp-2">
                      제보된 주차장명 표기 말줄임처리제보된 주차장명 표기 말줄임처리제보된 주차장명 표기 말줄임처리
                    </div>
                  </td>
                  <td>경기도</td>
                  <td>성남시</td>
                  <td>3장</td>
                  <td>홍길동</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <button type="button" className="flex items-center gap-1">
                      <span className="underline text-green">RN00002</span>
                    </button>
                  </td>
                  <td>신규</td>
                  <td>
                    <div className="line-clamp-2">
                      제보된 주차장명 표기 말줄임처리제보된 주차장명 표기 말줄임처리제보된 주차장명 표기 말줄임처리
                    </div>
                  </td>
                  <td>경기도</td>
                  <td>성남시</td>
                  <td>3장</td>
                  <td>홍길동</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <button type="button" className="flex items-center gap-1">
                      <span className="underline text-green">RN00002</span>
                    </button>
                  </td>
                  <td>신규</td>
                  <td>
                    <div className="line-clamp-2">
                      제보된 주차장명 표기 말줄임처리제보된 주차장명 표기 말줄임처리제보된 주차장명 표기 말줄임처리
                    </div>
                  </td>
                  <td>경기도</td>
                  <td>성남시</td>
                  <td>3장</td>
                  <td>홍길동</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <button type="button" className="flex items-center gap-1">
                      <span className="underline text-green">RN00002</span>
                    </button>
                  </td>
                  <td>신규</td>
                  <td>
                    <div className="line-clamp-2">
                      제보된 주차장명 표기 말줄임처리제보된 주차장명 표기 말줄임처리제보된 주차장명 표기 말줄임처리
                    </div>
                  </td>
                  <td>경기도</td>
                  <td>성남시</td>
                  <td>3장</td>
                  <td>홍길동</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>-</td>
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
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
