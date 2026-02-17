type JsbApi = {
	protocol: string;
	properties: string[];
	instance_methods: string[];
	class_methods: string[];
	export_aliases: Record<string, string>;
};

const headerUrlLoaders = import.meta.glob('../definitions/**/*.h', {
	query: '?url',
	import: 'default',
});

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

function getPageTitle(): string | null {
	const h1 = document.querySelector('main h1');
	const t = (h1 && h1.textContent ? h1.textContent : '').trim();
	return t || null;
}

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
		Object.entries(exportAliases).sort(([a], [b]) => a.localeCompare(b))
	) as Record<string, string>;

	return {
		protocol: protocolName,
		properties: uniq(properties),
		instance_methods: uniq(instanceMethods),
		class_methods: uniq(classMethods),
		export_aliases: sortedAliases,
	};
}

function el<K extends keyof HTMLElementTagNameMap>(
	name: K,
	attrs: Record<string, string> = {},
	children: Node[] = []
): HTMLElementTagNameMap[K] {
	const node = document.createElement(name);
	for (const [k, v] of Object.entries(attrs)) {
		if (k === 'text') node.textContent = v;
		else node.setAttribute(k, v);
	}
	for (const c of children) node.appendChild(c);
	return node;
}

function code(text: string): HTMLElement {
	return el('code', { text });
}

function renderApi(container: HTMLElement, api: JsbApi, only?: PageConfig['only']) {
	const allowed = new Set(only ?? ['properties', 'class', 'instance', 'aliases']);
	container.textContent = '';
	if (allowed.has('properties') && api.properties.length) {
		container.appendChild(el('h3', { text: '属性' }));
		const ul = el('ul');
		for (const p of api.properties) ul.appendChild(el('li', {}, [code(p)]));
		container.appendChild(ul);
	}
	if (allowed.has('class') && api.class_methods.length) {
		container.appendChild(el('h3', { text: '类方法' }));
		const ul = el('ul');
		for (const m of api.class_methods) ul.appendChild(el('li', {}, [code(`${m}()`)]));
		container.appendChild(ul);
	}
	if (allowed.has('instance') && api.instance_methods.length) {
		container.appendChild(el('h3', { text: '实例方法' }));
		const ul = el('ul');
		for (const m of api.instance_methods) ul.appendChild(el('li', {}, [code(`${m}()`)]));
		container.appendChild(ul);
	}
	const aliasKeys = Object.keys(api.export_aliases || {});
	if (allowed.has('aliases') && aliasKeys.length) {
		container.appendChild(el('h3', { text: 'JSExportAs 别名' }));
		const table = el('table');
		const thead = el('thead');
		const trh = el('tr');
		trh.appendChild(el('th', { text: 'JS 名' }));
		trh.appendChild(el('th', { text: 'ObjC selector（推断）' }));
		thead.appendChild(trh);
		table.appendChild(thead);
		const tbody = el('tbody');
		for (const jsName of aliasKeys) {
			const tr = el('tr');
			tr.appendChild(el('td', {}, [code(jsName)]));
			tr.appendChild(el('td', {}, [code(api.export_aliases[jsName])])); 
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		container.appendChild(table);
	}
}

async function loadHeaderText(protocol: string): Promise<{ source: string; text: string } | null> {
	const entries = Object.keys(headerUrlLoaders);
	const targetKey = entries.find((k) => k.endsWith(`/${protocol}.h`));
	if (!targetKey) return null;
	const url = (await (headerUrlLoaders as any)[targetKey]()) as string;
	const resp = await fetch(url);
	if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
	return { source: targetKey.replace('../definitions/', ''), text: await resp.text() };
}

function getSlug(): string {
	return location.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
}

export function initJsbApiFooter() {
	const root = document.querySelector<HTMLElement>('[data-jsb-api]');
	if (!root) return;

	if (!location.pathname.startsWith('/reference/')) {
		root.style.display = 'none';
		return;
	}

	const statusEl = root.querySelector<HTMLElement>('[data-jsb-api-status]')!;
	const protocolEl = root.querySelector<HTMLElement>('[data-jsb-api-protocol]')!;
	const sourceEl = root.querySelector<HTMLElement>('[data-jsb-api-source]')!;
	const bodyEl = root.querySelector<HTMLElement>('[data-jsb-api-body]')!;

	const slug = getSlug();
	const cfg = GLOBAL_PAGE_PROTOCOL_MAP[slug];

	let protocol: string | null = cfg?.protocol ?? null;
	if (!protocol) {
		const title = getPageTitle();
		if (!title) {
			root.style.display = 'none';
			return;
		}
		protocol = protocolFromTitle(title);
	}

	protocolEl.textContent = protocol;

	(async () => {
		try {
			const loaded = await loadHeaderText(protocol);
			if (!loaded) {
				root.style.display = 'none';
				return;
			}
			const api = parseProtocolFromHeader(loaded.text, protocol);
			sourceEl.textContent = loaded.source;
			renderApi(bodyEl, api, cfg?.only);
			statusEl.textContent = '';
		} catch (e: any) {
			// Keep user-facing UI clean: hide the block on errors.
			root.style.display = 'none';
		}
	})().catch(() => {});
}
