#!/usr/bin/env node
import { copyFile, lstat, mkdir, readFile, readdir, realpath } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const skill = 'meta-ads-digital-products';
const source = fileURLToPath(new URL('../' + skill + '/', import.meta.url));

async function inspect(path) {
  try { return await lstat(path); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

async function filesIn(directory, prefix = '') {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = join(prefix, entry.name);
    if (entry.isSymbolicLink()) throw new Error('Skill source contains a symbolic link: ' + relative);
    if (entry.isDirectory()) files.push(...await filesIn(join(directory, entry.name), relative));
    else if (entry.isFile()) files.push(relative);
    else throw new Error('Unsupported skill file: ' + relative);
  }
  return files.sort();
}

export async function install(destinationRoot = join(homedir(), '.agents', 'skills')) {
  const destination = resolve(destinationRoot, skill);
  const files = await filesIn(source);
  if (!files.includes('SKILL.md')) throw new Error('Package is missing SKILL.md.');

  for (const relative of ['', ...files]) {
    const target = join(destination, relative);
    let path = target;
    while (path === destination || path.startsWith(destination + sep)) {
      const info = await inspect(path);
      if (info?.isSymbolicLink()) throw new Error('Destination contains a symbolic link: ' + path);
      if (info && path === target && relative && !info.isFile()) {
        throw new Error('Expected a file at ' + path);
      }
      if (info && (path === destination || path !== target) && !info.isDirectory()) {
        throw new Error('Expected a directory at ' + path);
      }
      if (path === destination) break;
      path = dirname(path);
    }
  }

  for (const relative of files) {
    const target = join(destination, relative);
    await mkdir(dirname(target), { recursive: true });
    await copyFile(join(source, relative), target);
    if (!(await readFile(target)).equals(await readFile(join(source, relative)))) {
      throw new Error('Installed file verification failed: ' + relative);
    }
  }
  return { destination, count: files.length };
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === '--help') {
    console.log('Install the Agent Skill: meta-ads-digital-products-install [--dest <skills-directory>]\nDefault: ~/.agents/skills (Codex and Grok). For other hosts, use their documented skills directory, for example --dest ~/.claude/skills for Claude Code. Re-run to update bundled skill files; additional files are preserved.');
    return;
  }
  if (args.length && !(args.length === 2 && args[0] === '--dest' && args[1].trim())) {
    throw new Error('Usage: meta-ads-digital-products-install [--dest <skills-directory>]');
  }
  const result = await install(args[1]);
  console.log('Installed ' + skill + ' at ' + result.destination +
    '\nCopied and checked ' + result.count + ' skill files. Available on the agent next turn.');
}

if (process.argv[1] && await realpath(process.argv[1]) === await realpath(fileURLToPath(import.meta.url))) {
  main().catch(error => { console.error('Installation failed: ' + error.message); process.exitCode = 1; });
}
