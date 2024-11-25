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
            <Button type="outline" size="s" className="justify-self-end">
              <IcExcel />
              엑셀다운로드
            </Button>
            <div className="ml-auto flex flex-wrap gap-3">
              <SelectBasic size="m" placeholder="50개씩 보기" />
            </div>
          </div>
          <div className="table-grid mt-4">
            <table>
              <colgroup>
                <col width="40px" />
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
                  <th>
                    <Checkbox />
                  </th>
                  <td>
                    <button type="button" className="flex items-center gap-1">
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
                  <th>
                    <Checkbox />
                  </th>
                  <td>
                    <button type="button" className="flex items-center gap-1">
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
                  <th>
                    <Checkbox />
                  </th>
                  <td>
                    <button type="button" className="flex items-center gap-1">
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
              <Button type="black" size="m" className="justify-self-start" onClick={() => setIsDrawerOpen(true)}>
                저장
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        id="voucher-regist-drawer"
        open={isDrawerOpen}
        handleClose={handleDrawerClose}
        title="상품권 등록"
        // desc="포인트상품권 정보를 등록할 수 있습니다."
        btns={drawerButtons}
      >
        <div>
          {/* Drawer 내부 컨텐츠 */}
          <div className="h-[calc(100%-140px)] overflow-y-auto">
            <div className="table-basic">
              <table>
                <colgroup>
                  <col width="150px" />
                  <col />
                  <col width="150px" />
                  <col />
                </colgroup>

                <tbody>
                  <tr>
                    <th>
                      <span>상품권번호</span>
                    </th>
                    <td>NNNNNN</td>
                    <th>
                      <span>사용여부</span>
                    </th>
                    <td>
                      <div className="flex gap-6">
                        <Radio name="f1" label="사용" />
                        <Radio name="f1" label="사용안함" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span className="text-req">상품권명</span>
                    </th>
                    <td colSpan={3}>
                      <Input className="grow" />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span className="text-req">상품권금액</span>
                    </th>
                    <td colSpan={3}>
                      <div className="inline-flex items-center gap-2">
                        <Input size="m" className="grow" /> 원
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span className="text-req">판매기간</span>
                    </th>
                    <td colSpan={3}>
                      <div className="flex gap-4">
                        <FormDateRange />
                        <Checkbox label="무제한" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span className="text-req">유효기간</span>
                    </th>
                    <td colSpan={3}>
                      <div className="inline-flex items-center gap-2">
                        상품권등록일로부터
                        <Input size="m" className="grow" />일 &#40;최대 3년 &#41;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span className="text-req">발급수량</span>
                    </th>
                    <td colSpan={3}>
                      <div className="inline-flex items-center gap-2">
                        <Input size="m" className="grow" />매
                      </div>
                      <div className="list-common mt-2">
                        <ul>
                          <li>난수발급 이후에는 정보 수정을 할 수 없습니다.</li>
                          <li>상품권변경을 하시려면 신규로 등록해주시기 바랍니다.</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>관리자메모</span>
                    </th>
                    <td colSpan={3}>
                      <div className="flex items-stretch items-center gap-2">
                        <Text className="h-16 w-full" />
                        <Button type="gray" className="h-auto">
                          확인
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-basic mt-5">
              <table>
                <colgroup>
                  <col width="150px" />
                  <col />
                  <col width="150px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <span>등록자</span>
                    </th>
                    <td>김파프&#40;amdinid&#41;</td>
                    <th>
                      <span>등록일시</span>
                    </th>
                    <td>yyyy-mm-dd 00:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Drawer>
    </DefaultLayout>
  );
}
