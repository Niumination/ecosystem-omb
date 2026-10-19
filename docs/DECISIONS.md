# DECISIONS — catatan keputusan

Keputusan hanya ditulis di sini setelah diambil. Usulan diberi tanda MENUNGGU.

## D-0001 — 2026-10-19 — Repo `ecosystem-omb` dibuat

Rumah setup & konfigurasi ekosistem OMB (Niumination Works), terpisah dari
`ecosystem-config` (Hermes) dan `omb-lightvela` (deployment).
Pemilik: `Assistant` (Chief of Staff). Diputuskan oleh manusia (Afrizal Munthe).

## D-0002 — 2026-10-19 — Lokasi registry = `ecosystem-omb/registry/omb/repos.yaml` (FINAL)

Diputuskan manusia (Afrizal Munthe). Opsi "repo terpisah" (§9 Fase 0).
Konsekuensi §9/§10: arsipkan sejumlah repo dormant sebagai pengganti aturan freeze
— daftar disiapkan `notaris` di `sensus-arsip` pertama; keputusan tetap di manusia.

## D-0003 — 2026-10-19 — Sensus manual (Fase 1)

GitHub API = 139 repo (99 own, 40 fork). Registry seed = 95 (55 own, 40 fork).
Selisih: 44 repo own baru, 0 hilang. Fork cocok (40=40).
Keputusan penambahan 44 repo ke registry: MENUNGGU KEPUTUSAN MANUSIA (§4.3).

## D-0004 — 2026-10-19 — Usulan klasifikasi 5 repo `domain: lain` — MENUNGGU KEPUTUSAN MANUSIA

| repo | fork | usulan domain | tier | alasan |
| --- | --- | --- | --- | --- |
| Devs-Niu | tidak | tetap `lain` | 3 | kosong total (0 KB, tanpa file/deskripsi) |
| Prakom-Surgawi | tidak | tetap `lain` | 3 | kosong, deskripsi generik |
| ZaryuHive | tidak | `desktop` | 3 | struktur rice/dotfiles (Configs/Source/screenshots) |
| UACC | ya | `agen` | 4 | MCP/agent harness (AGENTS.md, uacc_mcp/, .cursorrules) |
| PAGASUS-PRO | ya | `perkakas` | 4 | README: ADB Utility Toolkit |

Sumber: GitHub API live, 2026-10-19. Pindah domain butuh keputusan manusia (§4.3).

## Terbuka

- Fase 0: branch protection 13 repo tier 1; lokasi registry final.
- §6.1: grant tool GitHub per bot (manual, di Connected apps OMB).

## D-0005 — 2026-10-19 — Koreksi peta ekosistem

- Ekosistem **lightvela** = repo `brain`, file `docs/ecosystem-changelog.md` (changelog auto-sync). Tidak ada repo khusus seperti `ecosystem-config`/`ecosystem-omb`.
- `omb-lightvela` **bukan** ekosistem; itu repo setup/deployment instance OMB yang sedang berjalan.
- Rujukan ditambahkan di `README.md`. Sumber: klarifikasi manusia (Afrizal Munthe).

## D-0006 — 2026-10-19 — Fase 2 dijalankan (Pelayanan Publik)

Tim `Pelayanan Publik` dibuat: `wira` (Chief), `publik-portal`, `publik-akuntabilitas`.
Routine `laporan-publik` (wira, harian 08:00 Asia/Jakarta, ingat run lalu) dibuat
dan DIJEDA. Dijadwalkan setelah Fase 0 (branch protection) selesai.

## D-0007 — 2026-10-19 — Fase 3 dijalankan (Infrastruktur Agen)

Tim `Infrastruktur Agen` dibuat: `nala` (Chief), `agen-runtime`, `agen-harness`.
Domain `agen`: 21 repo, 7 own, 5 aktif. Tidak ada routine khusus fase ini (§8).
