'use client';

import { useEffect, useMemo, useState } from 'react';

type JsbApi = {
	protocol: string;
	properties: string[];
	instance_methods: string[];
	class_methods: string[];
	export_aliases: Record<string, string>;
};

type PageConfig = {
	protocol: string;
	only?: Array<'properties' | 'class' | 'instance' | 'aliases'>;
};

const GLOBAL_PAGE_PROTOCOL_MAP: Record<string, PageConfig> = {
	'reference/global/application': { protocol: 'JSBApplication' },
	'reference/global/database': { protocol: 'JSBMbModelTool' },
	'reference/global/note': { protocol: 'JSBMbBookNote', only: ['class'] },
	'reference/global/self': { protocol: 'JSBJSExtension' },
};

function protocolFromTitle(title: string): string {
	return `JSB${title.replace(/\s+/g, '')}`;
}

function selectorGuessFromDecl(decl: string): string {
	const stripped = decl.split('//', 1)[0].trim().replace(/;$/, '').trim();
	const noPrefix = stripped.replace(/^[-+]\s*\([^)]*\)\s*/, '').trim();
	if (!noPrefix.includes(':')) return noPrefix.split(/\s|\(/, 1)[0].trim();
	const parts = noPrefix.split(':');
	const labels = parts.slice(0, -1).map((p) => {
		const tokens = p.match(/[A-Za-z_][A-Za-z0-9_]*/g);
		return tokens && tokens.length ? tokens[tokens.length - 1] : '';
	});
	return `${labels.join(':')}:`;
}

function jsNameFromObjcDecl(decl: string): string {
	const stripped = decl.split('//', 1)[0].trim().replace(/;$/, '').trim();
	const noPrefix = stripped.replace(/^[-+]\s*\([^)]*\)\s*/, '').trim();
	if (!noPrefix.includes(':')) return noPrefix.split(/\s|\(/, 1)[0].trim();
	const parts = noPrefix.split(':');
	const labels = parts.slice(0, -1).map((p) => {
		const tokens = p.match(/[A-Za-z_][A-Za-z0-9_]*/g);
		return tokens && tokens.length ? tokens[tokens.length - 1] : '';
	});
	if (!labels.length) return '';
	let js = labels[0];
	for (const lab of labels.slice(1)) {
		if (!lab) continue;
		js += lab[0].toUpperCase() + lab.slice(1);
	}
	return js;
}

function parseProtocolFromHeader(headerText: string, protocolName: string): JsbApi {
	const lines = headerText.split(/\r?\n/);
	let inProtocol = false;
	const properties: string[] = [];
	const instanceMethods: string[] = [];
	const classMethods: string[] = [];
	const exportAliases: Record<string, string> = {};
	let pendingExportAs: string | null = null;

	for (const raw of lines) {
		const line = raw.trim();
		if (!line || line.startsWith('#') || line.startsWith('//')) continue;
		const start = line.match(/^@protocol\s+(\w+)\b/);
		if (start) {
			inProtocol = start[1] === protocolName;
			pendingExportAs = null;
			continue;
		}
		if (!inProtocol) continue;
		if (line === '@end') break;

		if (line.startsWith('JSExportAs(')) {
			const m = line.match(/^JSExportAs\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*,/);
			if (m) pendingExportAs = m[1];
			continue;
		}
		if (line.startsWith('@property')) {
			const m = line.match(/([A-Za-z_][A-Za-z0-9_]*)\s*;\s*(?:(?:\/\/).*)?$/);
			if (m) properties.push(m[1]);
			continue;
		}
		if (line.startsWith('- (') || line.startsWith('+ (')) {
			const jsName = pendingExportAs || jsNameFromObjcDecl(line);
			const selector = selectorGuessFromDecl(line);
			if (pendingExportAs) exportAliases[jsName] = selector;
			pendingExportAs = null;
			if (line.startsWith('+ (')) classMethods.push(jsName);
			else instanceMethods.push(jsName);
			continue;
		}
	}

	const uniq = (arr: string[]) => Array.from(new Set(arr.filter(Boolean))).sort();
	const sortedAliases = Object.fromEntries(
		Object.entries(exportAliases).sort(([a], [b]) => a.localeCompare(b)),
	) as Record<string, string>;

	return {
		protocol: protocolName,
		properties: uniq(properties),
		instance_methods: uniq(instanceMethods),
		class_methods: uniq(classMethods),
		export_aliases: sortedAliases,
	};
}

async function loadHeaderText(protocol: string): Promise<{ source: string; text: string } | null> {
	const response = await fetch('/definitions-manifest.json');
	if (!response.ok) throw new Error(`manifest HTTP ${response.status}`);
	const manifest = (await response.json()) as Record<string, string>;
	const source = manifest[protocol];
	if (!source) return null;

	const headerResponse = await fetch(`/definitions/${source}`);
	if (!headerResponse.ok) throw new Error(`header HTTP ${headerResponse.status}`);
	return { source, text: await headerResponse.text() };
}

function ApiList({
	title,
	items,
	suffix = '',
}: {
	title: string;
	items: string[];
	suffix?: string;
}) {
	if (!items.length) return null;
	return (
		<>
			<h3>{title}</h3>
			<ul>
				{items.map((item) => (
					<li key={item}>
						<code>
							{item}
							{suffix}
						</code>
					</li>
				))}
			</ul>
		</>
	);
}

export function JsbApiFooter({ slug, title }: { slug: string; title: string }) {
	const config = GLOBAL_PAGE_PROTOCOL_MAP[slug];
	const protocol = useMemo(() => config?.protocol ?? protocolFromTitle(title), [config?.protocol, title]);
	const [state, setState] = useState<
		| { status: 'loading' }
		| { status: 'hidden' }
		| { status: 'ready'; api: JsbApi; source: string }
	>({ status: 'loading' });

	useEffect(() => {
		if (!slug.startsWith('reference/')) {
			setState({ status: 'hidden' });
			return;
		}

		let cancelled = false;
		setState({ status: 'loading' });
		loadHeaderText(protocol)
			.then((loaded) => {
				if (cancelled) return;
				if (!loaded) {
					setState({ status: 'hidden' });
					return;
				}
				setState({
					status: 'ready',
					api: parseProtocolFromHeader(loaded.text, protocol),
					source: loaded.source,
				});
			})
			.catch((error: unknown) => {
				console.error('Failed to load JSB API footer', {
					protocol,
					slug,
					error,
				});
				if (!cancelled) setState({ status: 'hidden' });
			});

		return () => {
			cancelled = true;
		};
	}, [protocol, slug]);

	if (state.status === 'hidden') return null;

	const only = new Set(config?.only ?? ['properties', 'class', 'instance', 'aliases']);
	const aliasKeys = state.status === 'ready' ? Object.keys(state.api.export_aliases) : [];

	return (
		<section className="jsb-api" data-jsb-api>
			<details className="jsb-api__details">
				<summary className="jsb-api__summary">头文件API清单</summary>
				<p className="jsb-api__meta">
					{state.status === 'loading' ? '正在加载...' : ''}
				</p>
				<p className="jsb-api__meta">
					协议：<code>{protocol}</code>，来源：
					<code>{state.status === 'ready' ? state.source : '-'}</code>
				</p>
				{state.status === 'ready' ? (
					<div>
						{only.has('properties') ? <ApiList title="属性" items={state.api.properties} /> : null}
						{only.has('class') ? <ApiList title="类方法" items={state.api.class_methods} suffix="()" /> : null}
						{only.has('instance') ? (
							<ApiList title="实例方法" items={state.api.instance_methods} suffix="()" />
						) : null}
						{only.has('aliases') && aliasKeys.length ? (
							<>
								<h3>JSExportAs别名</h3>
								<table>
									<thead>
										<tr>
											<th>JS名</th>
											<th>ObjC selector(推断)</th>
										</tr>
									</thead>
									<tbody>
										{aliasKeys.map((jsName) => (
											<tr key={jsName}>
												<td>
													<code>{jsName}</code>
												</td>
												<td>
													<code>{state.api.export_aliases[jsName]}</code>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</>
						) : null}
					</div>
				) : null}
			</details>
		</section>
	);
}
