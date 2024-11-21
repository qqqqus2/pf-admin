import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Flag from "@pub/components/Flag";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Checkbox from "@pub/components/Form/Check";
import Paging from "@pub/components/Grid/Paging";
import IcArrowRight from "@/assets/icons/ico_arrow_right.svg";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcExcel from "@/assets/icons/ico_excel.svg";
import IcTagGreen from "@/assets/icons/ico_tag_green.svg";
import IcTagRed from "@/assets/icons/ico_tag_red.svg";

export default function Detail01() {
  return (
    <DefaultLayout>
      <Topbar
        checked
        title="회원관리조회/상세"
        path={[
          { text: "홈", url: "/" },
          { text: "사용자관리", url: "/" },
          { text: "조회 · 상세", url: "/" },
        ]}
      />

      <div className="box-cont">
        {/* 회원기본정보 */}
        <div>
          <p className="h4">회원기본정보</p>
          <div className="table-basic mt-4">
            <table>
              <colgroup>
                <col width="152px" />
                <col />
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">회원번호</th>
                  <td>
                    3231344
                    <div className="inline-flex items-center gap-[0.375rem] ml-2">
                      <Button type="outline" size="s">
                        복사
                      </Button>
                      <Button type="blue" size="s">
                        쿠폰발급현황
                      </Button>
                      <Button type="outline" size="s">
                        상세보기
                        <IcArrowRight />
                      </Button>
                    </div>
                  </td>
                  <th scope="row">계정상태</th>
                  <td>
                    <div className="flex items-center gap-2">
                      활성
                      <Flag type="black" size="s" label="Black" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">회원유형</th>
                  <td>APP회원</td>
                  <th scope="row">CI값</th>
                  <td>2024-01-31 00:00 / 휴대폰인증</td>
                </tr>
                <tr>
                  <th scope="row">휴대폰번호</th>
                  <td>010-2244-1234</td>
                  <th scope="row">이메일</th>
                  <td>parking@email.com</td>
                </tr>
                <tr>
                  <th scope="row">이름&#40;닉네임&#41;</th>
                  <td>홍길동</td>
                  <th scope="row">마케팅활용동의</th>
                  <td>3&#40;2024-01-31 00:00&#41;</td>
                </tr>
                <tr>
                  <th scope="row">간편로그인</th>
                  <td>네이버</td>
                  <th scope="row">가입일시</th>
                  <td>2024-01-31 00:00</td>
                </tr>
                <tr>
                  <th scope="row">최종접속일시</th>
                  <td>2024-01-31 00:00</td>
                  <th scope="row">최종결제주차장</th>
                  <td>주차장명</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 회원추가정보 */}
        <div>
          <div className="flex items-center gap-3">
            <p className="h4">회원추가정보</p>
            <span
              data-tooltip-id="tooltip"
              data-tooltip-content="회원가입 및 마이페이지에서 추가정보 입력이 가능하나, 필수입력은 아닙니다."
            >
              <IcInfo />
            </span>
          </div>
          <div className="table-basic mt-4">
            <table>
              <colgroup>
                <col width="152px" />
                <col />
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">차량번호</th>
                  <td>
                    <span className="underline">123가1234</span>
                  </td>
                  <th scope="row">초대코드</th>
                  <td>abcdefg</td>
                </tr>
                <tr>
                  <th scope="row">마이페이지추가정보</th>
                  <td>차량모델명</td>
                  <th scope="row">마이페이지추가정보</th>
                  <td>차량색상</td>
                </tr>
                <tr>
                  <th scope="row">마이페이지추가정보</th>
                  <td>차량제조사</td>
                  <th scope="row">마이페이지추가정보</th>
                  <td>parking@email.com</td>
                </tr>
              </tbody>
            </table>
            <table>
              <colgroup>
                <col width="152px" />
                <col />
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">차량번호</th>
                  <td>
                    <span className="underline">123가1234</span>
                  </td>
                  <th scope="row">초대코드</th>
                  <td>abcdefg</td>
                </tr>
                <tr>
                  <th scope="row">마이페이지추가정보</th>
                  <td>차량모델명</td>
                  <th scope="row">마이페이지추가정보</th>
                  <td>차량색상</td>
                </tr>
                <tr>
                  <th scope="row">마이페이지추가정보</th>
                  <td>차량제조사</td>
                  <th scope="row">마이페이지추가정보</th>
                  <td>parking@email.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 회원이력정보 */}
        <div>
          <div className="flex items-center gap-3">
            <p className="h4">회원이력정보</p>
            <span
              data-tooltip-id="tooltip"
              data-tooltip-html="조회날짜 어제까지를 기준으로 이력이 카운팅되며,<br />대시보드/최종 완료 후 데이터와 상이할 수 있습니다."
            >
              <IcInfo />
            </span>
          </div>
          <div className="table-basic mt-4">
            <table>
              <colgroup>
                <col width="152px" />
                <col />
                <col width="152px" />
                <col />
                <col width="152px" />
                <col />
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">현재포인트</th>
                  <td colSpan={7}>
                    <div className="flex items-center gap-3">
                      <span className="text-green">12,234P</span>
                      <span>총 22,234P / 사용 10,000P / 소멸예정 10,000P</span>
                      <span className="text-red ml-auto">
                        ※소멸예정은 당월 말 기준입니다
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">결제</th>
                  <td colSpan={7}>
                    <span className="text-green">32건</span>
                    <span className="mx-3">총 35건 / 취소 1건 / 환불 2건</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">리뷰</th>
                  <td>
                    <span className="text-green">32건</span>
                  </td>
                  <th scope="row">제보</th>
                  <td>
                    <span className="text-green">5건</span>
                  </td>
                  <th scope="row">신고</th>
                  <td>2건</td>
                  <th scope="row">접속</th>
                  <td>50회</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 내역 Tabs */}
        <TabGroup className="tab-basic">
          <TabList>
            <Tab>포인트내역</Tab>
            <Tab>결제내역</Tab>
            <Tab>상담내역</Tab>
            <Tab>리뷰내역</Tab>
            <Tab>제보이력</Tab>
            <Tab>신고이력</Tab>
            <Tab>접속이력</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="table-grid">
                <table>
                  <colgroup>
                    <col width="60px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>
                        <Checkbox />
                      </th>
                      <th>유형</th>
                      <th>상세내용</th>
                      <th>일시</th>
                      <th>적립</th>
                      <th>사용</th>
                      <th>취소</th>
                      <th>소멸</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Checkbox />
                      </td>
                      <td>유효기간 만료</td>
                      <td>2939958595</td>
                      <td>2024-01-31 00:00</td>
                      <td>1,000</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr className="bg-cell-green">
                      <td>
                        <Checkbox />
                      </td>
                      <td>유효기간 만료</td>
                      <td>2939958595</td>
                      <td>2024-01-31 00:00</td>
                      <td>1,000</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr className="bg-cell-red">
                      <td>
                        <Checkbox />
                      </td>
                      <td>유효기간 만료</td>
                      <td>2939958595</td>
                      <td>2024-01-31 00:00</td>
                      <td>1,000</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <Checkbox />
                      </td>
                      <td>유효기간 만료</td>
                      <td>2939958595</td>
                      <td>2024-01-31 00:00</td>
                      <td>1,000</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <Checkbox />
                      </td>
                      <td>유효기간 만료</td>
                      <td>2939958595</td>
                      <td>2024-01-31 00:00</td>
                      <td>1,000</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-4 items-center mt-6">
                <Paging className="col-start-2 col-span-2" />
                <Button type="outline" size="m" className="justify-self-end">
                  <IcExcel />
                  엑셀다운로드
                </Button>
              </div>
            </TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
            <TabPanel>Content 4</TabPanel>
            <TabPanel>Content 5</TabPanel>
            <TabPanel>Content 6</TabPanel>
            <TabPanel>Content 7</TabPanel>
          </TabPanels>
        </TabGroup>

        {/* 비정상 활동 감지 */}
        <div>
          <div className="flex items-center gap-3">
            <p className="h4">비정상 활동 감지</p>
            <span
              data-tooltip-id="tooltip"
              data-tooltip-content="일정 규칙에 의해 비정상 활동으로 자동 감지한 내용을 표기합니다. 검토 후 블랙리스트 또는 계정정지 여부를 확인하세요."
            >
              <IcInfo />
            </span>
          </div>
          <div className="table-grid mt-4">
            <table>
              <colgroup>
                <col width="60px" />
                <col />
                <col />
                <col />
                <col />
                <col width="280px" className="bg-cell-red" />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <Checkbox />
                  </th>
                  <th>활동 감지 일시</th>
                  <th>유형</th>
                  <th>예약번호</th>
                  <th>차량번호</th>
                  <th className="bg-h-red">상태</th>
                  <th>주차장</th>
                  <th>예약일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>2024-01-01 00:00</td>
                  <td>동일시간대 결제</td>
                  <td>
                    <span className="underline">R23566</span>
                  </td>
                  <td>12가1234</td>
                  <td>
                    <span className="inline-flex items-center">
                      <IcTagGreen className="mr-2" />
                      활성
                    </span>
                  </td>
                  <td>12가1234</td>
                  <td>
                    <Button type="outline" size="s">
                      <IcExcel />
                      엑셀다운로드
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>2024-01-01 00:00</td>
                  <td>동일시간대 결제</td>
                  <td>
                    <span className="underline">R23566</span>
                  </td>
                  <td>12가1234</td>
                  <td>
                    <span className="inline-flex items-center">
                      <IcTagRed className="mr-2" />
                      활성
                    </span>
                  </td>
                  <td>12가1234</td>
                  <td>2024-01-01 00:00</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>2024-01-01 00:00</td>
                  <td>동일시간대 결제</td>
                  <td>
                    <span className="underline">R23566</span>
                  </td>
                  <td>12가1234</td>
                  <td>B2G / 송파구청</td>
                  <td>12가1234</td>
                  <td>2024-01-01 00:00</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>2024-01-01 00:00</td>
                  <td>동일시간대 결제</td>
                  <td>
                    <span className="underline">R23566</span>
                  </td>
                  <td>12가1234</td>
                  <td>B2G / 송파구청</td>
                  <td>12가1234</td>
                  <td>2024-01-01 00:00</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>2024-01-01 00:00</td>
                  <td>동일시간대 결제</td>
                  <td>
                    <span className="underline">R23566</span>
                  </td>
                  <td>12가1234</td>
                  <td>B2G / 송파구청</td>
                  <td>12가1234</td>
                  <td>2024-01-01 00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Button type="outline" size="m">
              삭제
            </Button>
            <Paging />
            <Button type="outline" size="m">
              <IcExcel />
              엑셀다운로드
            </Button>
          </div>
        </div>
        <div>
          <p className="h4">관리자 영역</p>
          <div className="table-basic mt-4">
            <table>
              <colgroup>
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th className="bg-h-green">블랙리스트 적용</th>
                  <td>
                    <div className="flex justify-between items-center">
                      <Checkbox />
                      <span className="text-red">
                        ※블랙리스트는 내부관리용으로 회원에게 표기되지 않으며,
                        회원에게 활동제약이 있진 않습니다.
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="bg-h-green">계정 정지 적용</th>
                  <td>
                    <div className="flex justify-between items-center">
                      <Checkbox />
                      <span className="text-red">
                        ※계정정지는 회원이 로그인을 할 수 없는 제약이
                        적용됩니다. 회원은 전화/1:1문의로 소명할 수 있습니다.
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="bg-h-green">포인트 지급</th>
                  <td>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Checkbox />
                        <div className="flex items-center gap-2">
                          <SelectBasic
                            placeholder="포인트 지급 구분 선택"
                            disabled
                          />
                          <Input
                            placeholder="포인트(숫자)"
                            disabled
                            className="w-[5.9375rem]"
                          />
                        </div>
                      </div>
                      <span className="text-red">
                        ※한번 지급된 포인트는 이력이 남으며 회수할 수 없습니다.
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="bg-h-green">
                    <span className="text-req">관리자 메모</span>
                  </th>
                  <td>
                    <Input placeholder="관리자 메모를 필수로 작성합니다." />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-memo">
            <table>
              <colgroup>
                <col width="212px" />
              </colgroup>
              <tbody>
                <tr>
                  <th>관리자명&#40;아이디&#41; / 소속</th>
                  <td>
                    회원문의 3회 이상 욕설과 강성요청 고객으로 블랙리스트
                    적용합니다. 2024-01-01 00:00
                  </td>
                </tr>
                <tr>
                  <th>관리자명&#40;아이디&#41; / 소속</th>
                  <td>
                    시스템 오류에 의한 불편함의 이유로 포인트를 지급했습니다.
                    YYYY-MM-DD hh:mm
                  </td>
                </tr>
                <tr>
                  <th>관리자명&#40;아이디&#41; / 소속</th>
                  <td>
                    관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가
                    표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가
                    작성한 메모가 표기됩니다. 관리자가 작성한 메모가 표기됩니다.
                    관리자가 작성한 메모가 표기됩니다. YYYY-MM-DD hh:mm
                  </td>
                </tr>
              </tbody>
            </table>
            <Paging className="mt-2" />
          </div>
        </div>
      </div>
      <div className="flex mt-8">
        <Button type="black" size="m">
          목록
        </Button>
        <div className="flex items-center gap-3 ml-auto">
          <Button type="black" size="m">
            취소
          </Button>
          <Button type="green" size="m">
            저장
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
}
