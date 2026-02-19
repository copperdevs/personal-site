import { useStore } from "@nanostores/preact";
import type { ComponentChildren } from "preact";
import { currentSection, type Section } from "../sectionStore";

export const Sections = {
	Holder: ({ children }: { children: ComponentChildren }) => {
		return <div>{children}</div>;
	},

	Content: ({
		section,
		children,
		className,
	}: {
		section: Section;
		children: ComponentChildren;
		className?: string;
	}) => {
		const activeSection = useStore(currentSection);

		if (activeSection !== section) return null;

		return <div className={className}>{children}</div>;
	},
};
