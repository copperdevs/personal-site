export type HomepageData = {
	name: string;
	description: string;
	// links: {
	// 	[key: string]: {
	// 		name: string;
	// 		url: string;
	// 	}[];
	// };
	links: {
		[key: string]: {
			[key: string]: string;
		};
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
