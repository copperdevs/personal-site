import "../styles.css";

import type { ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
	const data = await getData();

	return (
		<div>
			<meta name="description" content={data.description} />
			<link rel="icon" type="image/png" href={data.icon} />
			<title>{data.title}</title>
			<main>{children}</main>
		</div>
	);
}

const getData = async () => {
	const data = {
		description: "personal website for me to put my things on i suppose",
		icon: "/images/favicon.png",
		title: "copperdevs",
	};

	return data;
};

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
