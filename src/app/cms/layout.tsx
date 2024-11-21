"use client";

import type { Metadata } from "next";
import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Sidebar from "@/layout/Sidebar";

import IcAlarm from "@/assets/icons/ico_alarm.svg";
import IcSnbOpen from "@/assets/icons/ico_snb_open.svg";
import IcSnbClose from "@/assets/icons/ico_snb_close.svg";

import IcSnb01 from "@/assets/icons/sidebar/ico_snb_01.svg";
import IcSnb02 from "@/assets/icons/sidebar/ico_snb_02.svg";
import IcSnb03 from "@/assets/icons/sidebar/ico_snb_03.svg";
import IcSnb04 from "@/assets/icons/sidebar/ico_snb_04.svg";
import IcSnb05 from "@/assets/icons/sidebar/ico_snb_05.svg";
import IcSnb06 from "@/assets/icons/sidebar/ico_snb_06.svg";
import IcSnb07 from "@/assets/icons/sidebar/ico_snb_07.svg";
import IcSnb08 from "@/assets/icons/sidebar/ico_snb_08.svg";
import IcSnb09 from "@/assets/icons/sidebar/ico_snb_09.svg";
import IcSnb10 from "@/assets/icons/sidebar/ico_snb_10.svg";
import IcSnb11 from "@/assets/icons/sidebar/ico_snb_11.svg";
import IcSnb12 from "@/assets/icons/sidebar/ico_snb_12.svg";

import Alert from "@/components/Modal/Alert";
import Modal from "@/components/Modal";
import Topbar from "@/components/Topbar";

// export const metadata: Metadata = {
// 	title: "ParkingFreinds CMS",
// 	description: "CMS",
// };

// 서브 메뉴의 타입
interface SubMenu {
	title: string;
	url: string;
}

// 메뉴의 타입
interface Menu {
	title: string;
	icon: typeof IcSnb08;
	url?: string;
	sub?: SubMenu[]; // 서브 메뉴는 선택적
}

// 전체 메뉴 카테고리 타입
interface MenuCategory {
    cate: string;
    menus: Menu[];
}

export default function CmsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [snbOpen, setSnbOpen] = useState(true);
	const pathname = usePathname();
	const router = useRouter()

	const menuList: MenuCategory[] = [
		{
			cate: "Menu",
			menus: [
				{
					title: "퍼블리싱",
					icon: IcSnb08,
					url: "/pub/page",
				},
				{
					title: "테스트",
					icon: IcSnb08,
					sub: [
						{ title: "Search", url: "/cms/test/searchform" },
						{ title: "Grid", url: "/cms/test/grid" },
						{ title: "Components", url: "/cms/test/comp" },
						{ title: "ModalComponents", url: "/cms/test/comp/modal" },
						{ title: "ToastUI Editor", url: "/cms/test/editor/tui" },
					],
				},
				{
					title: "대시보드",
					icon: IcSnb01,
					url: "/",
				},
				{
					title: "사용자관리",
					icon: IcSnb02,
					sub: [
						{ title: "회원관리", url: "/cms/user/user" },
						{ title: "그룹생성관리", url: "/cms/user/create-group" },
					],
				},
				{
					title: "파트너/시설관리",
					icon: IcSnb03,
					sub: [
						{ title: "파트너관리", url: "/cms/partener-facility/partener" },
						{ title: "배정자관리", url: "/cms/partener-facility/assigned" },
						{ title: "시설관리", url: "/cms/partener-facility/facility" },
						{ title: "주차신고관리", url: "/cms/partener-facility/parking-report" },
					],
				},
				{
					title: "전시/컨텐츠관리",
					icon: IcSnb04,
					sub: [
						{ title: "이벤트/공지 관리", url: "/cms/exhibit-content/event-notice" },
						{ title: "배너관리", url: "/cms/exhibit-content/banner" },
						{ title: "상품권관리", url: "/cms/exhibit-content/giftcard" },
						{ title: "약관관리", url: "/cms/exhibit-content/terms" },
					],
				},
				{
					title: "쿠폰/포인트관리",
					icon: IcSnb05,
					sub: [
						{ title: "쿠폰관리", url: "/cms/coupon-point/coupon" },
						{ title: "포인트관리", url: "/cms/coupon-point/point" },
					],
				},
				{
					title: "문의관리",
					icon: IcSnb06,
					sub: [
						{ title: "공유신청관리", url: "/cms/inquiry/sharing-request" },
						{ title: "1:1문의관리", url: "/cms/inquiry/one-on-one" },
						{ title: "결제대행관리", url: "/cms/inquiry/payment-agent" },
						{ title: "FAQ관리", url: "/cms/inquiry/faq" },
					],
				},
				{
					title: "정산관리",
					icon: IcSnb07,
					sub: [
						{ title: "결제내역관리", url: "/cms/payment/payment-history" },
						{ title: "정산관리", url: "/cms/payment/payment" },
					],
				},
				{
					title: "이력관리",
					icon: IcSnb08,
					sub: [
						{ title: "접속이력관리", url: "/cms/history/login-history" },
						{ title: "다운로드이력관리", url: "/cms/history/download-history" },
						{ title: "약관이력관리", url: "/cms/history/terms-history" },
						{ title: "정보변경관리", url: "/cms/history/modification-history" },
					],
				},
			],
		},
		{
			cate: "파트너 메뉴",
			menus: [
				{ title: "주차현황관리", icon: IcSnb09 },
				{ title: "차량검색", icon: IcSnb10 },
				{ title: "배정자현황", icon: IcSnb11 },
				{ title: "수익정산", icon: IcSnb12 },
			],
		},
	];

	const { title, pathList } = useMemo(() => {
		// console.log(pathname);
		// console.log(menuList[0].menus); // BO menu list
		const backofficeMenuList = menuList[0].menus;

		let parent: Menu | undefined = undefined;
		let menu: Menu | undefined = backofficeMenuList.find(
			(v) => v.url === pathname || v.sub?.find((vv) => vv.url === pathname)
		);

        if (!menu) {
            return { title: '', pathList: [] }
        }

		if (menu.url !== pathname) {
			parent = menu;
			menu = menu.sub.find((vv) => vv.url === pathname);
		}

		const title = menu.title;
		let pathList = [{ text: "홈", url: "/" }];
		if (parent) {
			pathList.push({
				text: parent.title,
				url: "/",
			});
		}
		pathList.push({
			text: menu.title,
			url: pathname,
		});

		// console.log({title, pathList})

		return { title, pathList };
	}, [pathname]);

	const onClickLogout = () => {
		logout()
		router.push('/')
	}

	return (
		<div className="root-container">
			{/* Sidebar */}
			<Sidebar menuList={menuList} open={snbOpen} />

			{/*  */}
			<main className="grow">
				{/* header */}
				<header className="header">
					{/* SNB 열고 닫기 */}
					<button
						type="button"
						className="btn-snb"
						onClick={() => setSnbOpen((prev) => !prev)}
					>
						{snbOpen ? <IcSnbClose /> : <IcSnbOpen />}
					</button>

					{/* 사용자 정보, 로그인, 알림, .. */}
					<div className="flex items-center gap-3 ml-auto">
						<p className="user">홍길동님</p>
						<button 
							className="btn-header"
							onClick={onClickLogout}
						>
							로그아웃
						</button>
						<button className="btn-header">비밀번호 변경</button>
						<button className="btn-header btn-alarm" data-cnt="99+">
							<IcAlarm />
						</button>
					</div>
				</header>
				{/* // header */}

				{/* Contents */}
				<div className="overflow-y-auto flex flex-col h-[calc(100vh-5rem)] px-[2.5rem] pb-[2.5rem] bg-[#F7F9FC]">
					{/* #TODO: */}
					<Topbar title={title} path={pathList} />

					{children}
				</div>
			</main>

			{/* Alert, Confirm */}
			<Alert />
			{/* Modal */}
			<Modal />
		</div>
	);
}
