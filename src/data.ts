import type { HomepageData } from "@/lib/types";

export const data: HomepageData = {
	name: "copper",
	description: "escape will make me god",
	links: {
		socials: {
			email: "mailto:me@copperdevs.com",
			twitter: "https://twitter.com/copperdevs",
			youtube: "https://youtube.com/@copperdevs",
			github: "https://github.com/@copperdevs",
			bluesky: "https://bsky.app/profile/copperdevs.com",
			modrinth: "https://modrinth.com/user/copperdevs",
			npm: "https://www.npmjs.com/~copperdevs",
			nuget: "https://www.nuget.org/profiles/copperdevs",
		},
	},
	projects: {
		packages: [
			{
				name: "maia",
				description: "message based networking library for .NET",
				links: {
					nuget: "https://www.nuget.org/packages/Artimora.Maia/",
					source: "https://github.com/artimora/maia",
				},
			},
			{
				name: "electra",
				description: "message based networking library for node",
				links: {
					npm: "https://www.npmjs.com/package/@artimora/electra",
					source: "https://github.com/artimora/electra",
				},
			},
			{
				name: "kronos",
				description: "simple web framework for .NET",
				links: {
					nuget: "https://www.nuget.org/packages/Artimora.Kronos",
					source: "https://github.com/artimora/kronos",
				},
			},
			{
				name: "celesium",
				description: "general use utility library",
				links: {
					nuget: "https://www.nuget.org/packages/CopperDevs.Celesium",
					source: "https://github.com/copperdevs/celesium",
				},
			},
		],
	},
};
