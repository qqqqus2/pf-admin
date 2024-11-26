"use client";

import React, { useState } from "react";
import Drawer from "@pub/components/Drawer";
import Button from "@pub/components/Button";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Text from "@pub/components/Form/Text";

import SearchParkingZone from "./searchParkingZone";

const AIotRegistDrawer = ({ isOpen, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
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

    //라디오 그룹
    const [selectedOperation, setSelectedOperation] = useState("구획");
    const handleOperationChange = (value: string) => {
        setSelectedOperation(value);
    };

    return (
        <div>
            <Drawer
                id="Alot-regist-drawer"
                open={isOpen}
                handleClose={onClose}
                title="AIoT센서 등록"
                btns={drawerButtons}
            >
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
                                            <span className="text-req">
                                                상태
                                            </span>
                                        </th>
                                        <td>
                                            <SelectBasic
                                                size="m"
                                                placeholder="선택하세요"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span>주차장종류</span>
                                        </th>
                                        <td>
                                            <SelectBasic
                                                size="m"
                                                placeholder="50개씩 보기"
                                                className="선택하세요"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span className="text-req">
                                                주차장
                                            </span>
                                        </th>
                                        <td>
                                            <div className="flex items-stretch items-center gap-2">
                                                <Input
                                                    className="grow readOnly"
                                                    readOnly
                                                />
                                                <Button
                                                    type="outline"
                                                    size="m"
                                                    onClick={() =>
                                                        setIsModalOpen(true)
                                                    }
                                                >
                                                    조회
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span>파트너명</span>
                                        </th>
                                        <td>
                                            주차장을 등록하면 자동입력 됩니다.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span className="text-req">
                                                기기ID(DEUI)
                                            </span>
                                        </th>
                                        <td>
                                            <div className="flex gap-4">
                                                <Input className="grow" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span className="text-req">
                                                시리얼번호
                                            </span>
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
                                                        defaultChecked
                                                        onChange={() =>
                                                            handleOperationChange(
                                                                "구획"
                                                            )
                                                        }
                                                    />
                                                    <Input
                                                        className="grow"
                                                        disabled={
                                                            selectedOperation !==
                                                            "구획"
                                                        }
                                                    />
                                                </div>

                                                <div className="flex gap-2">
                                                    <Radio
                                                        name="operation"
                                                        label="구간"
                                                        onChange={() =>
                                                            handleOperationChange(
                                                                "구간"
                                                            )
                                                        }
                                                    />
                                                    <Input
                                                        className="grow"
                                                        disabled={
                                                            selectedOperation !==
                                                            "구간"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>통신 개통여부</th>
                                        <td>
                                            <div className="flex gap-4">
                                                <Radio
                                                    name="f2"
                                                    label="개통"
                                                    defaultChecked
                                                />
                                                <Radio
                                                    name="f2"
                                                    label="미개통"
                                                />
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
                                                <Button
                                                    type="gray"
                                                    className="h-auto"
                                                >
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
            <SearchParkingZone
                isOpen={isModalOpen}
                onClose={handleModalClose}
            />
        </div>
    );
};

export default AIotRegistDrawer;
