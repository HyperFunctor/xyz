import Image from "next/image";

export function Profile() {
	return (
		<div className="dark:hover:bg-dim-800 duration-350 mx-auto mb-2 mb-5 mt-auto flex w-14 cursor-pointer flex-row justify-between rounded-full p-2 transition ease-in-out hover:bg-rose-50 xl:w-full">
			<div className="flex flex-row">
				<Image
					className="inline-block h-10 w-10 rounded-full"
					src={`https://api.dicebear.com/7.x/adventurer/png?seed=${"zaiste"}&flip=true`}
					alt="avatar"
					width={128}
					height={128}
				/>
				<div className="ml-2 flex hidden flex-col xl:block">
					<h1 className="text-sm font-bold text-gray-800 dark:text-white">Zaiste</h1>
					<p className="text-sm text-gray-400">@zaiste</p>
				</div>
			</div>
			<div className="hidden xl:block">
				<div className="flex h-full items-center text-gray-800 dark:text-white">
					<svg viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-4 w-4">
						<g>
							<path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
}
