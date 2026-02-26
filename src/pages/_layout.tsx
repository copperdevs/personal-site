import "../styles.css";

import type { ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
	const data = await getData();

	return (
		<div>
			<meta name="description" content={data.description} />
			<link rel="icon" type="image/png" href={data.icon} />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin=""
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap"
				precedence="font"
			/>
			<title>{data.title}</title>
			<main>{children}</main>
		</div>
	);
}

const getData = async () => {
	const data = {
		description: "personal website for me to put my things on i suppose",
		icon: "/favicon.png",
		title: "copperdevs",
	};

	return data;
};

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
