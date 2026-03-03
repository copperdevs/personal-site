import { ExternalLink } from "@/components/external-link";
import { Content } from "@/components/sections/content";
import { Holder } from "@/components/sections/holder";
import { Link } from "@/components/sections/link";
import { SubSection } from "@/components/sections/subsection";
import { data } from "@/data";
import { getValues, keys } from "@/lib/util";

export default async function HomePage() {
	const data = await getData();

	var links = getValues(data.links);
	var projects = getValues(data.projects);

	var allKeys = keys([data.links, data.projects]);

	return (
		<div>
			<p>
				{/** biome-ignore lint/suspicious/noCommentText: not a comment jackass */}
				{data.name} // {data.description}
			</p>
			<Holder className="close">
				{(allKeys as string[]).map((key) => (
					<Link section={key} type="section" key={key} />
				))}
			</Holder>

			{links.keys.map((key) => (
				<Content
					section={key as string}
					className="close toppad"
					key={key}
				>
					{links.values[links.keys.indexOf(key)]?.map((social) => (
						<ExternalLink key={social.name} href={social.url}>
							{social.name}
						</ExternalLink>
					))}
				</Content>
			))}

			{projects.keys.map((key) => (
				<Content
					section={key as string}
					className="close toppad"
					key={key}
				>
					{projects.values[projects.keys.indexOf(key)]?.map(
						(project) => (
							<div key={project.name}>
								<SubSection
									section={project.name}
									className="sub"
								>
									<p>{project.description}</p>
									{Object.entries(project.links).map(
										([key, value]) => (
											<ExternalLink
												key={key}
												href={value}
											>
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
						),
					)}
				</Content>
			))}
		</div>
	);
}

const getData = async () => {
	return data;
};

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
