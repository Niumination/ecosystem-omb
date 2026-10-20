# BACKLOG — status fase

Sumber: `docs/RENCANA-INDUK.md` §9. Satu fase per sesi. Diperbarui 2026-10-20.

| Fase | Isi | Status |
| --- | --- | --- |
| 0 | Prasyarat: branch protection tier-1; lokasi registry | ✅ registry FINAL; branch protection 6 repo tier-1 |
| 1 | Kantor Pusat: notaris, qa-review, sec-scan, ops-watch + routine | ✅ bot + routine; grant selesai (D-0018) |
| 2 | Pelayanan Publik: wira, publik-portal, publik-akuntabilitas | ✅ bot dibuat; grant selesai |
| 3 | ~~Infrastruktur Agen~~ dihapus (0 repo dalam lingkup 32) | ⚪ dibatalkan |
| 4 | Pendidikan & Riset, Web & Portal, Perkakas | ✅ selesai |
| 5 | Sistem & Lingkungan: arga, sys-desktop, sys-ade + webhook | ✅ tim selesai; webhook dilewati (D-0015) |

## Fase 1 — rincian

- [x] Bot dibuat: `notaris`, `qa-review`, `sec-scan`, `ops-watch` (section Kantor Pusat).
- [x] Routine `sensus-repo` (harian 06:00) — aktif.
- [x] Sensus: API 140 repo = 32 aktif + 108 excluded → 0 selisih (D-0016).
- [x] Usulan klasifikasi 5 repo `domain: lain` (lihat `docs/DECISIONS.md`).
- [x] Grant GitHub per bot (§6.1) — selesai 2026-10-19 (D-0014); diperluas all tools 2026-10-20 (D-0018).
- [x] Routine aktif: `sensus-repo`, `review-pr`, `drill-pemulihan` (D-0015).

## Fase 2 — rincian

- [x] Tim `Pelayanan Publik` dibuat: `wira` (Chief), `publik-portal`, `publik-akuntabilitas`.
- [x] Grant GitHub per bot (§6.1) — selesai (D-0018).

## Fase 3 — rincian

- [x] Tim `Infrastruktur Agen` dihapus (D-0012).

## Fase 4 — rincian

- [x] Tim `Web & Portal`: `kirana` (Chief), `web-app`.
- [x] Tim `Perkakas`: `yuda` (Chief), `tools-lead`.
- [x] Tim `Pendidikan & Riset`: `maya` (Chief), `edu-konten`, `riset-scout`.
- [x] Grant GitHub per bot (§6.1) — selesai (D-0018). `riset-scout` = read-only 7 tool.

## Fase 5 — rincian

- [x] Tim `Sistem & Lingkungan` dibuat: `arga` (Chief), `sys-desktop`, `sys-ade`.
- [ ] Webhook GitHub 13 repo tier 1 (§6.2) — **dilewati** (keputusan manusia 2026-10-19, D-0015).

## Routine — aktif

Aktif: `sensus-repo` (notaris, 06:00), `review-pr` (qa-review, 09:00 & 15:00), `drill-pemulihan` (ops-watch, tgl 1) — D-0015; `digest-harian` (Assistant, 19:00 WIB → #niumination-works) — D-0017.
Dihapus 2026-10-19 (referensi org lama): klasifikasi-lain, kesehatan-tier1/2, scan-secret, audit-dependensi, laporan-publik, sensus-arsip (D-0013).
