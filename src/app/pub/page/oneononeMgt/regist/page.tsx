"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Image from "next/image";
import Flag from "@pub/components/Flag";
import Checkbox from "@pub/components/Form/Check";
import Text from "@pub/components/Form/Text";
import Input from "@pub/components/Form/Input";
import InputSearch from "@pub/components/Form/InputSearch";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcArrowRight from "@/assets/icons/ico_arrow_right.svg";
import Modal from "@pub/components/Modal";

//등록 레이어팝업
// import { useState } from "react";
// import RegistePop from "../regist/RegistePop";

export default function oneononeMgtList() {
  const [showDefault, setShowDefault] = useState(true);
  const [showElement, setShowElement] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const getUrlParameter = (param: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  useEffect(() => {
    const paramValue1 = getUrlParameter("case1");

    if (paramValue1 === "true") {
      setShowElement(true);
      setShowDefault(false);
    } else {
      setShowElement(false);
    }
  }, []);

  // Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // valid 체크
  const checkValid = () => {
    setIsValid(true);
  };
  return (
    <DefaultLayout>
      <Topbar
        title="1:1문의관리 조회/상세"
        path={[
          { text: "홈", url: "/" },
          { text: "1:1문의관리", url: "/" },
          { text: "목록", url: "/" },
          { text: "조회/상세", url: "/" },
        ]}
      />
      {showDefault && (
        <div className="box-cont">
          <div>
            <p className="h4">문의정보</p>
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
                    <th scope="row">문의번호</th>
                    <td>
                      <div className="flex items-center gap-3">
                        RM000001
                        <Button type="outline" size="s">
                          복사
                        </Button>
                      </div>
                    </td>
                    <th scope="row">회원유형</th>
                    <td>APP회원</td>
                  </tr>
                  <tr>
                    <th scope="row">문의자</th>
                    <td>
                      <button type="button">
                        <span className="underline">홍길동(010-1234-5678)</span>
                      </button>
                    </td>
                    <th scope="row">계정상태</th>
                    <td>활성</td>
                  </tr>
                  <tr>
                    <th scope="row">문의유형</th>
                    <td>주차권</td>
                    <th scope="row">문의일시</th>
                    <td>YYYY-MM-DD hh:mm</td>
                  </tr>
                  <tr>
                    <th scope="row">제목</th>
                    <td colSpan={3}>문의 제목이 노출됩니다.</td>
                  </tr>
                  <tr>
                    <th scope="row">내용</th>
                    <td colSpan={3}>
                      내용이 노출되는 영역입니다. 문의한 내용이 노출됩니다. 문의한 내용이 노출됩니다. 문의한 내용이
                      노출됩니다. 문의한 내용이 노출됩니다. 문의한 내용이 노출됩니다. 문의한 내용이 노출됩니다. 문의한
                      내용이 노출됩니다. 문의한 내용이 노출됩니다.내용이 노출됩니다. 문의한 내용이 노출됩니다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">첨부파일</th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-[0.8125rem]">
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="h4">답변영역</p>
            <div className="table-basic mt-4">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      <span className="text-req">답변내용</span>
                    </th>
                    <td>
                      <Text rows={3} placeholder="답변을 작성하세요" className="grow" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      알림 발송
                    </th>
                    <td>
                      <div className="flex items-center gap-6">
                        <Checkbox label="앱푸시" />
                        <Checkbox label="카카오톡" />
                        <Checkbox label="문자" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="h4 inline-flex items-center gap-2">
              관리자 영역
              <span
                data-tooltip-id="tooltip"
                data-tooltip-html="해당 회원 관련 관리가 필요한 경우에 진행하며, 진행시 관리자메모는 필수입니다."
              >
                <IcInfo />
              </span>
            </p>
            <div className="table-basic mt-4">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      연관문의 링크
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <SelectBasic size="m" placeholder="선택하세요" />
                        <Button type="outline" size="m" onClick={openModal}>
                          링크
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      블랙리스트 적용
                    </th>
                    <td>
                      <div className="flex justify-between items-center">
                        <Checkbox />
                        <span className="text-red">
                          ※블랙리스트는 내부관리용으로 회원에게 표기되지 않으며, 회원에게 활동제약이 있진 않습니다.
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      포인트 지급
                    </th>
                    <td>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Checkbox />
                          <div className="flex items-center gap-2">
                            <SelectBasic placeholder="포인트 지급 구분 선택" disabled />
                            <Input placeholder="포인트(숫자)" disabled className="w-[5.9375rem]" />
                          </div>
                        </div>
                        <span className="text-red">※한번 지급된 포인트는 이력이 남으며 회수할 수 없습니다.</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      <span className="text-req">관리자메모</span>
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
                <tbody className="no-memo">
                  <tr>
                    <td colSpan={2}>
                      <span className="no-data">관리자 메모 이력이 없습니다.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {showElement && (
        <div className="box-cont">
          <div>
            <p className="h4">문의정보</p>
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
                    <th scope="row">문의번호</th>
                    <td>
                      <div className="flex items-center gap-3">
                        RM000001
                        <Button type="outline" size="s">
                          복사
                        </Button>
                      </div>
                    </td>
                    <th scope="row">회원유형</th>
                    <td>
                      파트너 / B2G(지자체) / 송파구청
                      <div className="ml-2 inline-flex ">
                        <Button type="outline" size="s">
                          상세보기
                          <IcArrowRight />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">문의자</th>
                    <td>
                      <button type="button">
                        <span className="underline">홍길동(010-1234-5678)</span>
                      </button>
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
                    <th scope="row">문의유형</th>
                    <td>주차권</td>
                    <th scope="row">문의일시</th>
                    <td>YYYY-MM-DD hh:mm</td>
                  </tr>
                  <tr>
                    <th scope="row">제목</th>
                    <td colSpan={3}>문의 제목이 노출됩니다.</td>
                  </tr>
                  <tr>
                    <th scope="row">내용</th>
                    <td colSpan={3}>
                      내용이 노출되는 영역입니다. 문의한 내용이 노출됩니다. 문의한 내용이 노출됩니다. 문의한 내용이
                      노출됩니다. 문의한 내용이 노출됩니다. 문의한 내용이 노출됩니다. 문의한 내용이 노출됩니다. 문의한
                      내용이 노출됩니다. 문의한 내용이 노출됩니다.내용이 노출됩니다. 문의한 내용이 노출됩니다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">첨부파일</th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-[0.8125rem]">
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="h4">답변영역</p>
            <div className="table-basic mt-4">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      <span className="text-req">답변내용</span>
                    </th>
                    <td>
                      <Text
                        rows={3}
                        disabled="true"
                        className="grow"
                        value="안녕하세요, 관리자 작성한 답변 내용이 표기됩니다. 관리자 작성한 답변 내용이 표기됩니다. 관리자
                      작성한 답변 내용이 표기됩니다. 관리자 작성한 답변 내용이 표기됩니다. 관리자 작성한 답변 내용이
                      표기됩니다. 관리자 작성한 답변 내용이 표기됩니다. 관리자 작성한 답변 내용이 표기됩니다."
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      알림 발송
                    </th>
                    <td>
                      <div className="flex items-center gap-6">
                        <Checkbox label="앱푸시" checked disabled />
                        <Checkbox label="카카오톡" disabled />
                        <Checkbox label="문자" disabled />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="h4 inline-flex items-center gap-2">
              관리자 영역
              <span
                data-tooltip-id="tooltip"
                data-tooltip-html="해당 회원 관련 관리가 필요한 경우에 진행하며, 진행시 관리자메모는 필수입니다."
              >
                <IcInfo />
              </span>
            </p>
            <div className="table-basic mt-4">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      연관문의 링크
                    </th>
                    <td>
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <span className="underline">Q12345677</span>
                        </button>
                        <button type="button">
                          <span className="underline">Q12345676</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      블랙리스트 적용
                    </th>
                    <td>
                      <div className="flex justify-between items-center">
                        <Checkbox />
                        <span className="text-red">
                          ※블랙리스트는 내부관리용으로 회원에게 표기되지 않으며, 회원에게 활동제약이 있진 않습니다.
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      포인트 지급
                    </th>
                    <td>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Checkbox />
                          <div className="flex items-center gap-2">
                            <SelectBasic placeholder="포인트 지급 구분 선택" disabled />
                            <Input placeholder="포인트(숫자)" disabled className="w-[5.9375rem]" />
                          </div>
                        </div>
                        <span className="text-red">※한번 지급된 포인트는 이력이 남으며 회수할 수 없습니다.</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      <span className="text-req">관리자메모</span>
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
                    <td>회원문의 3회 이상 욕설과 강성요청 고객으로 블랙리스트 적용합니다. 2024-01-01 00:00</td>
                  </tr>
                  <tr>
                    <th>관리자명&#40;아이디&#41; / 소속</th>
                    <td>시스템 오류에 의한 불편함의 이유로 포인트를 지급했습니다. YYYY-MM-DD hh:mm</td>
                  </tr>
                  <tr>
                    <th>관리자명&#40;아이디&#41; / 소속</th>
                    <td>
                      관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가
                      표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가 작성한
                      메모가 표기됩니다. YYYY-MM-DD hh:mm
                    </td>
                  </tr>
                </tbody>
              </table>
              <Paging className="mt-2" />
            </div>
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
                  <th scope="row">답변자</th>
                  <td>김파프(amdinid)</td>
                  <th scope="row">답변일시</th>
                  <td>yyyy-mm-dd 00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
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
          {showDefault && (
            <Button type="blue" size="m">
              답변
            </Button>
          )}
        </div>
        <Modal open={isModalOpen} handleClose={closeModal} size="s" title="링크">
          <InputSearch placeholder="링크할 접수번호를 입력하세요." className="mt-4" onInput={checkValid} />
          {isValid && <p className="text-red text-sm mt-2">링크 가능합니다.</p>}
          <div className="flex items-center gap-3 mt-8">
            <Button type="gray" size="l" className="flex-1">
              취소
            </Button>
            <Button type="green" size="l" className="flex-1">
              확인
            </Button>
          </div>
        </Modal>
      </div>
    </DefaultLayout>
  );
}
