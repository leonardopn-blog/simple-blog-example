import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Meu Blog",
	description: "Blog onde vou escrever sobre tutoriais e dicas de programação.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={twMerge(
					inter.className,
					"max-w-3xl mx-auto lg:max-w-5xl dark:bg-gray-900 min-h-screen sm:p-10 p-5 text-slate-900 dark:text-white"
				)}>
				{children}
			</body>
		</html>
	);
}
