"use client";

import React, { useState } from "react";
import Drawer from "@pub/components/Drawer";
import Button from "@pub/components/Button";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Checkbox from "@pub/components/Form/Check";
import Text from "@pub/components/Form/Text";

import FormDate from "@pub/components/Form/Date";
import FormTime from "@pub/components/Form/Time";

const VoucherMgtRegist = ({ isOpen, onClose }) => {
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

    return (
        <div>
            <Drawer
                id="voucher-regist-drawer"
                open={isOpen}
                handleClose={onClose}
                title="상품권 등록"
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
                                            <div className="flex gap-4 items-center">
                                                <FormDate size="m" />
                                                <FormTime size="s" />
                                                ~
                                                <FormDate size="m" disabled />
                                                <FormTime size="s" disabled />
                                            </div>
                                            <Checkbox label="무제한" className="mt-2" />
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
        </div>
    );
};

export default VoucherMgtRegist;
