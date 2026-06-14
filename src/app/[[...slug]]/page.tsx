import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { Root, Folder, Item } from 'fumadocs-core/page-tree';
import { source } from '@/src/lib/source';
import { JsbApiFooter } from '@/src/components/JsbApiFooter';

import {
	BookOpen,
	Code2,
	TerminalSquare,
	Wrench,
	ArrowRight,
	Sparkles,
	Library,
	Compass,
} from 'lucide-react';
import Link from 'next/link';

type PageProps = {
	params: Promise<{
		slug?: string[];
	}>;
};

function filterPageTree(tree: Root, slug: string[]): Root {
	const section = slug[0];
	const folder = tree.children.find(
		(child): child is Folder =>
			child.type === 'folder' &&
			child.children.some(
				(item): item is Item =>
					item.type === 'page' && item.url.startsWith(`/${section}/`),
			),
	);

	if (folder) return { ...tree, children: [folder] };

	const page = tree.children.find(
		(child): child is Item =>
			child.type === 'page' && child.url === `/${section}`,
	);

	if (page) return { ...tree, children: [page] };

	return tree;
}

function HomePage() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-fd-background flex flex-col">
			<div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)]" />
			<div className="absolute left-1/2 top-0 z-0 -ml-[40rem] h-[40rem] w-[80rem] rounded-full bg-gradient-to-b from-blue-500/10 to-transparent blur-[100px] dark:from-blue-600/10" />

			<main className="relative z-10 flex-1">
				{/* Hero */}
				<section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-32 pb-24 text-center md:pt-40">
					<div className="animate-in fade-in slide-in-from-bottom-4 duration-700 mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/50 px-3 py-1 text-sm font-medium text-fd-muted-foreground backdrop-blur-md">
						<Sparkles className="h-4 w-4 text-blue-500" />
						<span>MarginNote 插件开发指南全新上线</span>
					</div>

					<h1 className="animate-in fade-in slide-in-from-bottom-6 duration-1000 text-balance text-5xl font-extrabold tracking-tight md:text-7xl">
						构建强大的 <br className="md:hidden" />
						<span className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
							MarginNote 插件
						</span>
					</h1>

					<p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 mx-auto mt-6 max-w-2xl text-balance text-lg text-fd-muted-foreground md:text-xl">
						探索完整的 API 参考、渐进式教程与 Cookbook 配方，赋予 MarginNote 前所未有的生产力与可能性。
					</p>

					<div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
						<Link
							href="/guides/getting-started/"
							className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-fd-foreground px-8 text-base font-semibold text-fd-background transition-all hover:scale-105 hover:shadow-xl hover:shadow-fd-foreground/10 active:scale-95"
						>
							快速开始
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Link>
						<Link
							href="/reference/global/jsb/"
							className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-fd-border bg-fd-card/50 px-8 text-base font-medium text-fd-foreground backdrop-blur-md transition-all hover:bg-fd-accent hover:text-fd-accent-foreground active:scale-95"
						>
							<TerminalSquare className="h-4 w-4" />
							浏览 API 参考
						</Link>
					</div>
				</section>

				{/* Bento Grid */}
				<section className="mx-auto max-w-5xl px-6 pb-32">
					<div className="mb-12 flex items-center justify-between">
						<h2 className="text-2xl font-bold tracking-tight text-fd-foreground">
							探索文档
						</h2>
					</div>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
						{/* 教程 (占2列) */}
						<Link
							href="/guides/lifecycle-and-window/"
							className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-fd-border bg-gradient-to-br from-fd-card to-fd-card/50 p-8 transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 md:col-span-2"
						>
							<div className="absolute right-0 top-0 -mt-8 -mr-8 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all group-hover:bg-blue-500/20" />
							<div>
								<div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-500">
									<Compass className="h-6 w-6" />
								</div>
								<h3 className="mb-2 text-xl font-bold text-fd-foreground">
									核心教程与生命周期
								</h3>
								<p className="text-fd-muted-foreground">
									按合理的学习路径，全面掌握插件的生命周期、窗口管理、笔记与数据库操作等核心概念。
								</p>
							</div>
							<div className="mt-8 flex items-center text-sm font-semibold text-blue-500">
								开始学习{' '}
								<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</div>
						</Link>

						{/* API 参考 */}
						<Link
							href="/reference/global/jsb/"
							className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-fd-border bg-fd-card p-8 transition-all hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
						>
							<div>
								<div className="mb-4 inline-flex rounded-xl bg-purple-500/10 p-3 text-purple-500">
									<BookOpen className="h-6 w-6" />
								</div>
								<h3 className="mb-2 text-xl font-bold text-fd-foreground">
									API 参考
								</h3>
								<p className="text-sm text-fd-muted-foreground">
									查阅全局对象与核心 API 的完整技术说明。
								</p>
							</div>
						</Link>

						{/* LibMN */}
						<Link
							href="/libmn/"
							className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-fd-border bg-fd-card p-8 transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
						>
							<div>
								<div className="mb-4 inline-flex rounded-xl bg-indigo-500/10 p-3 text-indigo-500">
									<Library className="h-6 w-6" />
								</div>
								<h3 className="mb-2 text-xl font-bold text-fd-foreground">
									LibMN 运行时
								</h3>
								<p className="text-sm text-fd-muted-foreground">
									深入了解 LibMN 运行时与插件开发的核心底层模块。
								</p>
							</div>
						</Link>

						{/* Cookbook (占2列) */}
						<Link
							href="/cookbook/batch-rename-notes/"
							className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-fd-border bg-fd-card p-8 transition-all hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 md:col-span-2"
						>
							<div className="absolute right-0 top-0 -mt-8 -mr-8 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20" />
							<div>
								<div className="mb-4 flex items-center gap-4">
									<div className="inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
										<Code2 className="h-6 w-6" />
									</div>
									<div className="inline-flex rounded-full border border-fd-border bg-fd-background/50 px-3 py-1 text-xs font-medium text-fd-muted-foreground backdrop-blur-md">
										开箱即用
									</div>
								</div>
								<h3 className="mb-2 text-xl font-bold text-fd-foreground">
									Cookbook 实践配方
								</h3>
								<p className="text-fd-muted-foreground">
									按任务查找完整、可运行的代码片段。从批量重命名笔记到自定义脑图节点，直接复制并在你的项目中运行。
								</p>
							</div>
						</Link>
					</div>
				</section>

				{/* Bottom CTA */}
				<section className="relative overflow-hidden border-t border-fd-border bg-fd-card/50">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
					<div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
						<Wrench className="mx-auto mb-6 h-12 w-12 text-fd-muted-foreground/50" />
						<h2 className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
							准备好开发你的第一个插件了吗？
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-lg text-fd-muted-foreground">
							跟随我们的快速指南，只需几分钟，即可在 MarginNote 中创建并运行属于你的自定义插件。
						</p>
						<div className="mt-8 flex items-center justify-center gap-4">
							<Link
								href="/guides/getting-started/"
								className="inline-flex h-12 items-center justify-center rounded-xl bg-fd-primary px-8 text-sm font-semibold text-fd-primary-foreground shadow-sm transition-all hover:brightness-110 active:scale-95"
							>
								立即开始
							</Link>
							<Link
								href="/contributing/"
								className="inline-flex h-12 items-center justify-center rounded-xl border border-fd-border bg-transparent px-8 text-sm font-medium text-fd-foreground transition-all hover:bg-fd-accent active:scale-95"
							>
								参与贡献
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default async function Page({ params }: PageProps) {
	const { slug = [] } = await params;
	const page = source.getPage(slug);
	if (!page) notFound();

	const Mdx = page.data.body;

	if (slug.length === 0) {
		return <HomePage />;
	}

	const tree = filterPageTree(source.pageTree, slug);

	return (
		<DocsLayout tree={tree}>
			<DocsPage toc={page.data.toc}>
				<DocsTitle>{page.data.title}</DocsTitle>
				<DocsDescription>{page.data.description}</DocsDescription>
				<DocsBody>
					<Mdx components={defaultMdxComponents} />
					<JsbApiFooter slug={page.slugs.join('/')} title={page.data.title} />
				</DocsBody>
			</DocsPage>
		</DocsLayout>
	);
}

export function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata({ params }: PageProps) {
	const { slug = [] } = await params;
	const page = source.getPage(slug);
	if (!page) notFound();

	return {
		title: page.data.title,
		description: page.data.description,
	};
}
