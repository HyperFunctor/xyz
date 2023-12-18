"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AutoRefresh = () => {
	const router = useRouter();
	useEffect(() => {
		const interval = setInterval(() => {
			router.refresh();
		}, 10_000);
		return () => clearInterval(interval);
	}, [router]);
	return null;
};
