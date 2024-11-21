import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Text from "@pub/components/Form/Text";
import Radio from "@pub/components/Form/Radio";
import FormDateRange from "@pub/components/Form/DateRange";
import IcFile from "@/assets/icons/ico_file.svg";

export default function Detail02b() {
  return (
    <DefaultLayout>
      <Topbar
        title="계약상세 (강남구청)"
        path={[
          { text: "홈", url: "/" },
          { text: "파트너 · 시설관리", url: "/" },
          { text: "파트너관리", url: "/" },
          { text: "계약상세", url: "/" },
          { text: "주차등록관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        <TabGroup className="tab-basic" defaultIndex={0}>
          <TabList>
            <Tab>계약조회</Tab>
            <Tab>파트너계정관리</Tab>
            <Tab>주차장등록관리</Tab>
            <Tab>비정자관리</Tab>
          </TabList>
          <TabPanels>
            {/* 계약조회 */}
            <TabPanel>
              <>
                <div className="table-basic">
                  <table>
                    <colgroup>
                      <col width="152px" />
                      <col />
                      <col width="152px" />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">계약번호</th>
                        <td className="bg-cell-blue">NNNNNN</td>
                        <th scope="row">담당자</th>
                        <td className="bg-cell-blue">
                          <div className="flex items-center gap-3">
                            <Input defaultValue="이동훈" size="m" disabled />
                            <Button type="outline" size="m">
                              조회
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">진행상태</th>
                        <td className="bg-cell-blue">계약완료</td>
                        <th scope="row">연관공유신청번호</th>
                        <td className="bg-cell-blue">
                          <div className="flex items-center gap-3">
                            <SelectBasic size="m" />
                            <Button type="outline" size="m">
                              링크
                            </Button>
                            <button type="button">
                              <span className="underline">RM000003</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 기본정보 */}
                <div className="title-cell">
                  <p className="tit">기본정보</p>
                </div>
                <div className="table-basic">
                  <table>
                    <colgroup>
                      <col width="152px" />
                      <col />
                      <col width="152px" />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <span className="text-req">파트너구분</span>
                        </th>
                        <td>
                          <SelectBasic size="m" />
                        </td>
                        <th scope="row">
                          <span className="text-req">사업자 형태</span>
                        </th>
                        <td>
                          <div className="flex items-center gap-6">
                            <Radio name="t1" label="개인" />
                            <Radio name="t1" label="개인사업자" />
                            <Radio name="t1" label="법인" defaultChecked />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="text-req">파트너명</span>
                        </th>
                        <td>
                          <Input defaultValue="(주)하이파킹" />
                        </td>
                        <th scope="row">
                          <span className="text-req">사업자등록번호</span>
                        </th>
                        <td>
                          <Input defaultValue="11111111" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="text-req">계약기간</span>
                        </th>
                        <td colSpan={3}>
                          <div className="flex items-center gap-3">
                            <FormDateRange />
                            <span>&#40;00년 00개월&#41;</span>
                            <span className="text-red">계약만료 D-30</span>
                            <Button type="gray" size="s">
                              계약연장
                            </Button>
                          </div>
                          <div className="flex items-center gap-3 mt-[0.8125rem]">
                            <FormDateRange />
                            <span>&#40;00년 00개월&#41;</span>
                            <Button type="outline" size="s">
                              삭제
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">파트너 담당자명</th>
                        <td>
                          <Input defaultValue="김길동" />
                        </td>
                        <th scope="row">담당자연락처</th>
                        <td>
                          <Input defaultValue="010-2222-2222" />
                        </td>
                      </tr>
                      <tr>
                        <th>PG수수료</th>
                        <td colSpan={3}>
                          <div className="flex items-center gap-6">
                            <div className="grow flex items-center gap-3">
                              <Radio name="t2" label="부과" defaultChecked />
                              &#40;
                              <div className="flex items-center gap-6">
                                <div className="flex items-center">
                                  <span>파킹프렌즈</span>
                                  <Input
                                    defaultValue="50"
                                    className="w-20 ml-3 mr-3"
                                  />
                                  <span>%</span>
                                </div>
                                <div className="flex items-center">
                                  <span>파트너</span>
                                  <Input
                                    defaultValue="50"
                                    className="w-20 ml-3 mr-3"
                                  />
                                  <span>%</span>
                                </div>
                              </div>
                              &#41;
                            </div>
                            <Radio name="t2" label="미부과" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="col" colSpan={4}>
                          계약문서
                        </th>
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <div className="flex items-center gap-[0.8125rem]">
                            <div
                              className="file-thumb"
                              data-tooltip-id="tooltip"
                              data-tooltip-html="서비스신청계약서.doc"
                            >
                              <IcFile className="self-center" />
                              <button
                                type="button"
                                className="file-thumb-btn"
                              ></button>
                            </div>
                            <div
                              className="file-thumb"
                              data-tooltip-id="tooltip"
                              data-tooltip-html="법인통장사본.jpg"
                            >
                              <Image
                                src="/images/test/img_thumb.png"
                                alt=""
                                width={292}
                                height={172}
                              />
                              <button
                                type="button"
                                className="file-thumb-btn"
                              ></button>
                            </div>
                          </div>
                          <ul className="px-4 py-[0.8125rem] mt-3 text-muted text-sm">
                            <li>
                              ※계약문서는 스캔 이미지나 파일로 직접 Drag
                              하시거나 클릭 시 파일을 등록할 수 있습니다.
                            </li>
                            <li>
                              ※등록된 이미지는 선택하시면 확대화면을 볼 수
                              있으며 파일은 다운로드 받으실 수 있습니다.
                            </li>
                            <li>
                              ※계약문서 파일명은 문서명으로 업로드 하시기를
                              권장합니다. 예&#41;사업자등록증사본.jpg,
                              임대차계약서.doc 등
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">관리자메모</th>
                        <td colSpan={3}>
                          <div className="flex gap-3">
                            <Text
                              rows={3}
                              placeholder="관리자 메모를 작성합니다."
                              className="grow"
                            />
                            <Button type="gray" size="s">
                              확인
                            </Button>
                          </div>
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
                          인감증명서는 일주일 내 등록하기로 함. 2024-01-01 00:00
                        </td>
                      </tr>
                      <tr>
                        <th>관리자명&#40;아이디&#41; / 소속</th>
                        <td>
                          담당자를 이동훈 🡪 김길동으로 변경함. YYYY-MM-DD hh:mm
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            </TabPanel>
            {/* 파트너계정관리 */}
            <TabPanel>파트너계정관리</TabPanel>
            {/* 주차장등록관리 */}
            <TabPanel>주차장등록관리</TabPanel>

            {/* 비정자관리 */}
            <TabPanel>비정자관리</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
      <div className="flex mt-8">
        <Button type="black" size="m">
          목록
        </Button>
        <div className="flex items-center gap-3 ml-auto">
          <Button type="black" size="m">
            취소
          </Button>
          <Button type="gray" size="m">
            미리보기
          </Button>
          <Button type="green" size="m">
            저장
          </Button>
        </div>
      </div>

      {/* 탭 계약조회 */}
      <div className="box-cont mt-8">
        <p className="h4">이력관리</p>
        <div className="table-grid">
          <table>
            <colgroup>
              <col width="60px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">등록자</th>
                <th scope="col">등록일시</th>
                <th scope="col">내용 요약</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>김파프&#40;adminid&#41;</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>계약진행중</td>
              </tr>
              <tr>
                <td>2</td>
                <td>김파프&#40;adminid&#41;</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>계약완료</td>
              </tr>
              <tr>
                <td>3</td>
                <td>김관리&#40;adminid&#41;</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>계약만료&#40;계약연장&#41;</td>
              </tr>
              <tr>
                <td>4</td>
                <td>김파킹&#40;adminid&#41;</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>계약만료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
}
