import { useStore } from "@nanostores/preact";
import { type ComponentChildren, createContext } from "preact";
import { useContext, useMemo, useState } from "preact/hooks";
import { currentSection, type Section } from "../sectionStore";

type SubSectionContextValue = {
	open: boolean;
	setOpen: (next: boolean) => void;
	toggle: () => void;
	id?: string;
};

const SubSectionContext = createContext<SubSectionContextValue | null>(null);

function useSubSection() {
	const ctx = useContext(SubSectionContext);
	if (!ctx)
		throw new Error(
			"SubSection components must be used inside <SubSection.Holder>."
		);
	return ctx;
}

export const Sections = {
	Link({ section }: { section: Section }) {
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
				{" "}
				<p>{section}</p>{" "}
			</a>
		);
	},
	Holder: ({
		children,
		className,
	}: {
		children: ComponentChildren;
		className?: string;
	}) => {
		return <div className={className}>{children}</div>;
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
	SubSection: {
		Holder: ({
			children,
			defaultOpen = false,
			id,
			onOpenChange,
		}: {
			children: ComponentChildren;
			defaultOpen?: boolean;
			id?: string;
			onOpenChange?: (open: boolean) => void;
		}) => {
			const [open, setOpenState] = useState(defaultOpen);

			const setOpen = (next: boolean) => {
				setOpenState(next);
				onOpenChange?.(next);
			};

			// biome-ignore lint/correctness/useExhaustiveDependencies: meah
			const value = useMemo<SubSectionContextValue>(
				() => ({
					open,
					setOpen,
					toggle: () => setOpen(!open),
					id,
				}),
				[open, id]
			);

			return (
				<SubSectionContext.Provider value={value}>
					{children}
				</SubSectionContext.Provider>
			);
		},

		Trigger: ({
			children,
			class: className,
		}: {
			children?: ComponentChildren;
			class?: string;
		}) => {
			const { open, toggle } = useSubSection();

			return (
				<a
					data-astro-prefetch="false"
					href="javascript"
					class={className}
					onClick={(e) => {
						e.preventDefault();
						toggle();
					}}
					aria-expanded={open}
				>
					<p>{children}</p>
				</a>
			);
		},

		Content: ({
			children,
			forceMount = false,
			class: className,
		}: {
			children: ComponentChildren;
			forceMount?: boolean;
			class?: string;
		}) => {
			const { open, id } = useSubSection();

			if (!open && !forceMount) return null;

			return (
				<div
					id={id ? `${id}-content` : undefined}
					hidden={!open}
					class={className}
				>
					{children}
				</div>
			);
		},
	},
};
