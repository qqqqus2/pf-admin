"use client";

import React, { useEffect, useState } from "react";
import Button from "@pub/components/Button";
import Input from "@pub/components/Form/Input";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import FormDateRange from "@pub/components/Form/DateRange";
import Text from "@pub/components/Form/Text";
// X 아이콘
const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);
interface RegistePopProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RegistePop({ isOpen, onClose }: RegistePopProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            const timer = setTimeout(() => {
                setShow(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen && !show) return null;

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
            }`}
        >
            {/* 팝업 - bg */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                    isOpen ? "bg-opacity-50" : "bg-opacity-0"
                }`}
                onClick={onClose}
            />

            {/* 우측으로 나오는 팝업 */}
            <div
                className={`fixed right-0 top-0 p-10 h-full w-[860px] bg-white shadow-xl transform transition-transform duration-300 ease-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ willChange: "transform" }}
            >
                {/* 팝업 헤더 */}
                <div className="flex">
                    <button onClick={onClose} className="ml-auto mb-[24px]">
                        <CloseIcon />
                    </button>
                </div>
                <div className="flex items-center justify-between pb-4">
                    <h2 className="h1">상품권 등록</h2>
                    <div className="ml-auto flex gap-2">
                        <Button type="black" size="m" onClick={onClose}>
                            취소
                        </Button>
                        <Button
                            type="green"
                            size="m"
                            onClick={() => {
                                onClose();
                            }}
                        >
                            저장
                        </Button>
                    </div>
                </div>
                {/* 팝업 contents */}
                <div className="h-[calc(100%-140px)] overflow-y-auto">
                    <div className="table-basic">
                        <table>
                            <colgroup>
                                <col width="120px" />
                                <col />
                                <col width="120px" />
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
                                        <span className="text-req">
                                            상품권명
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <Input className="grow" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <span className="text-req">
                                            상품권금액
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <div className="inline-flex items-center gap-2">
                                            <Input size="m" className="grow" />{" "}
                                            원
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <span className="text-req">
                                            판매기간
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <div className="flex gap-4">
                                            <FormDateRange />
                                            <Checkbox label="무제한" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <span className="text-req">
                                            유효기간
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <div className="inline-flex items-center gap-2">
                                            상품권등록일로부터
                                            <Input size="m" className="grow" />
                                            일 &#40;최대 3년 &#41;
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <span className="text-req">
                                            발급수량
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <div className="inline-flex items-center gap-2">
                                            <Input size="m" className="grow" />
                                            매
                                        </div>
                                        <div className="list-common mt-2">
                                            <ul>
                                                <li>
                                                    난수발급 이후에는 정보
                                                    수정을 할 수 없습니다.
                                                </li>
                                                <li>
                                                    상품권변경을 하시려면 신규로
                                                    등록해주시기 바랍니다.
                                                </li>
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
                                <col width="120px" />
                                <col />
                                <col width="120px" />
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
        </div>
    );
}
