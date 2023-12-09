import Link from "next/link";

export function Logo() {
	return (
		<Link className="my-2 flex justify-center xl:justify-start" href="/">
			<svg xmlns="http://www.w3.org/2000/svg" className="w-12" version="1.0" viewBox="0 0 330 342">
				<path d="M42 173v130h27V200.5c0-56.4.3-102.5.8-102.5a99 99 0 0 1 8.7 11.7c12.1 17.7 19.4 28.2 78.9 114.1l54.8 79.2H287V43h-27v102.7c0 88.5-.2 102.5-1.4 101.3-1.2-1.2-20.7-29.3-47.4-68l-49.5-71.5-44.4-64-37.6-.3L42 43v130zm105-50.5a11728 11728 0 0 1 111 160.9c0 .3-7.8.6-17.2.6l-17.3-.1-12.5-18.1L135.1 156a10749 10749 0 0 1-63.8-92.8c-.4-1 3.1-1.2 16.8-1l17.4.3 41.5 60z" />
			</svg>
		</Link>
	);
}
