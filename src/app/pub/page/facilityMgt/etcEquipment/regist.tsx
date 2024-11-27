"use client";

import React, { useState } from "react";
import Drawer from "@pub/components/Drawer";
import Button from "@pub/components/Button";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Text from "@pub/components/Form/Text";
import FormDate from "@/app/pub/components/Form/Date";
import FileDrop from "@pub/components/Form/FileDrop2";

import SearchParkingZone from "../searchParkingZone";
import Alert from "@pub/components/Modal/Alert";

const EtcEquipmentRegist = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
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

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const closeAlert = () => setIsAlertOpen(false);

  const alertButtons = [
    {
      type: "outline",
      icon: false,
      label: "취소",
    },
    {
      type: "black",
      icon: false,
      label: "확인",
    },
  ];

  return (
    <div>
      <Drawer id="etc-regist-drawer" open={isOpen} handleClose={onClose} title="기타장비 등록" btns={drawerButtons}>
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
                    <th>상태</th>
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
                    <td colSpan={2} className="bg-gray">
                      <div className="sub-th">설치정보</div>
                      <div className="flex flex-col mt-4">
                        <div className="flex items-center">
                          <div className="flex items-center gap-3">
                            <p className="h4">
                              총 <span className="text-green">1</span>건
                            </p>
                          </div>
                          <Button type="gray" size="m" className="self-center ml-auto">
                            추가
                          </Button>
                        </div>
                        <div className="table-basic mt-2 max-h-[23.1rem] overflow-y-auto">
                          <table>
                            <colgroup>
                              <col width="60px" />
                              <col />
                              <col />
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
                                  <span className="text-req">상태</span>
                                </th>
                                <th>
                                  <span>날짜</span>
                                </th>
                                <th>
                                  <span>장비명</span>
                                </th>
                                <th>
                                  <span>수량</span>
                                </th>
                                <th>
                                  <span>설치사진</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  <SelectBasic placeholder="선택" />
                                </td>
                                <td>
                                  <FormDate />
                                </td>
                                <td>
                                  <Input className="grow" />
                                </td>
                                <td>
                                  <div className="flex items-center gap-2">
                                    <Input className="grow" />
                                    <span>EA</span>
                                  </div>
                                </td>
                                <td>
                                  <FileDrop />
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
                        <Text className="h-16 w-full" placeholder="관리자 메모를 작성합니다." />
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

      {/* 주차장 검색 팝업 */}
      <SearchParkingZone isOpen={isModalOpen} onClose={handleModalClose} />

      {/* URL 컨펌 */}
      <Alert open={isAlertOpen} handleClose={closeAlert} btns={alertButtons}>
        <p className="h4">디지털키 URL을 생성하시겠습니까?</p>
      </Alert>
    </div>
  );
};

export default EtcEquipmentRegist;
