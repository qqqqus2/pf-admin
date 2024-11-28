"use client";

import React, { useState } from "react";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group2";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";

import Regist from "./regist";
import Detail from "./detail";

export const AlotTab = () => {
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
        <div>
            {/* 최상위 div로 감싸기 */}
            <div className="search-box">
                <ul>
                    <li>
                        <p className="inline-flex items-center gap-2">상태</p>
                        <div className="flex items-center gap-6">
                            <Checkbox label="전체" defaultChecked />
                            <Checkbox label="운영중" />
                            <Checkbox label="공사중" />
                            <Checkbox label="철거" />
                            <Checkbox label="폐기" />
                        </div>
                    </li>
                    <li>
                        <p className="inline-flex items-center gap-2">주차장종류</p>
                        <div className="flex items-center gap-6">
                            <SelectBasic size="m" placeholder="전체" />
                        </div>
                    </li>
                    <li>
                        <p className="inline-flex items-center gap-2">통신 개통여부</p>
                        <div className="flex items-center gap-6">
                            <Radio name="f1" label="전체" defaultChecked />
                            <Radio name="f1" label="개통(Y)" />
                            <Radio name="f1" label="미개통(N)" />
                        </div>
                    </li>
                    <li>
                        <p className="inline-flex items-center gap-2">통신상태</p>
                        <div className="flex items-center gap-6">
                            <Radio name="f2" label="전체" defaultChecked />
                            <Radio name="f2" label="ON" />
                            <Radio name="f2" label="OFF" />
                        </div>
                    </li>
                    <li>
                        <p className="inline-flex items-center gap-2">주차장 종류</p>
                        <div className="flex items-center gap-6">
                            <Radio name="f3" label="전체" defaultChecked />
                            <Radio name="f3" label="사용(Y)" />
                            <Radio name="f3" label="사용안함(N)" />
                        </div>
                    </li>
                    <li className="col-span-2">
                        <p className="inline-flex items-center gap-2">검색어</p>
                        <div className="inline-flex items-center gap-2">
                            <SelectBasic size="m" placeholder="전체" />
                            <Input placeholder="검색어를 입력하세요." className="grow" />
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
            <div className="mt-8">
                <div className="flex items-center min-h-[2.5rem]">
                    <div className="flex items-center gap-3">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>

                        <Button type="outline" size="s" className="justify-self-end">
                            <IcExcel />
                            일괄삭제
                        </Button>
                    </div>

                    <div className="ml-auto flex flex-wrap items-center gap-3">
                        <Button type="outline" size="s" className="justify-self-end">
                            <IcExcel />
                            양식다운로드
                        </Button>
                        <Button type="outline" size="s" className="justify-self-end">
                            <IcExcel />
                            일괄등록
                        </Button>
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
                            <col />
                            <col />
                            <col />
                            <col width="60px" />
                            <col />
                            <col width="150px" />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>
                                    <Checkbox />
                                </th>
                                <th>번호</th>
                                <th>기기ID</th>
                                <th>상태</th>
                                <th>주차장종류</th>
                                <th>주차장번호</th>
                                <th>주차장명</th>
                                <th>파트너명</th>
                                <th>통신개통여부</th>
                                <th>통신상태</th>
                                <th>시리얼 번호</th>
                                <th>최초설치자</th>
                                <th>최초설치일자</th>
                                <th>최종수정자</th>
                                <th>최종수정일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Checkbox />
                                </td>
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
                                <td>운용중</td>
                                <td>그린파킹</td>
                                <td>99999999</td>
                                <td>강남스마트 공유 주차장 101</td>
                                <td>강남구청</td>
                                <td>Y</td>
                                <td>ON</td>
                                <td>382930HIGE92</td>
                                <td>김파프&#40;adminId&#41;</td>
                                <td>yyyy-mm-dd 00:00</td>
                                <td>김파프&#40;adminId&#41;</td>
                                <td>yyyy-mm-dd 00:00</td>
                            </tr>
                            <tr>
                                <th>
                                    <Checkbox />
                                </th>
                                <td>9</td>
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
                                <td>운용중</td>
                                <td>그린파킹</td>
                                <td>99999999</td>
                                <td>강남스마트 공유 주차장 101</td>
                                <td>강남구청</td>
                                <td>Y</td>
                                <td>ON</td>
                                <td>382930HIGE92</td>
                                <td>김파프&#40;adminId&#41;</td>
                                <td>yyyy-mm-dd 00:00</td>
                                <td>김파프&#40;adminId&#41;</td>
                                <td>yyyy-mm-dd 00:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="grid grid-cols-4 items-center mt-6">
                    <Button type="outline" size="m" className="justify-self-start">
                        선택삭제
                    </Button>
                    <Paging className="col-start-2 col-span-2" />
                    <div className="flex ml-auto items-center gap-3">
                        <Button type="outline" size="m" className="justify-self-end">
                            <IcExcel />
                            엑셀다운로드
                        </Button>
                        <Button type="black" size="m" className="justify-self-start" onClick={openRegistDrawer}>
                            등록
                        </Button>
                    </div>
                </div>
            </div>
            {/* 등록 Drawer */}
            <Regist key="regist-drawer" isOpen={isDrawerOpen && drawerType === "regist"} onClose={handleClose} />
            {/* 상세 Drawer */}
            <Detail key="detail-drawer" isOpen={isDrawerOpen && drawerType === "detail"} onClose={handleClose} />
        </div>
    );
};
