"use client";
import { currentSection, type Section } from "@/stores";

export function Link({ section }: { section: Section }) {
	return (
		<a
			href="javascript"
			onClick={(e) => {
				e.preventDefault();
				currentSection.set(currentSection.get() === section ? "none" : section);
			}}
		>
			{" "}
			<p>{section}</p>{" "}
		</a>
	);
}
