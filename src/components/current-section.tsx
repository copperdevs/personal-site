import { useStore } from "@nanostores/preact";
import { currentSection } from "../sectionStore";

export function CurrentSection() {
	const section = useStore(currentSection);
	return <p>{section}</p>;
}
