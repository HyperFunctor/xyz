export function Search() {
	return (
		<div className="relative m-2">
			<div className="absolute flex h-full cursor-pointer items-center pl-4 text-gray-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-mail"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
				</svg>
			</div>
			<input
				className="dark:bg-dim-400 dark:border-dim-400 dark:focus:bg-dim-900 flex h-9 w-full items-center rounded-full border border-gray-200 bg-gray-200 pl-12 text-sm font-normal text-gray-100 shadow focus:border focus:border-rose-200 focus:bg-gray-100 focus:outline-none"
				placeholder="Search Twitter"
			/>
		</div>
	);
}
