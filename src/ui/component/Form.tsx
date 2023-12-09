"use client";

import { useRef, type FormHTMLAttributes } from "react";

type Actionable = (form: FormData) => Promise<void>;

export function Form(props: Omit<FormHTMLAttributes<HTMLFormElement>, "action"> & { action?: Actionable }) {
	const ref = useRef<HTMLFormElement>(null);

	return (
		<form
			{...props}
			ref={ref}
			action={async (form) => {
				if (typeof props.action != "function") return;

				await props.action(form);
				ref.current?.reset();
			}}
		/>
	);
}
