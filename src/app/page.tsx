import { PostItem } from "@/components/PostItem";
import { createClient } from "@/prismicio";

export default async function Component() {
	const prismicClient = createClient();
	const posts = await prismicClient.getAllByType("blog_post");

	return (
		<section className="px-4 py-6 md:px-6 md:py-12 lg:py-16 dark:bg-gray-900 min-h-screen">
			<div className="grid max-w-3xl gap-6 mx-auto lg:gap-8 lg:max-w-5xl">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
						Meu Blog
					</h2>
					<p className="text-gray-500 dark:text-gray-400">
						Blog onde vou escrever sobre tutoriais e dicas de programação.
					</p>
				</div>
				<div className="flex flex-col divide-y">
					{posts.map(post => (
						<PostItem key={post.id} post={post} />
					))}
				</div>
			</div>
		</section>
	);
}
