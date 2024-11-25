"use client";
import Modal from "@pub/components/Modal";

const searchCCtv = ({ isOpen, onClose }) => {
    const modalButtons = [
        {
            type: "black",
            icon: false,
            label: "취소",
        },
        {
            type: "green",
            icon: false,
            label: "실시간조회",
        },
    ];
    return (
        <Modal
            open={isOpen}
            handleClose={onClose}
            title="CCTV 실시간 조회"
            size="m"
            btns={modalButtons}
        >
            <div className="max-h-[calc(100vh-13rem)] overflow-y-auto">
                <div className="search-box">
                    <div className="table-basic mt-4">
                        <table>
                            <colgroup>
                                <col width="130px" />
                                <col />
                            </colgroup>

                            <tbody>
                                <tr>
                                    <th>아이디</th>
                                    <td>pfcctv009323</td>
                                </tr>
                                <tr>
                                    <th>비밀번호</th>
                                    <td>parkingcctv0029</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default searchCCtv;
