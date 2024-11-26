"use client";
import Modal from "@pub/components/Modal";

const personalInfo = ({ isOpen, onClose }) => {
    return (
        <Modal open={isOpen} handleClose={onClose} title="신청정보" size="l">
            <div className="max-h-[calc(100vh-13rem)]">
                <div className="search-box">
                    <div className="table-basic mt-4 text-center">
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
                                    <th>휴대전화번호</th>
                                    <th>이름</th>
                                    <th>상품권구분</th>
                                    <th>신청일시</th>
                                    <th>신청권종</th>
                                    <th>매수</th>
                                    <th>금액</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>010-0000-0000</td>
                                    <td>홍길동</td>
                                    <td>문화상품권</td>
                                    <td>yyyy.mm.dd hh:mm</td>
                                    <td>50,000원</td>
                                    <td>1</td>
                                    <td>50,000원</td>
                                </tr>
                                <tr>
                                    <td>010-0000-0000</td>
                                    <td>홍길동</td>
                                    <td>문화상품권</td>
                                    <td>yyyy.mm.dd hh:mm</td>
                                    <td>50,000원</td>
                                    <td>1</td>
                                    <td>50,000원</td>
                                </tr>
                                <tr>
                                    <td>010-0000-0000</td>
                                    <td>홍길동</td>
                                    <td>문화상품권</td>
                                    <td>yyyy.mm.dd hh:mm</td>
                                    <td>50,000원</td>
                                    <td>1</td>
                                    <td>50,000원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default personalInfo;
