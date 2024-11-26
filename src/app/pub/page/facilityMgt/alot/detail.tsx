"use client";

import React, { useState } from "react";
import Drawer from "@pub/components/Drawer";
import Button from "@pub/components/Button";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Text from "@pub/components/Form/Text";
import FormDate from "@/app/pub/components/Form/Date";

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
                title="AIoT센서 상세"
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
                                        <td>강남구청</td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span className="text-req">
                                                기기ID(DEUI)
                                            </span>
                                        </th>
                                        <td>
                                            <div className="flex gap-4">
                                                <Input
                                                    className="grow"
                                                    value="15488518E551843w1g5e151515"
                                                />
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
                                                <Input
                                                    className="grow"
                                                    value=" 1544-5184422-5855155-5665"
                                                />
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
                                        <th>통신상태</th>
                                        <td>
                                            <div className="flex flex-col">
                                                <div className="flex items-center ">
                                                    <strong>OFF</strong>
                                                    <Button
                                                        type="black"
                                                        size="m"
                                                        className="self-center ml-auto"
                                                    >
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
                                                                <th>&nbsp;</th>
                                                                <th>
                                                                    <span className="text-req">
                                                                        이름
                                                                    </span>
                                                                </th>
                                                                <th>
                                                                    <span className="text-req">
                                                                        날짜
                                                                    </span>
                                                                </th>
                                                                <th>
                                                                    <span>
                                                                        점검/처리사유
                                                                    </span>
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
                                                                    <SelectBasic placeholder="선택하세요" />
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
                                                                    <SelectBasic placeholder="선택하세요" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>배터리교체일</th>
                                        <td>
                                            <div className="flex gap-4">
                                                <FormDate />
                                                <Input
                                                    className="grow"
                                                    value="홍길동"
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
                                    <tr>
                                        <td colSpan={2}>
                                            $관리자명(아이디)$ / $소속$ 센서상태
                                            점검 완료. YYYY-MM-DD hh:mm
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
            <SearchParkingZone
                isOpen={isModalOpen}
                onClose={handleModalClose}
            />
        </div>
    );
};

export default AIotRegistDrawer;
