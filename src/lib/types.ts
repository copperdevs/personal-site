export type HomepageData = {
	info: {
		name: string;
		title: string;
		description: string;
	};
	socials: {
		name: string;
		url: string;
	}[];
	libraries: {
		name: string;
		description: string;
		links: {
			[key: string]: string;
		};
	}[];
};
