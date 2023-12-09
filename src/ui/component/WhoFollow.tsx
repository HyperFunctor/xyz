export function WhoFollow() {
	return (
		<div className="dark:bg-dim-700 m-2 rounded-2xl bg-gray-50">
			<h1 className="text-md dark:border-dim-200 border-b border-gray-200 p-3 font-bold text-gray-900 dark:text-white">
				Who to follow
			</h1>

			<div className="dark:border-dim-200 dark:hover:bg-dim-300 duration-350 cursor-pointer border-b border-gray-200 p-3 text-sm font-normal text-rose-400 transition ease-in-out hover:bg-gray-100">
				<div className="flex flex-row justify-between p-2">
					<div className="flex flex-row">
						<img
							className="h-10 w-10 rounded-full"
							src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
							alt="Joe Biden"
						/>
						<div className="ml-2 flex flex-col">
							<h1 className="text-sm font-bold text-gray-900 dark:text-white">Joe Biden</h1>
							<p className="text-sm text-gray-400">@JoeBiden</p>
						</div>
					</div>
					<div className="">
						<div className="flex h-full items-center text-gray-800 dark:text-white">
							<a
								href="#"
								className="rounded-full border-2 border-rose-400 px-4 py-1 text-xs font-bold text-rose-400"
							>
								Follow
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="dark:border-dim-200 dark:hover:bg-dim-300 duration-350 cursor-pointer border-b border-gray-200 p-3 text-sm font-normal text-rose-400 transition ease-in-out hover:bg-gray-100">
				<div className="flex flex-row justify-between p-2">
					<div className="flex flex-row">
						<img
							className="h-10 w-10 rounded-full"
							src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
							alt="Joe Biden"
						/>
						<div className="ml-2 flex flex-col">
							<h1 className="text-sm font-bold text-gray-900 dark:text-white">Joe Biden</h1>
							<p className="text-sm text-gray-400">@JoeBiden</p>
						</div>
					</div>
					<div className="">
						<div className="flex h-full items-center text-gray-800 dark:text-white">
							<a
								href="#"
								className="rounded-full border-2 border-rose-400 px-4 py-1 text-xs font-bold text-rose-400"
							>
								Follow
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="dark:border-dim-200 mx-auto w-full max-w-sm border-b border-gray-200 p-4">
				<div className="flex animate-pulse space-x-4">
					<div className="h-12 w-12 rounded-full bg-gray-400"></div>
					<div className="flex-1 space-y-4 py-1">
						<div className="h-4 w-3/4 rounded bg-gray-400"></div>
						<div className="space-y-2">
							<div className="h-4 rounded bg-gray-400"></div>
							<div className="h-4 w-5/6 rounded bg-gray-400"></div>
						</div>
					</div>
				</div>
			</div>

			<div className="dark:hover:bg-dim-300 duration-350 cursor-pointer p-3 text-sm font-normal text-rose-400 transition ease-in-out hover:bg-gray-100">
				Show more
			</div>
		</div>
	);
}
