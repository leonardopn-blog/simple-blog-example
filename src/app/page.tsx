import Image from "next/image";
import Link from "next/link";

export default function Component() {
	return (
		<section className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
			<div className="grid max-w-3xl gap-6 mx-auto lg:gap-8 lg:max-w-5xl">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From the Blog</h2>
					<p className="text-gray-500 dark:text-gray-400">
						Thoughts on the latest in tech, design, and everything in between.
					</p>
				</div>
				<div className="space-y-4">
					<div className="space-y-1.5">
						<Link className="font-medium group" href="#">
							<h3 className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-50">
								Introducing Shimmer: The CSS Framework of the Future
							</h3>
						</Link>
						<p className="text-sm font-medium text-gray-500 md:grid md:gap-2 dark:text-gray-400">
							by
							<Link
								className="text-gray-900 underline dark:text-gray-50 group-hover:underline"
								href="#">
								@jina
							</Link>{" "}
							<time dateTime="2023-10-10">- 10/10/2023</time>
						</p>
					</div>
					<div className="border-t border-gray-200 dark:border-gray-800" />
					<div className="space-y-1.5">
						<Link className="font-medium group" href="#">
							<h3 className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-50">
								The Art of Code: How Programming Inspires Creativity
							</h3>
						</Link>
						<p className="text-sm font-medium text-gray-500 md:grid md:gap-2 dark:text-gray-400">
							by
							<Link
								className="text-gray-900 underline dark:text-gray-50 group-hover:underline"
								href="#">
								@zach
							</Link>{" "}
							<time dateTime="2023-09-15">- 09/15/2023</time>
						</p>
					</div>
					<div className="border-t border-gray-200 dark:border-gray-800" />
					<div className="space-y-1.5">
						<Link className="font-medium group" href="#">
							<h3 className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-50">
								The Rise of Meme Culture in Web3: A New Era of Digital Expression
							</h3>
						</Link>
						<p className="text-sm font-medium text-gray-500 md:grid md:gap-2 dark:text-gray-400">
							by
							<Link
								className="text-gray-900 underline dark:text-gray-50 group-hover:underline"
								href="#">
								@cindy
							</Link>{" "}
							<time dateTime="2023-08-24">- 08/24/2023</time>
						</p>
					</div>
					<div className="border-t border-gray-200 dark:border-gray-800" />
					<div className="space-y-1.5">
						<Link className="font-medium group" href="#">
							<h3 className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-50">
								The Future of Remote Work: Adapting to a Hybrid Office
							</h3>
						</Link>
						<p className="text-sm font-medium text-gray-500 md:grid md:gap-2 dark:text-gray-400">
							by
							<Link
								className="text-gray-900 underline dark:text-gray-50 group-hover:underline"
								href="#">
								@alex
							</Link>{" "}
							<time dateTime="2023-07-19">- 07/19/2023</time>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
