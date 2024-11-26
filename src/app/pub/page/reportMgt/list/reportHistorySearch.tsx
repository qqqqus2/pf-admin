"use client";

import React, { useState } from "react";
import Drawer from "@pub/components/Drawer";
import Button from "@pub/components/Button";
import Flag from "@pub/components/Flag";
import Checkbox from "@pub/components/Form/Check";
import Image from "next/image";
import Text from "@pub/components/Form/Text";
import Paging from "@pub/components/Grid/Paging";
import IcArrowRight from "@/assets/icons/ico_arrow_right.svg";

const ReportHistorySearch = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const drawerButtons = [
    {
      type: "outline",
      icon: false,
      label: "닫기",
    },
  ];

  return (
    <div>
      <Drawer
        id="report-search-drawer"
        open={isOpen}
        handleClose={onClose}
        title="제보이력조회 -회원"
        btns={drawerButtons}
      >
        <div>
          {/* Drawer 내부 컨텐츠 */}
          <div className="h-[calc(100%-140px)] overflow-y-auto">
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
                        <th scope="row">회원번호</th>
                        <td>
                          <div className="flex items-center gap-3">
                            341161
                            <Button type="outline" size="s">
                              복사
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
                        <td>Y / YYYY-MM-DD hh:mm / 휴대폰인증</td>
                      </tr>
                      <tr>
                        <th scope="row">휴대폰번호</th>
                        <td>
                          <button type="button">
                            <span className="underline">010-1234-5678</span>
                          </button>
                        </td>
                        <th scope="row">이름(닉네임)</th>
                        <td>홍길동</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-basic mt-4">
                  <table>
                    <colgroup>
                      <col width="152px" />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">제보로 받은 총 포인트</th>
                        <td>2,000p</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="flex items-center min-h-[2.5rem] gap-3">
                  <p className="h4">
                    총 <span className="text-green">19</span>회
                  </p>
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
                    </colgroup>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>접수번호</th>
                        <th>제보유형</th>
                        <th>제보일시</th>
                        <th>검토자</th>
                        <th>검토일시</th>
                        <th>검토결과</th>
                        <th>포인트</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>10</td>
                        <td>
                          <button type="button" className="flex items-center gap-1">
                            <span className="underline text-green">RN00002</span>
                          </button>
                        </td>
                        <td>신규</td>
                        <td>2024-08-01 09:00</td>
                        <td>김파프(amdinid)</td>
                        <td>yyyy-mm-dd 00:00</td>
                        <td>미반영</td>
                        <td>지급</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          <button type="button" className="flex items-center gap-1">
                            <span className="underline text-green">RN00002</span>
                          </button>
                        </td>
                        <td>수정</td>
                        <td>2024-08-01 09:00</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <button type="button" className="flex items-center gap-1">
                            <span className="underline text-green">RN00002</span>
                          </button>
                        </td>
                        <td>신규</td>
                        <td>2024-08-01 09:00</td>
                        <td>김파프(amdinid)</td>
                        <td>yyyy-mm-dd 00:00</td>
                        <td>미반영</td>
                        <td>지급</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          <button type="button" className="flex items-center gap-1">
                            <span className="underline text-green">RN00002</span>
                          </button>
                        </td>
                        <td>신규</td>
                        <td>2024-08-01 09:00</td>
                        <td>김파프(amdinid)</td>
                        <td>yyyy-mm-dd 00:00</td>
                        <td>미반영</td>
                        <td>지급</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <button type="button" className="flex items-center gap-1">
                            <span className="underline text-green">RN00002</span>
                          </button>
                        </td>
                        <td>신규</td>
                        <td>2024-08-01 09:00</td>
                        <td>김파프(amdinid)</td>
                        <td>yyyy-mm-dd 00:00</td>
                        <td>미반영</td>
                        <td>지급</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="grid grid-cols-4 items-center mt-6">
                  <Paging className="col-start-2 col-span-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ReportHistorySearch;
