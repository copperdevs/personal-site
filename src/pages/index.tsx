import { ExternalLink } from "@/components/external-link";
import { Content } from "@/components/sections/content";
import { Holder } from "@/components/sections/holder";
import { Link } from "@/components/sections/link";
import { SubSection } from "@/components/sections/subsection";

type Data = {
	name: string;
	description: string;
	projects: {
		name: string;
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
				<ExternalLink href="mailto:me@copperdevs.com">
					email
				</ExternalLink>
				<ExternalLink href="https://twitter.com/copperdevs">
					twitter
				</ExternalLink>
				<ExternalLink href="https://youtube.com/@copperdevs">
					youtube
				</ExternalLink>
				<ExternalLink href="https://github.com/copperdevs">
					github
				</ExternalLink>
				<ExternalLink href="https://bsky.app/profile/copperdevs.com">
					bluesky
				</ExternalLink>
				<ExternalLink href="https://modrinth.com/user/copperdevs">
					modrinth
				</ExternalLink>
			</Content>

			<Content section="projects" className="close toppad">
				{data.projects.map((project) => (
					<div key={project.name}>
						<SubSection section={project.name} className="sub">
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
		projects: [
			{
				name: "maia",
				links: {
					nuget: "https://www.nuget.org/packages/Artimora.Maia/",
					source: "https://github.com/artimora/maia",
				},
			},
			{
				name: "electra",
				links: {
					npm: "https://www.npmjs.com/package/@artimora/electra",
					source: "https://github.com/artimora/electra",
				},
			},
			{
				name: "kronos",
				links: {
					nuget: "https://www.nuget.org/packages/Artimora.Kronos",
					source: "https://github.com/artimora/kronos",
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
