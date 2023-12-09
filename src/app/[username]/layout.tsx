import { type ReactNode } from "react";
import { Logo } from "@/ui/atom/Logo";
import { Search } from "@/ui/atom/Search";
import { Footer } from "@/ui/component/Footer";
import { Navigation } from "@/ui/component/Navigation";
import { Profile } from "@/ui/component/Profile";
import { TagList } from "@/ui/component/TagList";

export default async function HomeLayout({ children }: { children: ReactNode }) {
	return (
		<div className="container mx-auto bg-white">
			<div className="flex flex-row justify-center">
				<div className="xs:w-88 w-68 xl:w-275">
					<div className="xs:w-88 fixed flex w-68 flex-col overflow-y-auto xl:w-275 xl:pr-3">
						<Logo />
						<Navigation />
						<Profile />
					</div>
				</div>

				{children}

				<div className="hidden h-screen w-290 md:block lg:w-350">
					<div className="fixed flex h-screen w-290 flex-col overflow-y-auto lg:w-350">
						<Search />
						<TagList />
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}
