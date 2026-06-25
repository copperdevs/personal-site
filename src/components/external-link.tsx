export function ExternalLink({
	href,
	children,
	className,
	style,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener"
			className={`className${className ? ` ${className}` : ""}`}
			style={style}
		>
			<p>{children}</p>
		</a>
	);
}
