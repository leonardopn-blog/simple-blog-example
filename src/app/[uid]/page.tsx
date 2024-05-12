import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import dayjs from "dayjs";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import "./styles.scss";
import { getTimeToReadAPost } from "@/utils/Post";

interface BlogPostProps {
	params: {
		uid: string;
	};
}

export default async function BlogPost({ params }: BlogPostProps) {
	const prismicClient = createClient();
	const post = await prismicClient.getByUID("blog_post", params.uid).catch(() => notFound());

	const timeToRead = getTimeToReadAPost(post);

	return (
		<div className="flex flex-col gap-4" id="blogPost">
			<header className="flex flex-col gap-4">
				<Link
					href=".."
					className="hover:opacity-80 transition-opacity flex gap-2 items-center mb-5">
					<CircleArrowLeft /> Voltar
				</Link>
				<h1 className="text-3xl font-bold">{asText(post.data.title)}</h1>
				<h2 className="text-xl text-gray-500">{asText(post.data.subtitle)}</h2>
				<PrismicImage field={post.data.banner} />
				<section>
					{post.data.author} - Criado em{" "}
					{dayjs(post.first_publication_date).format("DD/MM/YYYY")} - {timeToRead} min. de
					leitura
				</section>
			</header>
			<hr />
			<main className="flex flex-col gap-4 dark:text-gray-400 text-gray-600 font-light">
				{post.data.content.map((item, index) => (
					<section key={index}>
						<h3 className="text-2xl font-medium text-slate-900 dark:text-white">
							{asText(item.title)}
						</h3>
						<PrismicRichText field={item.body} />
					</section>
				))}
			</main>
		</div>
	);
}
