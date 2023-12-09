import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx,mdx}"],
	theme: {
		extend: {
			width: {
				68: "68px",
				88: "88px",
				275: "275px",
				290: "290px",
				350: "350px",
				600: "600px",
			},
		},
	},
	plugins: [],
};
export default config;
