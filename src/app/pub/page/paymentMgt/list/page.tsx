"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group2";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDate from "@pub/components/Form/Date";
import FormTime from "@pub/components/Form/Time";
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

  const [showDefault, setShowDefault] = useState(true);
  const [showElement1, setShowElement1] = useState(false);
  const [showElement2, setShowElement2] = useState(false);

  const getUrlParameter = (param: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  useEffect(() => {
    const paramValue1 = getUrlParameter("case1");
    const paramValue2 = getUrlParameter("case2");

    if (paramValue1 === "true") {
      setShowElement1(true);
      setShowDefault(false);
    } else {
      setShowElement1(false);
    }
    if (paramValue2 === "true") {
      setShowElement2(true);
      setShowDefault(false);
    } else {
      setShowElement2(false);
    }
  }, []);

  return (
    <DefaultLayout>
      <Topbar
        title="결제대행관리"
        path={[
          { text: "홈", url: "/" },
          { text: "문의관리", url: "/" },
          { text: "결제대행관리", url: "/" },
        ]}
      />
      {showDefault && (
        <div className="box-cont">
          <div>
            {/* 고객정보 */}
            <div className="title-cell">
              <p className="tit">고객정보</p>
            </div>
            <div className="table-basic">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">휴대폰번호</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <Input placeholder="숫자만 입력" size="m" />
                        <Button type="outline" size="m">
                          회원조회
                        </Button>
                      </div>
                    </td>
                    <th scope="row">회원번호</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th scope="row">차량번호</th>
                    <td>
                      <Input placeholder="차량번호 입력" size="m" />
                    </td>
                    <th scope="row">회원명</th>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 고객정보 */}

            {/* 예약정보 */}
            <div className="title-cell">
              <p className="tit">예약정보</p>
            </div>
            <div className="table-basic">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">주차장</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <Input disabled size="l" />
                        <Button type="outline" size="m">
                          조회
                        </Button>
                      </div>
                    </td>
                    <th scope="row">주차장종류</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th scope="row">주차권</th>
                    <td colSpan={3}>-</td>
                  </tr>
                  <tr>
                    <th scope="row">예약타입</th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-6">
                        <Radio name="t1" label="일반예약" />
                        <Radio name="t1" label="연장결제" />
                        <Radio name="t1" label="양심결제(예약정보 없이 결제)" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">예약일시</th>
                    <td colSpan={3}>
                      <div>
                        <div className="flex items-center gap-3">
                          <FormDate size="m" />
                          <FormTime size="s" />
                          ~
                          <SelectBasic placeholder="시간을 선택하세요" />
                          <FormDate size="m" disabled />
                          <FormTime size="s" disabled />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 예약정보 */}

            {/* 결제금액 */}
            <div className="title-cell">
              <p className="tit">결제금액</p>
              <p className="font-bold">0 원</p>
            </div>
            <div className="table-basic">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">카드 번호</th>
                    <td>
                      <div className="w-2/5">
                        <Input placeholder="15~16자리 카드번호 입력" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">카드 유효기간</th>
                    <td>
                      <div className="w-2/5">
                        <Input placeholder="YY/MM 4자리 예)2501 (25년 1월)" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">카드 비밀번호</th>
                    <td>
                      <Input size="m" placeholder="앞 2자리" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">결제자인증번호</th>
                    <td>
                      <div className="w-2/5">
                        <Input placeholder="주민번호앞6자리 또는 사업자번호(법인카드)" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">이름</th>
                    <td>
                      <Input size="m" placeholder="이름" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 결제금액 */}
          </div>
        </div>
      )}

      {/* 회원 + B2G(시간권) 주차장 */}
      {showElement1 && (
        <div className="box-cont">
          <div>
            {/* 고객정보 */}
            <div className="title-cell">
              <p className="tit">고객정보</p>
            </div>
            <div className="table-basic">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">휴대폰번호</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <Input defaultValue="0102225565" size="m" />
                        <Button type="outline" size="m">
                          회원조회
                        </Button>
                      </div>
                    </td>
                    <th scope="row">회원번호</th>
                    <td>PM2024100001</td>
                  </tr>
                  <tr>
                    <th scope="row">차량번호</th>
                    <td>
                      <Input defaultValue="25소0929" size="m" />
                    </td>
                    <th scope="row">회원명</th>
                    <td>김파프</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 고객정보 */}

            {/* 예약정보 */}
            <div className="title-cell">
              <p className="tit">예약정보</p>
            </div>
            <div className="table-basic">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">주차장</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <Input defaultValue="NNNNN/구획3-88-0(#11111)" disabled size="l" />
                        <Button type="outline" size="m">
                          조회
                        </Button>
                      </div>
                    </td>
                    <th scope="row">주차장종류</th>
                    <td>거주자우선 (구획제)</td>
                  </tr>
                  <tr>
                    <th scope="row">주차권</th>
                    <td colSpan={3}>
                      <SelectBasic size="m" placeholder="선택하세요" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">공유시간</th>
                    <td colSpan={3}>
                      <div className="table-basic bordered h-60 overflow-y-auto">
                        <table>
                          <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                          </colgroup>
                          <thead>
                            <tr>
                              <th scope="col">공유일자</th>
                              <th scope="col">상태</th>
                              <th scope="col">시작시간</th>
                              <th scope="col">종료시간</th>
                              <th scope="col">설정시간</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>YYYY-MM-DD</td>
                              <td>공유중</td>
                              <td>오전 00 : 00</td>
                              <td>오후 00 : 00</td>
                              <td>00 시간 00 분</td>
                            </tr>
                            <tr>
                              <td>YYYY-MM-DD</td>
                              <td>공유중</td>
                              <td>오전 00 : 00</td>
                              <td>오후 00 : 00</td>
                              <td>00 시간 00 분</td>
                            </tr>
                            <tr>
                              <td>YYYY-MM-DD</td>
                              <td>공유중</td>
                              <td>오전 00 : 00</td>
                              <td>오후 00 : 00</td>
                              <td>00 시간 00 분</td>
                            </tr>
                            <tr>
                              <td>YYYY-MM-DD</td>
                              <td>공유중</td>
                              <td>오전 00 : 00</td>
                              <td>오후 00 : 00</td>
                              <td>00 시간 00 분</td>
                            </tr>
                            <tr>
                              <td>YYYY-MM-DD</td>
                              <td>공유중</td>
                              <td>오전 00 : 00</td>
                              <td>오후 00 : 00</td>
                              <td>00 시간 00 분</td>
                            </tr>
                            <tr>
                              <td>YYYY-MM-DD</td>
                              <td>공유중</td>
                              <td>오전 00 : 00</td>
                              <td>오후 00 : 00</td>
                              <td>00 시간 00 분</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">예약타입</th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-6">
                        <Radio name="t2" label="일반예약" />
                        <Radio name="t2" label="연장결제" />
                        <Radio name="t2" label="양심결제(예약정보 없이 결제)" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">예약일시</th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-3">
                        <FormDate size="m" />
                        <FormTime size="s" />
                        ~
                        <SelectBasic placeholder="시간을 선택하세요" />
                        <FormDate size="m" disabled />
                        <FormTime size="s" disabled />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 예약정보 */}

            {/* 결제금액 */}
            <div className="title-cell">
              <p className="tit">결제금액</p>
              <p className="font-bold">0 원</p>
            </div>
            {/* 결제금액 */}
          </div>
        </div>
      )}

      {/* 비회원 + B2B / B2C 주차장 */}
      {showElement2 && (
        <div className="box-cont">
          <div>
            {/* 고객정보 */}
            <div className="title-cell">
              <p className="tit">고객정보</p>
            </div>
            <div className="table-basic">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">휴대폰번호</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <Input defaultValue="0102225565" size="m" />
                        <Button type="outline" size="m">
                          회원조회
                        </Button>
                      </div>
                    </td>
                    <th scope="row">회원번호</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th scope="row">차량번호</th>
                    <td>
                      <Input defaultValue="25소0929" size="m" />
                    </td>
                    <th scope="row">회원명</th>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 고객정보 */}

            {/* 예약정보 */}
            <div className="title-cell">
              <p className="tit">예약정보</p>
            </div>
            <div className="table-basic">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">주차장</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <Input defaultValue="NNNNN/구획3-88-0(#11111)" disabled size="l" />
                        <Button type="outline" size="m">
                          조회
                        </Button>
                      </div>
                    </td>
                    <th scope="row">주차장종류</th>
                    <td>일반제휴</td>
                  </tr>
                  <tr>
                    <th scope="row">주차권</th>
                    <td colSpan={3}>
                      <SelectBasic size="m" placeholder="선택하세요" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">예약타입</th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-6">
                        <Radio name="t3" label="일반예약" />
                        <Radio name="t3" label="연장결제" />
                        <Radio name="t3" label="양심결제(예약정보 없이 결제)" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">예약일시</th>
                    <td colSpan={3}>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <FormDate size="m" />
                          <FormTime size="s" />
                          ~
                          <SelectBasic placeholder="시간을 선택하세요" />
                          <FormDate size="m" disabled />
                          <FormTime size="s" disabled />
                        </div>

                        <div className="flex items-center gap-3">
                          <FormDate size="m" />
                          <FormTime size="s" />
                          ~
                          <FormDate size="m" disabled />
                          <FormTime size="s" disabled />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 예약정보 */}

            {/* 결제금액 */}
            <div className="title-cell">
              <p className="tit">결제금액</p>
              <p className="font-bold">0 원</p>
            </div>
            {/* 결제금액 */}
          </div>
        </div>
      )}

      <div className="flex mt-8">
        <div className="flex items-center gap-3 ml-auto">
          <Button type="black" size="m">
            초기화
          </Button>
          <Button type="green" size="m">
            결제
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
}
