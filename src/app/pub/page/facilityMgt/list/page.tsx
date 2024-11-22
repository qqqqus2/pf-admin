"use client";
import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";

// 시설관리 탭 패널들
import { AlotTab } from "@pub/page/facilityMgt/alot/tab";
import { CCTVTab } from "@pub/page/facilityMgt/cctv/tab";
import { KioskTab } from "@pub/page/facilityMgt/kiosk/tab";
import { NoticeBoardTab } from "@pub/page/facilityMgt/noticeBoard/tab";
import { ParkingBarrierTab } from "@pub/page/facilityMgt/parkingBarrier/tab";
import { EtcEquipmentTab } from "@pub/page/facilityMgt/etcEquipment/tab";

export default function AIotList() {
    const drawerButtons = [
        {
            type: "black",
            icon: false,
            label: "저장",
        },
        {
            type: "outline",
            icon: false,
            label: "취소",
        },
    ];
    return (
        <DefaultLayout>
            <Topbar
                title="시설관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "파트너/시설관리", url: "/" },
                    { text: "시설관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                <TabGroup className="tab-basic">
                    <TabList>
                        <Tab>AloT 센서</Tab>
                        <Tab>CCTV</Tab>
                        <Tab>파프차단기</Tab>
                        <Tab>키오스크</Tab>
                        <Tab>안내판</Tab>
                        <Tab>기타장비</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <AlotTab />
                        </TabPanel>
                        <TabPanel>
                            <CCTVTab />
                        </TabPanel>
                        <TabPanel>
                            <KioskTab />
                        </TabPanel>
                        <TabPanel>
                            <NoticeBoardTab />
                        </TabPanel>
                        <TabPanel>
                            <ParkingBarrierTab />
                        </TabPanel>
                        <TabPanel>
                            <EtcEquipmentTab />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </DefaultLayout>
    );
}
