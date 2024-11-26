"use client";

import React, { useState } from "react";
import Drawer from "@pub/components/Drawer";
import Button from "@pub/components/Button";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Text from "@pub/components/Form/Text";

import FormDate from "@/app/pub/components/Form/Date";

import SearchParkingZone from "../searchParkingZone";

const CCTVDetailDrawer = ({ isOpen, onClose }) => {
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

    //라디오 그룹
    const [selectedOperation, setSelectedOperation] = useState("구획");
    const handleOperationChange = (value: string) => {
        setSelectedOperation(value);
    };

    return (
        <div>
            <Drawer id="cctv-detail-drawer" open={isOpen} handleClose={onClose} title="CCTV 상세" btns={drawerButtons}>
                <div>
                    {/* Drawer 내부 컨텐츠 */}
                    <div className="h-[calc(100%-140px)] overflow-y-auto">
                        <div className="table-basic">
                            <table>
                                <colgroup>
                                    <col width="120px" />
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
                                            <div className="flex items-stretch items-center gap-2">
                                                <Input className="grow readOnly" readOnly />
                                                <Button type="outline" size="m" onClick={() => setIsModalOpen(true)}>
                                                    조회
                                                </Button>
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
                                            <div className="flex gap-4">
                                                <Input className="grow" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span>시리얼번호</span>
                                        </th>
                                        <td>
                                            <div className="flex gap-4">
                                                <Input className="grow" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>운영방식</th>
                                        <td>
                                            <div className="flex gap-4">
                                                <div className="flex gap-2">
                                                    <Radio
                                                        name="operation"
                                                        label="구획"
                                                        onChange={() => handleOperationChange("구획")}
                                                    />
                                                    <Input className="grow" disabled={selectedOperation !== "구획"} />
                                                </div>

                                                <div className="flex gap-2">
                                                    <Radio
                                                        name="operation"
                                                        label="구간"
                                                        onChange={() => handleOperationChange("구간")}
                                                    />
                                                    <Input className="grow" disabled={selectedOperation !== "구간"} />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>통신 개통여부</th>
                                        <td>
                                            <div className="flex gap-4">
                                                <Radio name="f2" label="개통" defaultChecked />
                                                <Radio name="f2" label="미개통" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="bg-gray">
                                            <div className="flex sub-th">
                                                관리정보
                                                <p className="ml-auto">
                                                    ※최초설치자 등 작업자의 업데이트 이력을 입력합니다.
                                                </p>
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
                            <div className="table-memo">
                                <table>
                                    <colgroup>
                                        <col width="212px" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>관리자명&#40;아이디&#41; / 소속</th>
                                            <td>
                                                회원문의 3회 이상 욕설과 강성요청 고객으로 블랙리스트 적용합니다.
                                                회원문의 3회 이상 욕설과 강성요청 고객으로 블랙리스트 적용합니다.
                                                2024-01-01 00:00
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
        </div>
    );
};

export default CCTVDetailDrawer;
