"use client";

import React, { useState } from "react";
import Drawer from "@pub/components/Drawer";
import Button from "@pub/components/Button";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import Image from "next/image";
import SelectBasic from "@pub/components/Form/Select";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcMap from "@/assets/icons/ico_map.svg";
import Paging from "@pub/components/Grid/Paging";

const ShareRequestSearch = ({ isOpen, onClose }) => {
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
        id="share-request-drawer"
        open={isOpen}
        handleClose={onClose}
        title="공유신청간편조회"
        btns={drawerButtons}
      >
        <div>
          {/* Drawer 내부 컨텐츠 */}
          <div className="h-[calc(100%-140px)] overflow-y-auto">
            <div className="table-basic mb-5">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">공유신청접수번호</th>
                    <td>
                      <div className="flex items-center gap-3">
                        RM000001
                        <Button type="outline" size="s">
                          복사
                        </Button>
                      </div>
                    </td>
                    <th scope="row">연관문의 링크</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <SelectBasic size="m" placeholder="선택하세요" />
                        <Button type="outline" size="m">
                          링크
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      <p className="inline-flex items-center gap-2">
                        담당자 정보
                        <span data-tooltip-id="tooltip" data-tooltip-html="담당자 변경(이관)은 목록에서 가능합니다.">
                          <IcInfo />
                        </span>
                      </p>
                    </th>
                    <td>배정받은 담당자명(adminID)</td>
                    <th scope="row" className="bg-h-blue">
                      <div className="inline-flex items-center gap-2">
                        <p className="text-req">내부검토결과</p>
                        <span
                          data-tooltip-id="tooltip"
                          data-tooltip-html="내부검토결과 선택이 신청자에게 통보되진 않습니다."
                        >
                          <IcInfo />
                        </span>
                      </div>
                    </th>
                    <td>
                      <div className="flex flex-col items-start gap-2">
                        <Radio name="t1" label="검토중" defaultChecked />
                        <Radio name="t1" label="승인완료" />
                        <Radio name="t1" label="반려" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      <span className="text-req">관리자 메모</span>
                    </th>
                    <td colSpan={3}>
                      <Input placeholder="관리자 메모를 필수로 작성합니다." />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="table-memo">
                <table>
                  <colgroup>
                    <col width="212px" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>관리자명&#40;아이디&#41; / 소속</th>
                      <td>담당자를 이동훈 🡪 김길동으로 변경함. YYYY-MM-DD hh:mm</td>
                    </tr>
                  </tbody>
                </table>
                <Paging className="mt-2" />
              </div>
              {/* 관리마 메모 이력 없을때 */}
              <div className="table-memo">
                <table>
                  <colgroup>
                    <col width="120px" />
                  </colgroup>
                  <tbody className="no-memo">
                    <tr>
                      <td colSpan={2}>
                        <span className="no-data">관리자 메모 이력이 없습니다.</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <p className="h4">신청내용</p>
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
                      <th className="bg-h-green ">신청한 회원</th>
                      <td colSpan={3}>
                        <button type="button">
                          <span className="underline">홍길동(010-1234-5678)</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-h-green">신청유형</th>
                      <td colSpan={3}>유료주차장사업자 / 개인소유주차공간</td>
                    </tr>
                    <tr>
                      <th className="bg-h-green">연락가능한 번호</th>
                      <td>010-1233-9999</td>
                      <th className="bg-h-green">주차장소유관계</th>
                      <td>임차인(주차권한보육) 또는 직원</td>
                    </tr>
                    <tr>
                      <th className="bg-h-green">주차장명</th>
                      <td colSpan={3}>$신청자가 작성한 주차장명$</td>
                    </tr>
                    <tr>
                      <th className="bg-h-green">주차장위치</th>
                      <td colSpan={3}>
                        <div className="flex items-center gap-3">
                          <p>$서울시 강남구 학동로82길 14-1$ $고객이 작성한 상세위치 설명 표기$</p>
                          <button type="button" className="w-8 h-8">
                            <IcMap />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-h-green">요금방식 선택</th>
                      <td colSpan={3}>
                        <div className="flex items-center gap-6">
                          <Radio name="t2" label="시간권" defaultChecked />
                          <Radio name="t2" label="당일권" />
                          <Radio name="t2" label="월주차" />
                          <Radio name="t2" label="기타" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-h-green">주차면수</th>
                      <td colSpan={3}>112 / 123</td>
                    </tr>
                    <tr>
                      <th className="bg-h-green">주차장 설명</th>
                      <td colSpan={3}>
                        <div className="flex justify-between items-center">
                          <p>$신청자가 작성한 주차장 설명이 표기 됩니다. 선택항목이라 없을 수 있습니다$</p>
                          <span className="text-red">※ 운영가능면수 / 총주차면수</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-h-green">주차장 사진</th>
                      <td colSpan={3}>
                        <Button type="outline" size="s">
                          일괄 다운로드
                        </Button>
                        <div className="flex items-center gap-[0.8125rem] mt-2">
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
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ShareRequestSearch;
