#!/usr/bin/env node
// Sensus repo GitHub Niumination vs registry ecosystem-omb — DETERMINISTIK.
// Pakai:  node sensus-repo.mjs [daftar-api.txt]
//   daftar-api.txt = nama repo satu per baris, diambil lewat GitHub API TERAUTENTIKASI
//   (tool GITHUB_LIST_REPOSITORIES_FOR_THE_AUTHENTICATED_USER, type=owner).
//   Tanpa argumen: fallback API publik — CATATAN: repo PRIVAT tidak ikut, hasil bisa salah.
import { readFileSync } from "node:fs";
const OWNER = "Niumination";
const REG_URL = "https://raw.githubusercontent.com/Niumination/ecosystem-omb/main/registry/omb/repos.yaml";
const H = { "user-agent": "omb-sensus", accept: "application/vnd.github+json" };

async function publicNames() {
  const out = [];
  for (let p = 1; ; p++) {
    const r = await fetch(`https://api.github.com/users/${OWNER}/repos?per_page=100&page=${p}&type=owner`, { headers: H });
    if (!r.ok) throw new Error(`GitHub API HTTP ${r.status}`);
    const b = await r.json();
    out.push(...b.map((x) => x.name));
    if (!Array.isArray(b) || b.length < 100) break;
  }
  return out;
}

function parseList(yaml, key) {
  const i = yaml.indexOf(`\n${key}:\n`);
  if (i < 0) return [];
  let body = yaml.slice(i + key.length + 3);
  const m = body.match(/\n[A-Za-z]/);
  if (m) body = body.slice(0, m.index);
  return [...body.matchAll(/-\s*repo:\s*(\S+)/g)].map((x) => x[1]);
}

let names, src;
const arg = process.argv[2];
if (arg) {
  names = readFileSync(arg, "utf8").split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  src = "terautentikasi (file)";
} else {
  names = await publicNames();
  src = "PUBLIK — repo privat tidak ikut, hati-hati!";
}

const yaml = await (await fetch(REG_URL)).text();
const active = parseList(yaml, "repos");
const excluded = parseList(yaml, "excluded");
const known = new Set([...active, ...excluded]);
const fresh = names.filter((n) => !known.has(n)).sort();
const missing = active.filter((n) => !names.includes(n)).sort();

console.log(`sumber daftar  : ${src}`);
console.log(`API total      : ${names.length}`);
console.log(`registry aktif : ${active.length}`);
console.log(`registry excluded: ${excluded.length}`);
console.log(`selisih masuk (repo baru): ${fresh.length}${fresh.length ? " -> " + fresh.join(", ") : ""}`);
console.log(`selisih keluar (di registry, tak di API): ${missing.length}${missing.length ? " -> " + missing.join(", ") : ""}`);
console.log(fresh.length || missing.length ? "STATUS: ada selisih" : "STATUS: tidak ada temuan");
