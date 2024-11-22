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

export default function PointMgtList() {
    return (
        <DefaultLayout>
            <Topbar
                title="포인트관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "포인트관리", url: "/" },
                    { text: "포인트관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box">
                    <ul>
                        <li className="col-span-2">
                            <p className="inline-flex items-center gap-2">
                                구분
                            </p>
                            <div className="flex items-center gap-6">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="적립" />
                                <Checkbox label="사용" />
                                <Checkbox label="소멸" />
                                <Checkbox label="취소" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p className="inline-flex items-center gap-2">
                                종류
                            </p>
                            <div className="flex items-center gap-6">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="구매포인트" />
                                <Checkbox label="이벤트포인트" />
                                <Checkbox label="상품권등록" />
                                <Checkbox label="고객보상포인트" />
                                <Checkbox label="배정자 정산포인트" />
                                <Checkbox label="제휴포인트" />
                                <Checkbox label="제보포인트" />
                                <Checkbox label="감면포인트전환" />
                                <Checkbox label="상품권전환" />
                                <Checkbox label="파깅프렌즈포인트전환" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                포인트 전환여부
                            </p>
                            <div className="flex items-center gap-6">
                                <Radio name="f1" label="전체" defaultChecked />
                                <Radio name="f1" label="전환" />
                                <Radio name="f1" label="미전환" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                상품권 지급여부
                            </p>
                            <div className="flex items-center gap-6">
                                <Radio name="f2" label="전체" defaultChecked />
                                <Radio name="f2" label="지급대기" />
                                <Radio name="f2" label="지급완료" />
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
                <div className="box-cont gap-30">
                    <div className="table-basic">
                        <p className="h4 mb-4">포인트현황</p>
                        <table>
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>적립</th>
                                    <th>사용</th>
                                    <th>소멸</th>
                                    <th>취소</th>
                                    <th>합계</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-right">
                                    <td>
                                        <span className="text-blue-400">
                                            100,000
                                        </span>{" "}
                                        p
                                    </td>
                                    <td>
                                        <span className="text-red">
                                            - 20,000
                                        </span>{" "}
                                        p
                                    </td>
                                    <td>
                                        <span className="text-red">
                                            - 10,000
                                        </span>{" "}
                                        p
                                    </td>
                                    <td>
                                        <span className="text-red">
                                            - 10,000
                                        </span>{" "}
                                        p
                                    </td>
                                    <td>
                                        <strong>10,000 p</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-basic">
                        <p className="h4 mb-4">포인트종류별 적립현황</p>
                        <table>
                            <colgroup>
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
                                    <th>구매포인트</th>
                                    <th>이벤트포인트</th>
                                    <th>상품권등록</th>
                                    <th>고객보상포인트</th>
                                    <th>제휴포인트</th>
                                    <th>제보포인트</th>
                                    <th>합계</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-right">
                                    <td>
                                        <span>8,000</span> p
                                    </td>
                                    <td>
                                        <span>8,000</span> p
                                    </td>
                                    <td>
                                        <span>2,000</span> p
                                    </td>
                                    <td>
                                        <span>50,000</span> p
                                    </td>
                                    <td>
                                        <span>0</span> p
                                    </td>
                                    <td>
                                        <span>10,000</span> p
                                    </td>
                                    <td>
                                        <span className="text-blue-400">
                                            100,000
                                        </span>{" "}
                                        p
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex gap-5">
                        <div className="table-basic">
                            <p className="h4 mb-4">배정자포인트 현황</p>
                            <table>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>배정자포인트 합계</th>
                                        <th>전환포인트</th>
                                        <th>미전환포인트</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-right">
                                        <td>
                                            <span className="text-blue-400">
                                                - 10,000
                                            </span>{" "}
                                            p
                                        </td>
                                        <td>
                                            <span>100,000</span> p
                                        </td>
                                        <td>
                                            <span>100,000</span> p
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-basic">
                            <div className="flex mb-4">
                                <p className="h4">전환포인트 현황</p>
                                <p className="h5 ml-auto">
                                    상품권전환 지급완료 00 건 / 지급대기 00 건
                                </p>
                            </div>

                            <table>
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>감면포인트</th>
                                        <th>상품권</th>
                                        <th>파프포인트</th>
                                        <th>합계</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-right">
                                        <td>
                                            <span>8,000</span> p
                                        </td>
                                        <td>
                                            <span>8,000</span> p
                                        </td>
                                        <td>
                                            <span>2,000</span> p
                                        </td>
                                        <td>
                                            <span className="text-blue-400">
                                                100,000
                                            </span>{" "}
                                            p
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Button type="blue" size="m" className="ml-auto">
                            선택지급완료
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="flex items-center min-h-[2.5rem] gap-3">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <Button
                            type="outline"
                            size="s"
                            className="justify-self-end"
                        >
                            <IcExcel />
                            상품권신청정보다운로드
                        </Button>
                        <SelectBasic
                            size="m"
                            placeholder="50개씩 보기"
                            className="ml-auto"
                        />
                    </div>
                    <div className="table-grid mt-4">
                        <table>
                            <colgroup>
                                <col width="40px" />
                                <col width="60px" />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col width="100px" />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col width="200px" />
                                <col />
                                <col width="120px" />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>
                                        <Checkbox />
                                    </th>
                                    <th>번호</th>
                                    <th>구분</th>
                                    <th>이름</th>
                                    <th>휴대전화번호</th>
                                    <th>차량번호</th>
                                    <th>적립/사용/소멸/최소일시</th>
                                    <th>적립</th>
                                    <th>사용</th>
                                    <th>소멸</th>
                                    <th>취소</th>
                                    <th>종류</th>
                                    <th>내용</th>
                                    <th>관리자 코멘트</th>
                                    <th>유효기간</th>
                                    <th>작성자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <Checkbox />
                                    </th>
                                    <td>10</td>
                                    <td>적립</td>
                                    <td>홍*동</td>
                                    <td>010-****-9932</td>
                                    <td>25저 9899</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>500p</td>
                                    <td>10p</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>구매포인트</td>
                                    <td>구매적립</td>
                                    <td>-</td>
                                    <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                                    <td>system</td>
                                </tr>
                                <tr>
                                    <th>
                                        <Checkbox />
                                    </th>
                                    <td>9</td>
                                    <td>적립</td>
                                    <td>홍*동</td>
                                    <td>010-****-9932</td>
                                    <td>25저 9899</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>500p</td>
                                    <td>&nbsp;</td>
                                    <td>100p</td>
                                    <td>&nbsp;</td>
                                    <td>구매포인트</td>
                                    <td>구매적립</td>
                                    <td>-</td>
                                    <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                                    <td>system</td>
                                </tr>
                                <tr>
                                    <th>
                                        <Checkbox />
                                    </th>
                                    <td>8</td>
                                    <td>적립</td>
                                    <td>홍*동</td>
                                    <td>010-****-9932</td>
                                    <td>25저 9899</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td colSpan={4}>10,500p</td>
                                    <td>구매포인트</td>
                                    <td>구매적립</td>
                                    <td>-</td>
                                    <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                                    <td>system</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-4 items-center mt-6">
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
