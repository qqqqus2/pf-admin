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
        title="1:1문의관리"
        tip="APP을 통한 1:1문의에 대해 확인하고 답변하며 관리합니다."
        path={[
          { text: "홈", url: "/" },
          { text: "1:1문의관리", url: "/" },
          { text: "목록", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li>
              <p className="inline-flex items-center gap-2">문의유형</p>
              <div className="flex items-center gap-6">
                <SelectBasic size="m" placeholder="전체" />
              </div>
            </li>
            <li>
              <p className="inline-flex items-center gap-2">답변상태</p>
              <div className="flex items-center gap-6">
                <Radio name="f1" label="전체" defaultChecked />
                <Radio name="f1" label="답변대기" />
                <Radio name="f1" label="답변완료" />
              </div>
            </li>

            <li>
              <p className="inline-flex items-center gap-2">
                계정상태
                <span data-tooltip-id="tooltip" data-tooltip-html="계정상태: 전체/활성/비활성/검토/정지">
                  <IcInfo />
                </span>
              </p>
              <div className="inline-flex items-center gap-6">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="활성" />
                <Checkbox label="비활성" />
                <Checkbox label="검토" />
                <Checkbox label="정지" />
              </div>
            </li>
            <li>
              <p className="inline-flex items-center gap-2">
                블랙리스트 여부
                <span data-tooltip-id="tooltip" data-tooltip-html="블랙리스트여부:전체/Y/N">
                  <IcInfo />
                </span>
              </p>
              <div className="flex items-center gap-6">
                <Radio name="f2" label="전체" defaultChecked />
                <Radio name="f2" label="Y" />
                <Radio name="f2" label="N" />
              </div>
            </li>

            <li className="col-span-2">
              <p className="inline-flex items-center gap-2">
                회원유형
                <span data-tooltip-id="tooltip" data-tooltip-html="전체/회원/파트너">
                  <IcInfo />
                </span>
              </p>
              <div className="flex items-center gap-6">
                <Radio name="f3" label="전체" defaultChecked />
                <Radio name="f3" label="회원" />
                <Radio name="f3" label="파트너" />
                <div className="flex items-center gap-2">
                  <SelectBasic placeholder="대분류를 선택하세요" size="m" disabled />
                  <SelectBasic placeholder="소분류를 선택하세요" size="m" disabled />
                </div>
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
              <SelectBasic size="m" placeholder="최근등록순" />
              <SelectBasic size="m" placeholder="50개씩 보기" />
            </div>
          </div>
          <div className="table-grid mt-4">
            <table>
              <colgroup>
                <col width="40px" />
                <col />
                <col />
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
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>문의번호</th>
                  <th>문의유형</th>
                  <th>회원유형</th>
                  <th>계정상태</th>
                  <th>제목</th>
                  <th>휴대폰번호</th>
                  <th>이름(닉네임)</th>
                  <th>문의일시</th>
                  <th>답변자</th>
                  <th>답변일시</th>
                  <th>최종수정자</th>
                  <th>최종수정일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>
                    <button type="button" className="flex items-center gap-1">
                      <span className="underline text-green">Q12345678</span>
                    </button>
                  </td>
                  <td>주차권</td>
                  <td>APP회원</td>
                  <td>활성</td>
                  <td>
                    <div className="line-clamp-2">
                      문의 제목이 노출됩니다.문의 제목이 노출됩니다.문의 제목이 노출됩니다.문의 제목이 노출됩니다.
                    </div>
                  </td>
                  <td>010-1234-5678</td>
                  <td>
                    <div className="flex justify-center items-center gap-2">
                      홍길동
                      <Flag type="black" size="s" label="B" />
                    </div>
                  </td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="bg-cell-red">
                  <td>10</td>
                  <td>
                    <button type="button" className="flex items-center gap-1">
                      <span className="underline text-green">Q12345678</span>
                    </button>
                  </td>
                  <td>주차권</td>
                  <td>APP회원</td>
                  <td>활성</td>
                  <td>
                    <div className="line-clamp-2">
                      문의 제목이 노출됩니다.문의 제목이 노출됩니다.문의 제목이 노출됩니다.문의 제목이 노출됩니다.
                    </div>
                  </td>
                  <td>010-1234-5678</td>
                  <td>홍길동</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="bg-[#F4F5F8]">
                  <td>10</td>
                  <td>
                    <button type="button" className="flex items-center gap-1">
                      <span className="underline text-green">Q12345678</span>
                    </button>
                  </td>
                  <td>주차권</td>
                  <td>APP회원</td>
                  <td>활성</td>
                  <td>
                    <div className="line-clamp-2">
                      문의 제목이 노출됩니다.문의 제목이 노출됩니다.문의 제목이 노출됩니다.문의 제목이 노출됩니다.
                    </div>
                  </td>
                  <td>010-1234-5678</td>
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
