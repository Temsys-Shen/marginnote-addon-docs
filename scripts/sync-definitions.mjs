import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const sourceDir = path.join(root, 'src', 'definitions');
const targetDir = path.join(root, 'public', 'definitions');
const manifestPath = path.join(root, 'public', 'definitions-manifest.json');

async function walk(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) files.push(...(await walk(full)));
		else if (entry.isFile() && entry.name.endsWith('.h')) files.push(full);
	}
	return files;
}

await fs.rm(targetDir, { recursive: true, force: true });
await fs.mkdir(targetDir, { recursive: true });

const manifest = {};
for (const file of await walk(sourceDir)) {
	const rel = path.relative(sourceDir, file).split(path.sep).join('/');
	const protocol = path.basename(file, '.h');
	const target = path.join(targetDir, rel);
	await fs.mkdir(path.dirname(target), { recursive: true });
	await fs.copyFile(file, target);
	manifest[protocol] = rel;
}

await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
