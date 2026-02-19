import { currentSection, type Section } from "../sectionStore";

export function SectionLink({ section }: { section: Section }) {
	return (
		<a
			data-astro-prefetch="false"
			href="javascript"
			onClick={(e) => {
				e.preventDefault();
				currentSection.set(
					currentSection.get() === section ? "none" : section
				);
			}}
		>
			<p>{section}</p>
		</a>
	);
}
