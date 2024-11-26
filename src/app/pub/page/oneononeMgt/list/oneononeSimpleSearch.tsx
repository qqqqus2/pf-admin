"use client";

import React, { useState } from "react";
import Drawer from "@pub/components/Drawer";
import Button from "@pub/components/Button";
import Flag from "@pub/components/Flag";
import Checkbox from "@pub/components/Form/Check";
import Image from "next/image";
import Text from "@pub/components/Form/Text";
import Paging from "@pub/components/Grid/Paging";
import IcArrowRight from "@/assets/icons/ico_arrow_right.svg";

const OneononeSimpleSearch = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const drawerButtons = [
    {
      type: "outline",
      icon: false,
      label: "닫기",
    },
  ];

  return (
    <div>
      <Drawer
        id="oneonone-search-drawer"
        open={isOpen}
        handleClose={onClose}
        title="1:1문의간편조회"
        btns={drawerButtons}
      >
        <div>
          {/* Drawer 내부 컨텐츠 */}
          <div className="h-[calc(100%-140px)] overflow-y-auto">
            <div className="box-cont">
              <div>
                <p className="h4">문의정보</p>
                <div className="table-basic mt-4">
                  <table>
                    <colgroup>
                      <col width="152px" />
                      <col />
                      <col width="152px" />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">문의번호</th>
                        <td>
                          <div className="flex items-center gap-3">
                            RM000001
                            <Button type="outline" size="s">
                              복사
                            </Button>
                          </div>
                        </td>
                        <th scope="row">회원유형</th>
                        <td>
                          파트너 / B2G(지자체) / 송파구청
                          <div className="ml-2 inline-flex ">
                            <Button type="outline" size="s">
                              상세보기
                              <IcArrowRight />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">문의자</th>
                        <td>
                          <button type="button">
                            <span className="underline">홍길동(010-1234-5678)</span>
                          </button>
                        </td>
                        <th scope="row">계정상태</th>
                        <td>
                          <div className="flex items-center gap-2">
                            활성
                            <Flag type="black" size="s" label="Black" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">문의유형</th>
                        <td>주차권</td>
                        <th scope="row">문의일시</th>
                        <td>YYYY-MM-DD hh:mm</td>
                      </tr>
                      <tr>
                        <th scope="row">제목</th>
                        <td colSpan={3}>문의 제목이 노출됩니다.</td>
                      </tr>
                      <tr>
                        <th scope="row">내용</th>
                        <td colSpan={3}>
                          내용이 노출되는 영역입니다. 문의한 내용이 노출됩니다. 문의한 내용이 노출됩니다. 문의한 내용이
                          노출됩니다. 문의한 내용이 노출됩니다. 문의한 내용이 노출됩니다. 문의한 내용이 노출됩니다.
                          문의한 내용이 노출됩니다. 문의한 내용이 노출됩니다.내용이 노출됩니다. 문의한 내용이
                          노출됩니다.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">첨부파일</th>
                        <td colSpan={3}>
                          <div className="flex items-center gap-[0.8125rem]">
                            <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                              <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} />
                              <button type="button" className="file-thumb-btn"></button>
                            </div>
                            <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                              <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} />
                              <button type="button" className="file-thumb-btn"></button>
                            </div>
                            <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                              <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} />
                              <button type="button" className="file-thumb-btn"></button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <p className="h4">답변영역</p>
                <div className="table-basic mt-4">
                  <table>
                    <colgroup>
                      <col width="152px" />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row" className="bg-h-blue">
                          <span className="text-req">답변내용</span>
                        </th>
                        <td>
                          <Text rows={3} placeholder="답변을 작성하세요" className="grow" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="bg-h-blue">
                          알림 발송
                        </th>
                        <td>
                          <div className="flex items-center gap-6">
                            <Checkbox label="앱푸시" checked />
                            <Checkbox label="카카오톡" />
                            <Checkbox label="문자" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <p className="h4">관리자메모</p>
                <div className="table-memo mt-4">
                  <table>
                    <colgroup>
                      <col width="212px" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>관리자명&#40;아이디&#41; / 소속</th>
                        <td>회원문의 3회 이상 욕설과 강성요청 고객으로 블랙리스트 적용합니다. 2024-01-01 00:00</td>
                      </tr>
                      <tr>
                        <th>관리자명&#40;아이디&#41; / 소속</th>
                        <td>시스템 오류에 의한 불편함의 이유로 포인트를 지급했습니다. YYYY-MM-DD hh:mm</td>
                      </tr>
                      <tr>
                        <th>관리자명&#40;아이디&#41; / 소속</th>
                        <td>
                          관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가
                          표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가
                          작성한 메모가 표기됩니다. YYYY-MM-DD hh:mm
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Paging className="mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default OneononeSimpleSearch;
