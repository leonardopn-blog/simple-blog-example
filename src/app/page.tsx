import { PostItem } from "@/components/PostItem";
import { createClient } from "@/prismicio";

export default async function Component() {
	const prismicClient = createClient();
	const posts = await prismicClient.getAllByType("blog_post").catch(e => {
		console.error(e);
		return [];
	});

	return (
		<div className="grid gap-6 lg:gap-8">
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
	);
}
