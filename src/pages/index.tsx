import { ExternalLink } from "@/components/external-link";
import { Content } from "@/components/sections/content";
import { Holder } from "@/components/sections/holder";
import { Link } from "@/components/sections/link";
import { SubSection } from "@/components/sections/subsection";

type Data = {
	name: string;
	description: string;
	socials: {
		name: string;
		url: string;
	}[];
	projects: {
		name: string;
		description: string;
		links: {
			[key: string]: string;
		};
	}[];
};

export default async function HomePage() {
	const data = await getData();

	return (
		<div>
			<p>
				{/** biome-ignore lint/suspicious/noCommentText: not a comment jackass */}
				{data.name} // {data.description}
			</p>
			<Holder className="close">
				<Link section="socials" type="section" />
				<Link section="projects" type="section" />
			</Holder>

			<Content section="socials" className="close toppad">
				{data.socials.map((social) => (
					<ExternalLink key={social.name} href={social.url}>
						{social.name}
					</ExternalLink>
				))}
			</Content>

			<Content section="projects" className="close toppad">
				{data.projects.map((project) => (
					<div key={project.name}>
						<SubSection section={project.name} className="sub">
							<p>{project.description}</p>
							{Object.entries(project.links).map(
								([key, value]) => (
									<ExternalLink key={key} href={value}>
										{key}
									</ExternalLink>
								),
							)}
						</SubSection>

						<Link
							key={project.name}
							subsection={project.name}
							type="subsection"
						/>
					</div>
				))}
			</Content>
		</div>
	);
}

const getData = async () => {
	const data: Data = {
		name: "copper",
		description: "escape will make me god",
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
		projects: [
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
	};

	return data;
};

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
