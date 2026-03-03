export type HomepageData = {
	name: string;
	description: string;
	links: {
		[key: string]: {
			name: string;
			url: string;
		}[];
	};
	projects: {
		[key: string]: {
			name: string;
			description: string;
			links: {
				[key: string]: string;
			};
		}[];
	};
};
