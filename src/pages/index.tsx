import { ExternalLink } from "@/components/external-link";
import { Content } from "@/components/sections/content";
import { Holder } from "@/components/sections/holder";
import { Link } from "@/components/sections/link";

export default async function HomePage() {
	const data = await getData();

	return (
		<div>
			<p>
				{/** biome-ignore lint/suspicious/noCommentText: not a comment jackass */}
				{data.name} // {data.description}
			</p>
			<Holder className="close">
				<Link section="socials" />
				<Link section="projects" />
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
			<Content section="projects">
				<p>projects</p>
			</Content>
		</div>
	);
}

const getData = async () => {
	const data = {
		name: "copper",
		description: "escape will make me god",
	};

	return data;
};

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
