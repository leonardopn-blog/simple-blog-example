import Link from "next/link";
import { AllDocumentTypes } from "../../prismicio-types";
import { asText } from "@prismicio/client";
import dayjs from "dayjs";
import { getTimeToReadAPost } from "@/utils/Post";

interface PostItemProps {
	post: AllDocumentTypes;
}

export function PostItem({ post }: PostItemProps) {
	const timeToRead = getTimeToReadAPost(post);

	return (
		<div className="flex flex-col gap-2 py-4">
			<Link className="font-medium transition-opacity hover:opacity-70" href={post.uid}>
				<div className="flex flex-col gap-2">
					<h3 className="transition-opacity duration-200 dark:text-white text-slate-900 hover:opacity-70">
						{asText(post.data.title)}
					</h3>
					<p className="text-gray-500 font-normal">{asText(post.data.subtitle)}</p>
					<p className="font-light">{timeToRead} min. de leitura</p>
				</div>
			</Link>
			<p className="dark:text-white text-slate-900 text-sm">
				Por{" "}
				<Link className="text-gray-900 dark:text-gray-500 hover:underline" href="#">
					{post.data.author}
				</Link>{" "}
				<time
					dateTime={dayjs(post.first_publication_date).format()}
					className="text-gray-500">
					- {dayjs(post.first_publication_date).format("DD/MM/YYYY")}
				</time>
			</p>
		</div>
	);
}
