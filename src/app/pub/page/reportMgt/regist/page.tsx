"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Image from "next/image";
import Radio from "@pub/components/Form/Radio";
import Modal from "@pub/components/Modal";
import Carousel from "@pub/components/Carousel";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcMap from "@/assets/icons/ico_map.svg";

export default function oneononeMgtList() {
  const [showDefault, setShowDefault] = useState(true);
  const [showElement1, setShowElement1] = useState(false);
  const [showElement2, setShowElement2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getUrlParameter = (param: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  useEffect(() => {
    const paramValue1 = getUrlParameter("case1");
    const paramValue2 = getUrlParameter("case2");

    if (paramValue1 === "true") {
      setShowElement1(true);
      setShowDefault(false);
    } else {
      setShowElement1(false);
    }
    if (paramValue2 === "true") {
      setShowElement2(true);
      setShowDefault(false);
    } else {
      setShowElement2(false);
    }
  }, []);

  return (
    <DefaultLayout>
      <Topbar
        title="제보관리 조회/상세"
        path={[
          { text: "홈", url: "/" },
          { text: "문의관리", url: "/" },
          { text: "제보관리 목록", url: "/" },
          { text: "조회/상세", url: "/" },
        ]}
      />
      {showDefault && (
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
                    <th scope="row">제보접수번호</th>
                    <td>
                      <div className="flex items-center gap-3">
                        RM000001
                        <Button type="outline" size="s">
                          복사
                        </Button>
                      </div>
                    </td>
                    <th scope="row">연관문의 링크</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <SelectBasic size="m" placeholder="선택하세요" />
                        <Button type="outline" size="m">
                          링크
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      <div className="inline-flex items-center gap-2">
                        <p className="text-req">내부검토결과</p>
                        <span
                          data-tooltip-id="tooltip"
                          data-tooltip-html="내부검토결과는 수정 및 업데이트 가능하며, 관리자메모는 <br />필수입니다. 반영은 별도로 수정/등록 하셔야 합니다."
                        >
                          <IcInfo />
                        </span>
                      </div>
                    </th>
                    <td colSpan={3}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6">
                          <Radio name="t1" label="반영필요" />
                          <Radio name="t1" label="미반영" />
                          <Radio name="t1" label="기타" />
                        </div>
                        <span className="text-red">※내부관리용으로 제보자에게 통보되지 않습니다.</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      제보포인트
                    </th>
                    <td colSpan={3}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Input />
                          <Button type="outline" size="m" disabled>
                            지급
                          </Button>
                        </div>
                        <div>
                          <span className="mr-2">
                            수정 {1}포인트, 신규 {1}포인트
                          </span>
                          <span className="text-red">※한번 지급된 포인트는 이력이 남으며 회수할 수 없습니다.</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      <p className="text-req">관리자메모</p>
                    </th>
                    <td colSpan={3}>
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

          <div>
            <p className="h4">제보내용</p>
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
                    <th scope="row" className="bg-h-green">
                      제보유형
                    </th>
                    <td colSpan={3}>수정</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      제보자
                    </th>
                    <td>
                      <button type="button">
                        <span className="underline">홍길동(010-1234-5678) / 제보이력 1회</span>
                      </button>
                    </td>
                    <th scope="row" className="bg-h-green">
                      제보일시
                    </th>
                    <td>yyyy-mm-dd 00:00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      제보 주차장
                    </th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-3">
                        <div>
                          <button type="button">
                            <span className="underline">$주차장명 표기 길어도 모두 보이도록 처리$</span>
                          </button>
                          ($해당 주차장 주소 표기 서울시 강남구 학동로82길 14-1$)
                        </div>
                        <button type="button" className="w-8 h-8">
                          <IcMap />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      주차장위치
                    </th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-3">
                        <p>$서울시 강남구 학동로82길 14-1 고객이 작성한 상세위치 설명 표기$</p>

                        <button type="button" className="w-8 h-8">
                          <IcMap />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      연관사진
                    </th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-[0.8125rem]">
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  <th scope="row">검토자</th>
                  <td>김파프(amdinid)</td>
                  <th scope="row">검토일시</th>
                  <td>yyyy-mm-dd 00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showElement1 && (
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
                    <th scope="row">제보접수번호2</th>
                    <td>
                      <div className="flex items-center gap-3">
                        RM000001
                        <Button type="outline" size="s">
                          복사
                        </Button>
                      </div>
                    </td>
                    <th scope="row">연관문의 링크</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <SelectBasic size="m" placeholder="선택하세요" />
                        <Button type="outline" size="m">
                          링크
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      <div className="inline-flex items-center gap-2">
                        <p className="text-req">내부검토결과</p>
                        <span
                          data-tooltip-id="tooltip"
                          data-tooltip-html="내부검토결과는 수정 및 업데이트 가능하며, 관리자메모는 <br />필수입니다. 반영은 별도로 수정/등록 하셔야 합니다."
                        >
                          <IcInfo />
                        </span>
                      </div>
                    </th>
                    <td colSpan={3}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6">
                          <Radio name="t2" label="반영필요" defaultChecked />
                          <Radio name="t2" label="미반영" />
                          <Radio name="t2" label="기타" />
                        </div>
                        <span className="text-red">※내부관리용으로 제보자에게 통보되지 않습니다.</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      제보포인트
                    </th>
                    <td colSpan={3}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Input value="1,000" disabled />
                          <Button type="outline" size="m" disabled>
                            지급
                          </Button>
                        </div>
                        <div>
                          <span className="mr-2">
                            수정 {1}포인트, 신규 {1}포인트
                          </span>
                          <span className="text-red">※한번 지급된 포인트는 이력이 남으며 회수할 수 없습니다.</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      <p className="text-req">관리자메모</p>
                    </th>
                    <td colSpan={3}>
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

          <div>
            <p className="h4">제보내용</p>
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
                    <th scope="row" className="bg-h-green">
                      제보유형
                    </th>
                    <td colSpan={3}>수정</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      제보자
                    </th>
                    <td>
                      <button type="button">
                        <span className="underline">홍길동(010-1234-5678) / 제보이력 1회</span>
                      </button>
                    </td>
                    <th scope="row" className="bg-h-green">
                      제보일시
                    </th>
                    <td>yyyy-mm-dd 00:00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      제보 주차장
                    </th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-3">
                        <div>
                          <button type="button">
                            <span className="underline">$주차장명 표기 길어도 모두 보이도록 처리$</span>
                          </button>
                          ($해당 주차장 주소 표기 서울시 강남구 학동로82길 14-1$)
                        </div>
                        <button type="button" className="w-8 h-8">
                          <IcMap />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      주차장위치
                    </th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-3">
                        <p>$서울시 강남구 학동로82길 14-1 고객이 작성한 상세위치 설명 표기$</p>

                        <button type="button" className="w-8 h-8">
                          <IcMap />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      연관사진
                    </th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-[0.8125rem]">
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  <th scope="row">검토자</th>
                  <td>김파프(amdinid)</td>
                  <th scope="row">검토일시</th>
                  <td>yyyy-mm-dd 00:00</td>
                </tr>
                <tr>
                  <th scope="row">최종수정자</th>
                  <td></td>
                  <th scope="row">최종수정일시</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showElement2 && (
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
                    <th scope="row">제보접수번호2</th>
                    <td>
                      <div className="flex items-center gap-3">
                        RM000001
                        <Button type="outline" size="s">
                          복사
                        </Button>
                      </div>
                    </td>
                    <th scope="row">연관문의 링크</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <SelectBasic size="m" placeholder="선택하세요" />
                        <Button type="outline" size="m">
                          링크
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      <div className="inline-flex items-center gap-2">
                        <p className="text-req">내부검토결과</p>
                        <span
                          data-tooltip-id="tooltip"
                          data-tooltip-html="내부검토결과는 수정 및 업데이트 가능하며, 관리자메모는 <br />필수입니다. 반영은 별도로 수정/등록 하셔야 합니다."
                        >
                          <IcInfo />
                        </span>
                      </div>
                    </th>
                    <td colSpan={3}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6">
                          <Radio name="t2" label="반영필요" defaultChecked />
                          <Radio name="t2" label="미반영" />
                          <Radio name="t2" label="기타" />
                        </div>
                        <span className="text-red">※내부관리용으로 제보자에게 통보되지 않습니다.</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      제보포인트
                    </th>
                    <td colSpan={3}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Input value="1,000" disabled />
                          <Button type="outline" size="m" disabled>
                            지급
                          </Button>
                        </div>
                        <div>
                          <span className="mr-2">
                            수정 {1}포인트, 신규 {1}포인트
                          </span>
                          <span className="text-red">※한번 지급된 포인트는 이력이 남으며 회수할 수 없습니다.</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-blue">
                      <p className="text-req">관리자메모</p>
                    </th>
                    <td colSpan={3}>
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

          <div>
            <p className="h4">제보내용</p>
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
                    <th scope="row" className="bg-h-green">
                      제보유형
                    </th>
                    <td colSpan={3}>신규</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      제보자
                    </th>
                    <td>
                      <button type="button">
                        <span className="underline">홍길동(010-1234-5678) / 제보이력 1회</span>
                      </button>
                    </td>
                    <th scope="row" className="bg-h-green">
                      제보일시
                    </th>
                    <td>yyyy-mm-dd 00:00</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      주차장위치
                    </th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-3">
                        <p>$서울시 강남구 학동로82길 14-1 고객이 작성한 상세위치 설명 표기$</p>

                        <button type="button" className="w-8 h-8">
                          <IcMap />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      연락처 변경
                    </th>
                    <td colSpan={3}>$제보자가 작성한 정보 표기 02-123-4567$</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      운영시간
                    </th>
                    <td colSpan={3}>$제보자가 작성한 정보 표기 밤12시까지라더니 밤11시에 퇴장요청 $</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      요금정보
                    </th>
                    <td colSpan={3}>$제보자가 작성한 정보 표기 10분에 천원$</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      주차가능대수정보
                    </th>
                    <td colSpan={3}>$제보자가 작성한 정보 표기 정보는 50대이나 실제 45대$</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      추가정보
                    </th>
                    <td colSpan={3}>$제보자가 작성한 정보 표기 CCTV 고장난 상태$</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-h-green">
                      연관사진
                    </th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-[0.8125rem]">
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                        <div className="file-thumb" data-tooltip-id="tooltip" data-tooltip-html="법인통장사본.jpg">
                          <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} onClick={openModal} />
                          <button type="button" className="file-thumb-btn"></button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  <th scope="row">검토자</th>
                  <td>김파프(amdinid)</td>
                  <th scope="row">검토일시</th>
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
        </div>
        <Modal open={isModalOpen} handleClose={closeModal} size="m" title="이미지 크게보기">
          <Carousel className="mt-4" />
        </Modal>
      </div>
    </DefaultLayout>
  );
}
