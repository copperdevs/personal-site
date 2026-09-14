import type { HomepageData } from "@/lib/types";

export const data: HomepageData = {
	info: {
		name: "copper",
		title: "escape will make me god",
		description: "I write C# (usually it works pretty well)",
	},
	socials: [
		{
			name: "email",
			url: "mailto:me@copperdevs.com",
		},
		{
			name: "twitter",
			url: "https://twitter.com/copperdevs",
		},
		{
			name: "youtube",
			url: "https://youtube.com/@copperdevs",
		},
		{
			name: "github",
			url: "https://github.com/copperdevs",
		},
		{
			name: "bluesky",
			url: "https://bsky.app/profile/copperdevs.com",
		},
		{
			name: "modrinth",
			url: "https://modrinth.com/user/copperdevs",
		},
		{
			name: "npm",
			url: "https://www.npmjs.com/~copperdevs",
		},
		{
			name: "nuget",
			url: "https://www.nuget.org/profiles/copperdevs",
		},
	],
	libraries: [
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
		{
			name: "windowing",
			description: "simple, thin, windowing abstraction",
			links: {
				nuget: "https://www.nuget.org/packages/CopperDevs.Windowing",
				source: "https://github.com/copperdevs/windowing",
			},
		},
	],
};
