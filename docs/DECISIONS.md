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

## D-0008 — 2026-10-19 — Fase 4 dijalankan (3 tim)

Tiga tim dibuat sekaligus (Fase 2–3 bersih):
- `Web & Portal`: `kirana` (Chief), `web-app`.
- `Perkakas`: `yuda` (Chief), `tools-lead`.
- `Pendidikan & Riset`: `maya` (Chief), `edu-konten`, `riset-scout` (read-only §6.1).

## D-0009 — 2026-10-19 — Fase 5 dijalankan (Sistem & Lingkungan)

Tim `Sistem & Lingkungan` dibuat: `arga` (Chief), `sys-desktop`, `sys-ade`.
Domain `desktop` + `ade`: 32 repo, 12 own, 4 aktif (hampir semua arsip).
Organisasi lengkap: **7 tim, 21 bot** (20 baru + Assistant).
Webhook GitHub 13 repo tier 1 (§6.2) TERTUNDA: butuh endpoint webhook OMB + secret + konfirmasi URL publik.

## D-0010 — 2026-10-19 — Katalog routine §8 lengkap

11/11 routine dibuat, semua DIJEDA (belum dijadwalkan sampai Fase 0). Tidak ada routine baru
selain yang di §8; kalau mendekati 20, usulkan konsolidasi (§8).

## D-0011 — 2026-10-19 — Lingkup ekosistem OMB ditetapkan (32 repo aktif)

Atas keputusan manusia (Afrizal Munthe): lingkup repo ekosistem OMB ditetapkan pada **32 entri aktif**; **108 repo** dikeluarkan ke daftar `excluded:` (dikelola ekosistem lain / di luar lingkup OMB). Penyesuaian lanjutan dilakukan bertahap bila diperlukan.
Di PR #1 (branch `omb/notaris/20261019-kecualikan-ekosistem`), menunggu merge manusia.
Konsekuensi: beberapa tim tipis atau kosong (mis. Infrastruktur Agen = 0 repo).

## D-0012 — 2026-10-19 — Tim Infrastruktur Agen dihapus

Tim `Infrastruktur Agen` (`nala`, `agen-runtime`, `agen-harness`) dihapus karena **0 repo** dalam lingkup OMB 32 repo (D-0011). Org OMB kini **6 tim / 17 bot** (+ Assistant).

## D-0013 — 2026-10-19 — Routine disesuaikan ke lingkup baru

8 routine dihapus (referensi repo/hitungan org lama): `klasifikasi-lain`, `kesehatan-tier1`, `kesehatan-tier2`, `scan-secret`, `audit-dependensi`, `laporan-publik`, `digest-harian`, `sensus-arsip`.
Disimpan (generik, tetap valid): `sensus-repo` (notaris), `review-pr` (qa-review), `drill-pemulihan` (ops-watch). Semua masih DIJEDA.

## D-0014 — 2026-10-19 — Grant GitHub per bot DITERAPKAN (§6.1)

Diterapkan lewat API OMB lokal (`PATCH /api/bots/<id>`, field `composio:true` + `connectorTools.github.tools`), bukan lewat UI. Terverifikasi baca-balik `GET /api/bots`.
17 bot, tanpa tool delete/settings repo:
- notaris 14 · qa-review 7 · sec-scan 10 · ops-watch 13
- wira 10 · publik-portal 14 · publik-akuntabilitas 14
- arga 10 · sys-desktop 14 · sys-ade 14
- kirana 10 · web-app 14
- yuda 10 · tools-lead 14
- maya 10 · edu-konten 14 · riset-scout 7 (read saja)

## D-0015 — 2026-10-19 — Fase 0 selesai + routine aktif

Branch protection dipasang di **6 repo tier-1** (lingkup 32 repo): niu-dash, Niu-LKH, pabrik-aplikasi-gas, kune-ya.com, niu-dash-fullstack, ai-file-organizer-android. Aturan: require PR (0 approval), no force-push, no delete, enforce_admins=true. Status check CI menyusul per repo.
3 routine **diaktifkan**: `sensus-repo` (notaris, harian 06:00), `review-pr` (qa-review, 09:00 & 15:00), `drill-pemulihan` (ops-watch, tgl 1).
Webhook §6.2 **dilewati** (keputusan manusia 2026-10-19).
