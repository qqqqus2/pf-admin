"use client";

import React, { useState } from "react";
import Drawer from "@pub/components/Drawer";
import Button from "@pub/components/Button";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Text from "@pub/components/Form/Text";
import FormDate from "@/app/pub/components/Form/Date";
import FileDrop from "@pub/components/Form/FileDrop2";
import Image from "next/image";
import Modal from "@pub/components/Modal";
import Carousel from "@pub/components/Carousel";
import SearchParkingZone from "../searchParkingZone";

const KioskDetail = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen2(true);
  const closeModal = () => setIsModalOpen2(false);

  const drawerButtons = [
    {
      type: "outline",
      icon: false,
      label: "취소",
    },
    {
      type: "black",
      icon: false,
      label: "저장",
    },
  ];

  return (
    <div>
      <Drawer id="kiosk-detail-drawer" open={isOpen} handleClose={onClose} title="키오스크 상세" btns={drawerButtons}>
        <div>
          {/* Drawer 내부 컨텐츠 */}
          <div className="h-[calc(100%-140px)] overflow-y-auto">
            <div className="table-basic">
              <table>
                <colgroup>
                  <col width="150px" />
                  <col />
                </colgroup>

                <tbody>
                  <tr>
                    <th>
                      <span className="text-req">상태</span>
                    </th>
                    <td>
                      <SelectBasic size="m" placeholder="선택하세요" />
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="text-req">주차장</span>
                    </th>
                    <td>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-stretch items-center gap-2 w-full">
                          <Input className="grow readOnly" readOnly value="999999/ 강남 스마트공유 주차장 1-01" />
                          <Button type="outline" size="m" onClick={() => setIsModalOpen(true)}>
                            조회
                          </Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>파트너명</span>
                    </th>
                    <td>주차장을 등록하면 자동입력 됩니다.</td>
                  </tr>
                  <tr>
                    <th>
                      <span>기기ID(DEUI)</span>
                    </th>
                    <td>
                      <div className="flex gap-4">NNNNNNNN</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>업체명</span>
                    </th>
                    <td>
                      <div className="flex gap-4">
                        <Input className="grow" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>API연동정보</th>
                    <td>
                      <div className="flex gap-4 flex-col">
                        <div className="flex items-center gap-3">
                          <strong className="block w-[50px]">URL</strong>
                          <Input className="grow" />
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3">
                            <strong className="block w-[50px]">아이디</strong>
                            <Input className="grow" />
                          </div>
                          <div className="flex items-center gap-3">
                            <strong className="block w-[55px]">비밀번호</strong>
                            <Input type="password" className="grow" />
                          </div>
                          <Button type="outline" size="m">
                            조회
                          </Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>프로그램버전정보</th>
                    <td>
                      <div className="flex gap-4 items-center">
                        <Input className="grow" size="m" />
                        예&#041; v0.1
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>설치사진</th>
                    <td>
                      <div className="flex items-center gap-[0.8125rem]">
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="설치사진.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="설치사진.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="설치사진.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="설치사진.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <FileDrop />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="bg-gray">
                      <div className="flex sub-th">
                        관리정보
                        <p className="ml-auto">※최초설치자 등 작업자의 업데이트 이력을 입력합니다.</p>
                      </div>
                      <div className="flex flex-col mt-4">
                        <div className="flex items-center">
                          <div className="flex items-center gap-3">
                            <p className="h4">
                              총 <span className="text-green">2</span>건
                            </p>
                          </div>
                          <Button type="gray" size="m" className="self-center ml-auto">
                            추가
                          </Button>
                        </div>
                        <div className="table-basic mt-2">
                          <table>
                            <colgroup>
                              <col width="60px" />
                              <col />
                              <col />
                              <col />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>
                                  <span>번호</span>
                                </th>
                                <th>
                                  <span className="text-req">이름</span>
                                </th>
                                <th>
                                  <span className="text-req">날짜</span>
                                </th>
                                <th>
                                  <span>내용 요약</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  <Input className="grow" />
                                </td>
                                <td>
                                  <FormDate />
                                </td>
                                <td>
                                  <Input className="grow" />
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>
                                  <Input className="grow" />
                                </td>
                                <td>
                                  <FormDate />
                                </td>
                                <td>
                                  <Input className="grow" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <span>관리자메모</span>
                    </th>
                    <td>
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
            <div className="table-memo">
              <table>
                <colgroup>
                  <col width="212px" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>관리자명&#40;아이디&#41; / 소속</th>
                    <td>회원문의 3회 이상 욕설과 강성요청 고객으로 블랙리스트 적용합니다. 2024-01-01 00:00</td>
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
                  <tr>
                    <th>
                      <span>최종수정자</span>
                    </th>
                    <td>홍길동&#40;admin_hong&#41;</td>
                    <th>
                      <span>최종수정일시</span>
                    </th>
                    <td>yyyy-mm-dd 00:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Drawer>

      {/* 주차장 검색 팝업 */}
      <SearchParkingZone isOpen={isModalOpen} onClose={handleModalClose} />
      <Modal open={isModalOpen2} handleClose={closeModal} size="m" title="이미지 크게보기">
        <Carousel className="mt-4" />
      </Modal>
    </div>
  );
};

export default KioskDetail;
