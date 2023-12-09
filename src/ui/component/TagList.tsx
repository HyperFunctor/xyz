export function TagList() {
	return (
		<div className="dark:bg-dim-700 m-2 rounded-2xl bg-gray-50">
			<h1 className="text-md dark:border-dim-200 border-b border-gray-200 p-3 font-bold text-gray-900 dark:text-white">
				What’s happening
			</h1>

			<div className="dark:border-dim-200 dark:hover:bg-dim-300 duration-350 cursor-pointer border-b border-gray-200 p-3 text-sm font-normal text-rose-400 transition ease-in-out hover:bg-gray-100">
				<h2 className="text-md font-bold text-gray-800 dark:text-white">#KongresNextjs</h2>
				<p className="text-xs text-gray-400">29.7K Tweets</p>
			</div>

			<div className="dark:border-dim-200 dark:hover:bg-dim-300 duration-350 cursor-pointer border-b border-gray-200 p-3 text-sm font-normal text-rose-400 transition ease-in-out hover:bg-gray-100">
				<h2 className="text-md font-bold text-gray-800 dark:text-white">#NextjsMasters</h2>
				<p className="text-xs text-gray-400">351K Tweets</p>
			</div>

			<div className="dark:border-dim-200 dark:hover:bg-dim-300 duration-350 cursor-pointer border-b border-gray-200 p-3 text-sm font-normal text-rose-400 transition ease-in-out hover:bg-gray-100">
				<h2 className="text-md font-bold text-gray-800 dark:text-white">#BraveCourses</h2>
				<p className="text-xs text-gray-400">52.7K Tweets</p>
			</div>

			<div className="dark:hover:bg-dim-300 duration-350 cursor-pointer p-3 text-sm font-normal text-rose-400 transition ease-in-out hover:bg-gray-100">
				Show more
			</div>
		</div>
	);
}
