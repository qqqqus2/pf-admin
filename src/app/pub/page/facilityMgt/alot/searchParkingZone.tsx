"use client";
import Button from "@pub/components/Button";
import Input from "@pub/components/Form/Input";
import Checkbox from "@pub/components/Form/Check";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import ButtonGroup from "@pub/components/Button/Group2";
import Paging from "@pub/components/Grid/Paging";
import IcExcel from "@/assets/icons/ico_excel.svg";

import Modal from "@pub/components/Modal";

const searchParkingZone = ({ isOpen, onClose }) => {
    const modalButtons = [
        {
            type: "black",
            icon: false,
            label: "취소",
        },
        {
            type: "green",
            icon: false,
            label: "확인",
        },
    ];
    return (
        <Modal
            open={isOpen}
            handleClose={onClose}
            title="주차장 조회"
            size="l"
            btns={modalButtons}
        >
            <div className="max-h-[calc(100vh-13rem)] overflow-y-auto">
                <div className="search-box">
                    <div className="table-basic mt-4">
                        <table>
                            <colgroup>
                                <col width="130px" />
                                <col />
                                <col width="130px" />
                                <col />
                            </colgroup>

                            <tbody>
                                <tr>
                                    <th>상태</th>
                                    <td>
                                        <SelectBasic
                                            size="m"
                                            placeholder="전체"
                                        />
                                    </td>
                                    <th>종류</th>
                                    <td>
                                        <SelectBasic
                                            size="m"
                                            placeholder="전체"
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <th>파트너</th>
                                    <td colSpan={3}>
                                        <div className="flex gap-4">
                                            <SelectBasic
                                                size="m"
                                                placeholder="대분류를 선택하세요"
                                            />
                                            <SelectBasic
                                                size="m"
                                                disabled
                                                placeholder="소분류를 선택하세요"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>검색어</th>
                                    <td colSpan={3}>
                                        <div className="flex">
                                            <Input className="grow" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>기간</th>
                                    <td colSpan={3}>
                                        <div className="flex flex-wrap gap-2">
                                            <SelectBasic
                                                size="s"
                                                placeholder="전체"
                                            />
                                            <FormDateRange />
                                            <ButtonGroup />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="search-btn mt-4 flex justify-self-end">
                        <Button type="green" size="m">
                            검색
                        </Button>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flex items-center min-h-[2.5rem] gap-3">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <SelectBasic
                            size="m"
                            placeholder="50개씩 보기"
                            className="ml-auto"
                        />
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
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>
                                        <Checkbox />
                                    </th>
                                    <th>주차장번호</th>
                                    <th>상태</th>
                                    <th>주차장명</th>
                                    <th>종류</th>
                                    <th>담당자</th>
                                    <th>등록자</th>
                                    <th>등록일시</th>
                                    <th>최종수정자</th>
                                    <th>최종수정일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <Checkbox />
                                    </th>
                                    <td>NNNNN</td>
                                    <td>정보등록증</td>
                                    <td>
                                        자양동 래미안 프리미어 필리스
                                        <br />
                                        (아마노코리아)
                                    </td>
                                    <td>일반제휴</td>
                                    <td>이동훈/사업실</td>
                                    <td>김파프&#40;adminId&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>김파프&#40;adminId&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                </tr>
                                <tr>
                                    <th>
                                        <Checkbox />
                                    </th>
                                    <td>NNNNN</td>
                                    <td>주차면세팅중</td>
                                    <td>
                                        자양동 래미안 프리미어 필리스
                                        <br />
                                        (아마노코리아)
                                    </td>
                                    <td>일반제휴</td>
                                    <td>이동훈/사업실</td>
                                    <td>김파프&#40;adminId&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>김파프&#40;adminId&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-4 items-center mt-6">
                        <Paging className="col-start-2 col-span-2" />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default searchParkingZone;
