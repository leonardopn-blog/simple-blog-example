import Link from "next/link";
import { AllDocumentTypes } from "../../prismicio-types";
import { asText } from "@prismicio/client";
import dayjs from "dayjs";

interface PostItemProps {
	post: AllDocumentTypes;
}

export function PostItem({ post }: PostItemProps) {
	return (
		<div className="flex flex-col gap-2 py-4">
			<Link className="font-medium transition-opacity hover:opacity-70" href={post.uid}>
				<div className="flex flex-col gap-2">
					<h3 className="transition-opacity duration-200 dark:text-white text-slate-900 hover:opacity-70">
						{asText(post.data.title)}
					</h3>
					<p className="text-gray-500 font-normal">{asText(post.data.subtitle)}</p>
				</div>
			</Link>
			<p className="dark:text-white text-slate-900 text-sm">
				Por{" "}
				<Link className="text-gray-900 dark:text-gray-500 hover:underline" href="#">
					{post.data.author}
				</Link>{" "}
				<time dateTime="2023-10-10" className="text-gray-500">
					- {dayjs(post.first_publication_date).format("DD/MM/YYYY")}
				</time>
			</p>
		</div>
	);
}
