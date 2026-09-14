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
	libraries: {
		name: string;
		description: string;
		links: {
			[key: string]: string;
		};
	}[];
};

export default async function HomePage() {
	const data = getData();
	const hash = import.meta.env.WAKU_PUBLIC_GIT_HASH;

	return (
		<div>
			<div>
				<p>
					{/** biome-ignore lint/suspicious/noCommentText: not a comment */}
					{data.name} // {data.description}
				</p>
				<p>i write C# (usually it works pretty well)</p>
			</div>

			<Holder className="close">
				<Link section="socials" type="section" />
				<Link section="libraries" type="section" />
			</Holder>

			<Content section="socials" className="close toppad">
				<ul className="content">
					{data.socials.map((social) => (
						<li key={social.name}>
							<ExternalLink key={social.name} href={social.url}>
								{social.name}
							</ExternalLink>
						</li>
					))}
				</ul>
			</Content>

			<Content section="libraries" className="close toppad">
				<ul className="content">
					{data.libraries.map((project) => (
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
							<li key={`${project.name}-item`}>
								<Link
									key={project.name}
									subsection={project.name}
									type="subsection"
								/>
							</li>
						</div>
					))}
				</ul>
			</Content>

			<ExternalLink
				href={`https://github.com/copperdevs/personal-site/commit/${hash}`}
				style={{
					position: "fixed",
					bottom: "16px",
					right: "32px",
					lineHeight: "0",
				}}
			>
				<div>{hash}</div>
			</ExternalLink>
		</div>
	);
}

const getData = () => {
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

	return data;
};

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
