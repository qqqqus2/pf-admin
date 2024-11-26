"use client";
import React, { useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Image from "next/image";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import InputSearch from "@pub/components/Form/InputSearch";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import Modal from "@pub/components/Modal";
import Drawer from "@pub/components/Drawer";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcSnb11 from "@/assets/icons/sidebar/ico_snb_11.svg";
//등록 레이어팝업
// import { useState } from "react";
// import RegistePop from "../regist/RegistePop";

export default function VoucherMgtList() {
  // Drawer 상태 관리
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        title="공유신청관리 조회/상세"
        path={[
          { text: "홈", url: "/" },
          { text: "문의관리", url: "/" },
          { text: "공유신청관리", url: "/" },
        ]}
      />
      <div className="box-cont">
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
                    <Button type="outline" size="m" onClick={openModal}>
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
                  <div className="flex items-center gap-6">
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
                <col width="212px" />
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
                        <IcSnb11 />
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
                <th scope="row">검토자</th>
                <td>김파프(amdinid)</td>
                <th scope="row">검토일시</th>
                <td>yyyy-mm-dd 00:00</td>
              </tr>
              <tr>
                <th scope="row">최종수정자</th>
                <td>검토 시 노출</td>
                <th scope="row">최종수정일시</th>
                <td>검토 시 노출</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex mt-8">
        <Button type="black" size="m">
          목록
        </Button>
        <div className="flex items-center gap-3 ml-auto">
          <Button type="black" size="m">
            취소
          </Button>
          <Button type="green" size="m">
            저장
          </Button>
        </div>
        <Modal open={isModalOpen} handleClose={closeModal} size="s">
          <p className="h4 mb-4">링크</p>
          <InputSearch placeholder="링크할 접수번호를 입력하세요." />
          <div className="flex items-center gap-3 mt-8">
            <Button type="gray" size="l" className="flex-1">
              취소
            </Button>
            <Button type="green" size="l" className="flex-1">
              확인
            </Button>
          </div>
        </Modal>
      </div>
    </DefaultLayout>
  );
}
