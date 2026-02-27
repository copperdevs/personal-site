export function ExternalLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<a href={href} target="_blank" rel="noopener" className="underlined">
			<p>{children}</p>
		</a>
	);
}
