import type { Metadata } from "next";

import "react-datepicker/dist/react-datepicker.css";
import "react-quill-new/dist/quill.snow.css";
import "@/assets/scss/index.scss";

export const metadata: Metadata = {
	title: "ParkingFreinds Root",
	description: "ParkingFreinds",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{children}

				{/* Tooltip */}
				{/* Alert, Confirm */}
				{/* Modal */}
				{/* ... */}
			</body>
		</html>
	);
}
