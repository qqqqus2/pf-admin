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

export default function CouponMgtList() {
    return (
        <DefaultLayout>
            <Topbar
                title="쿠폰관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "포인트관리", url: "/" },
                    { text: "쿠폰관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box">
                    <ul>
                        <li className="col-span-2">
                            <p className="inline-flex items-center gap-2">
                                쿠폰유형
                            </p>
                            <div className="flex items-center gap-6">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="온라인쿠폰" />
                                <Checkbox label="웰컴쿠폰" />
                                <Checkbox label="첫구매쿠폰" />
                                <Checkbox label="오프라인쿠폰" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                상태
                            </p>
                            <div className="flex items-center gap-6">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="진행중" />
                                <Checkbox label="대기" />
                                <Checkbox label="종료" />
                                <Checkbox label="중지" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                사용 여부
                            </p>
                            <div className="flex items-center gap-6">
                                <Radio name="f2" label="전체" defaultChecked />
                                <Radio name="f2" label="사용(Y)" />
                                <Radio name="f2" label="사용안함(N)" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p className="inline-flex items-center gap-2">
                                검색어
                            </p>
                            <Input
                                placeholder="검색어를 입력하세요."
                                className="grow"
                            />
                        </li>
                        <li className="col-span-2">
                            <p>기간</p>
                            <div className="flex items-center gap-2">
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
                                <col width="120px" />
                                <col />
                                <col width="200px" />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>쿠폰번호</th>
                                    <th>사용여부</th>
                                    <th>진행상태</th>
                                    <th>쿠폰명</th>
                                    <th>쿠폰유형</th>
                                    <th>할인율/금액</th>
                                    <th>유효기간</th>
                                    <th>발급시작일</th>
                                    <th>발급종료일</th>
                                    <th>발급현황&#40;발급/사용&#41;</th>
                                    <th>작성자</th>
                                    <th>작성일시</th>
                                    <th>최종수정자</th>
                                    <th>최종수정일자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10</td>
                                    <td>NNNNN</td>
                                    <td>사용</td>
                                    <td>진행중</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="flex items-center gap-1"
                                        >
                                            <span className="underline text-green">
                                                쿠폰명이 노출됩니다.
                                            </span>
                                        </button>
                                    </td>
                                    <td>등급별쿠폰</td>
                                    <td>5%</td>
                                    <td>유효기간</td>
                                    <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>
                                        200매 /{" "}
                                        <span className="text-green">30</span>매
                                        <div className="flex justify-center gap-1">
                                            <Button type="gray" size="s">
                                                현장조회
                                            </Button>
                                            <Button type="outline" size="s">
                                                QR코드
                                            </Button>
                                        </div>
                                    </td>
                                    <td>김파프&#40;adminId&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>김파프&#40;adminId&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>NNNNN</td>
                                    <td>사용</td>
                                    <td>진행중</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="flex items-center gap-1"
                                        >
                                            <span className="underline text-green">
                                                쿠폰명이 노출됩니다.
                                            </span>
                                        </button>
                                    </td>
                                    <td>등급별쿠폰</td>
                                    <td>5%</td>
                                    <td>유효기간</td>
                                    <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>
                                        200매 /{" "}
                                        <span className="text-green">30</span>매
                                        <div className="flex justify-center gap-1">
                                            <Button type="gray" size="s">
                                                현장조회
                                            </Button>
                                        </div>
                                    </td>
                                    <td>김파프&#40;adminId&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>김파프&#40;adminId&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-4 items-center mt-6">
                        <Button
                            type="blue"
                            size="m"
                            className="justify-self-start"
                        >
                            등록
                        </Button>
                        <Paging className="col-start-2 col-span-2" />
                        <Button
                            type="outline"
                            size="m"
                            className="justify-self-end"
                        >
                            <IcExcel />
                            엑셀다운로드
                        </Button>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
