"use client";
import React, { useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";

import Regist from "../regist";
import Detail from "../detail";

export default function VoucherMgtList() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerType, setDrawerType] = useState(null);

    const handleClose = () => {
        setIsDrawerOpen(false);
        setTimeout(() => {
            setDrawerType(null);
        }, 300);
    };

    // 등록 drawer
    const openRegistDrawer = () => {
        setDrawerType("regist");
        setIsDrawerOpen(true);
    };

    // 상세 drawer
    const openDetailDrawer = () => {
        setDrawerType("detail");
        setIsDrawerOpen(true);
    };
    return (
        <DefaultLayout>
            <Topbar
                title="포인트상품권관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "쿠폰/포인트관리", url: "/" },
                    { text: "포인트상품권관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box">
                    <ul>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                판매처
                            </p>
                            <div className="flex items-center gap-6">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="스마트스토어" />
                                <Checkbox label="카카오쇼핑" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                사용여부
                            </p>
                            <div className="flex items-center gap-6">
                                <Radio name="f1" label="전체" defaultChecked />
                                <Radio name="f1" label="사용(Y)" />
                                <Radio name="f1" label="사용안함(N)" />
                            </div>
                        </li>

                        <li className="col-span-2">
                            <p className="inline-flex items-center gap-2">
                                검색어
                            </p>
                            <div className="inline-flex items-center gap-2">
                                <SelectBasic size="m" placeholder="전체" />
                                <Input
                                    placeholder="검색어를 입력하세요."
                                    className="grow"
                                />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>기간</p>
                            <div className="flex items-center gap-2">
                                <SelectBasic size="m" placeholder="전체" />
                                <FormDateRange />
                                <ButtonGroup />
                            </div>
                        </li>
                    </ul>
                    <div className="search-btn">
                        <Button type="green" size="m">
                            검색
                        </Button>
                    </div>
                </div>
                {/* //search box */}

                <div>
                    <div className="flex items-center min-h-[2.5rem]">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <div className="ml-auto flex flex-wrap gap-3">
                            <SelectBasic size="m" placeholder="최근등록순" />
                            <SelectBasic size="m" placeholder="50개씩 보기" />
                        </div>
                    </div>
                    <div className="table-grid mt-4">
                        <table>
                            <colgroup>
                                <col width="60px" />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col width="200px" />
                                <col width="160px" />
                                <col />
                                <col />
                                <col width="120px" />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>상품권코드</th>
                                    <th>사용여부</th>
                                    <th>상품권명</th>
                                    <th>판매처</th>
                                    <th>판매기관</th>
                                    <th>난수번호</th>
                                    <th>생성코드수</th>
                                    <th>등록코드수</th>
                                    <th>등록일시</th>
                                    <th>등록자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10</td>
                                    <td>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                openDetailDrawer();
                                            }}
                                        >
                                            NNNNN
                                        </a>
                                    </td>
                                    <td>사용</td>
                                    <td>주차상품권 1만원권</td>
                                    <td>스마트스토어</td>
                                    <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                                    <td>
                                        <Button type="outline" size="s">
                                            난수번호생성
                                        </Button>
                                    </td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>김파프&#40;adminId&#41;</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                openDetailDrawer();
                                            }}
                                        >
                                            NNNNN
                                        </a>
                                    </td>
                                    <td>사용</td>
                                    <td>주차상품권 1만원권</td>
                                    <td>카카오쇼핑</td>
                                    <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                                    <td>
                                        <Button type="outline" size="s">
                                            <IcExcel />
                                            엑셀다운로드
                                        </Button>
                                    </td>
                                    <td>3,000</td>
                                    <td>100</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>김파프&#40;adminId&#41;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-4 items-center mt-6">
                        <Paging className="col-start-2 col-span-2" />
                        <div className="flex ml-auto items-center gap-3">
                            <Button
                                type="outline"
                                size="m"
                                className="justify-self-end"
                            >
                                <IcExcel />
                                엑셀다운로드
                            </Button>
                            <Button
                                type="black"
                                size="m"
                                className="justify-self-start"
                                onClick={openRegistDrawer}
                            >
                                등록
                            </Button>
                        </div>
                    </div>
                </div>
                {/* 등록 Drawer */}
                <Regist
                    key="regist-drawer"
                    isOpen={isDrawerOpen && drawerType === "regist"}
                    onClose={handleClose}
                />
                {/* 상세 Drawer */}
                <Detail
                    key="detail-drawer"
                    isOpen={isDrawerOpen && drawerType === "detail"}
                    onClose={handleClose}
                />
            </div>
        </DefaultLayout>
    );
}
