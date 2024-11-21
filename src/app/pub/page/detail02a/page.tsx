import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FileDrop from "@pub/components/Form/FileDrop";
import Text from "@pub/components/Form/Text";
import Radio from "@pub/components/Form/Radio";
import FormDateRange from "@pub/components/Form/DateRange";

export default function Detail02a() {
  return (
    <DefaultLayout>
      <Topbar
        title="계약등록"
        path={[
          { text: "홈", url: "/" },
          { text: "파트너 · 시설관리", url: "/" },
          { text: "파트너관리", url: "/" },
          { text: "계약등록", url: "/" },
        ]}
      />
      <div className="box-cont">
        <div>
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
                  <td className="bg-cell-blue">
                    <SelectBasic size="m" defaultSelect />
                  </td>
                  <th scope="row">연관공유신청번호</th>
                  <td className="bg-cell-blue">
                    <div className="flex items-center gap-3">
                      <SelectBasic size="m" />
                      <Button type="outline" size="m">
                        링크
                      </Button>
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
                    <Input placeholder="회사명을 입력하세요." />
                  </td>
                  <th scope="row">
                    <span className="text-req">사업자등록번호</span>
                  </th>
                  <td>
                    <Input placeholder="사업자등록번호를 입력하세요.(-없이 입력해주세요)" />
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">파트너 담당자명</th>
                  <td>
                    <Input placeholder="담당자명을 입력하세요." />
                  </td>
                  <th scope="row">담당자연락처</th>
                  <td>
                    <Input placeholder="담당자연락처를 입력하세요." />
                  </td>
                </tr>
                <tr>
                  <th>PG수수료</th>
                  <td>
                    <div className="flex items-center gap-6">
                      <div className="grow flex items-center gap-3">
                        <Radio name="t2" label="부과" defaultChecked />
                        &#40;
                        <div className="flex items-center gap-6">
                          <div className="flex items-center">
                            <span>파킹프렌즈</span>
                            <Input
                              defaultValue="100"
                              className="w-20 ml-3 mr-3"
                            />
                            <span>%</span>
                          </div>
                          <div className="flex items-center">
                            <span>파트너</span>
                            <Input
                              defaultValue="100"
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
                  <th>배정자 연동여부</th>
                  <td>
                    <div className="flex items-center gap-6">
                      <Radio name="t3" label="연동" defaultChecked />
                      <Radio name="t3" label="미연동" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>가점기준설정여부</th>
                  <td colSpan={3}>
                    <div className="flex flex-col gap-[0.8125rem]">
                      <div className="flex items-center gap-3">
                        <Radio name="t4" label="설정" defaultChecked />
                        <div className="flex items-center gap-2">
                          <SelectBasic />
                          <Input className="w-20" />
                          <span>시간</span>
                          <SelectBasic />
                          <span>~</span>
                          <Input className="w-20" />
                          <span>시간</span>
                          <SelectBasic />
                          <Input className="w-20" />
                          <span>점</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button type="gray" size="m">
                            추가
                          </Button>
                          <Button type="outline" size="m">
                            삭제
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[0.8125rem] py-4 px-5 bg-[#F7F9FC] rounded-[0.1875rem]">
                        <div className="flex items-center gap-3 pl-11">
                          <div className="flex items-center gap-2">
                            <SelectBasic />
                            <Input className="w-20" />
                            <span>시간</span>
                            <SelectBasic />
                            <span>~</span>
                            <Input className="w-20" />
                            <span>시간</span>
                            <SelectBasic />
                            <Input className="w-20" />
                            <span>점</span>
                          </div>
                          <Button type="outline" size="m">
                            삭제
                          </Button>
                        </div>
                        <div className="flex items-center gap-3 pl-11">
                          <div className="flex items-center gap-2">
                            <SelectBasic />
                            <Input className="w-20" />
                            <span>시간</span>
                            <SelectBasic />
                            <span>~</span>
                            <Input className="w-20" />
                            <span>시간</span>
                            <SelectBasic />
                            <Input className="w-20" />
                            <span>점</span>
                          </div>
                          <Button type="outline" size="m">
                            삭제
                          </Button>
                        </div>
                      </div>
                      <Radio name="t4" label="미설정" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>가점기준설정여부</th>
                  <td colSpan={3}>
                    <div className="flex flex-col gap-[0.8125rem]">
                      <div className="flex items-center gap-3">
                        <Radio name="t5" label="설정" />
                        <div className="flex items-center gap-2">
                          <SelectBasic disabled />
                          <Input className="w-20" disabled />
                          <span>시간</span>
                          <SelectBasic disabled />
                          <span>~</span>
                          <Input className="w-20" disabled />
                          <span>시간</span>
                          <SelectBasic disabled />
                          <Input className="w-20" disabled />
                          <span>점</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button type="gray" size="m" disabled>
                            추가
                          </Button>
                          <Button type="outline" size="m" disabled>
                            삭제
                          </Button>
                        </div>
                      </div>
                      <Radio name="t5" label="미설정" defaultChecked />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 계약문서 */}
          <div className="title-cell">
            <p className="tit">계약문서</p>
            <p className="desc">
              파일을 직접 Drag 하시거나 클릭하여 파일을 등록할 수 있습니다
            </p>
          </div>
          <FileDrop className="border-b border-b-[#E2E8F0]" />
          <ul className="px-4 py-[0.8125rem] mt-3 text-muted text-sm">
            <li>
              ※계약문서는 스캔 이미지나 파일로 직접 Drag 하시거나 클릭 시 파일을
              등록할 수 있습니다.
            </li>
            <li>
              ※등록된 이미지는 선택하시면 확대화면을 볼 수 있으며 파일은
              다운로드 받으실 수 있습니다.
            </li>
            <li>
              ※계약문서 파일명은 문서명으로 업로드 하시기를 권장합니다.
              예&#41;사업자등록증사본.jpg, 임대차계약서.doc 등
            </li>
          </ul>
          <div className="table-basic">
            <table>
              <colgroup>
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
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
