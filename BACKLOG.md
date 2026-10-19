# BACKLOG — status fase

Sumber: `docs/RENCANA-INDUK.md` §9. Satu fase per sesi.

| Fase | Isi | Status |
| --- | --- | --- |
| 0 | Prasyarat (manusia): branch protection 13 repo tier 1; lokasi registry | 🟡 registry FINAL; branch protection belum |
| 1 | Kantor Pusat: notaris, qa-review, sec-scan, ops-watch + routine | 🟡 sebagian |
| 2 | Pelayanan Publik: wira, publik-portal, publik-akuntabilitas | 🟡 sebagian (bot dibuat; routine dijeda) |
| 3 | Infrastruktur Agen: nala, agen-runtime, agen-harness | ✅ selesai |
| 4 | Pendidikan & Riset, Web & Portal, Perkakas | ✅ selesai |
| 5 | Sistem & Lingkungan: arga, sys-desktop, sys-ade + webhook | 🟡 tim selesai; webhook tertunda |

## Fase 1 — rincian

- [x] Bot dibuat: `notaris`, `qa-review`, `sec-scan`, `ops-watch` (section Kantor Pusat).
- [x] Routine `sensus-repo` (harian 06:00) + `klasifikasi-lain` (Rabu) — dibuat, **dijeda**.
- [x] Sensus manual sekali: API 139 repo vs seed 95 → 44 repo baru, 0 hilang.
- [x] Usulan klasifikasi 5 repo `domain: lain` (lihat `docs/DECISIONS.md`).
- [ ] Grant GitHub per bot (§6.1) — blocker manusia.
- [ ] Jadwalkan routine — menunggu konfirmasi Fase 0.

## Fase 2 — rincian

- [x] Tim `Pelayanan Publik` dibuat: `wira` (Chief), `publik-portal`, `publik-akuntabilitas`.
- [x] Routine `laporan-publik` (wira, harian 08:00) — dibuat, **dijeda**.
- [ ] Grant GitHub per bot (§6.1) — blocker manusia.
- [ ] Jadwalkan routine — menunggu Fase 0.

## Fase 3 — rincian

- [x] Tim `Infrastruktur Agen` dibuat: `nala` (Chief), `agen-runtime`, `agen-harness`.
- [ ] Grant GitHub per bot (§6.1) — blocker manusia.

## Fase 4 — rincian

- [x] Tim `Web & Portal`: `kirana` (Chief), `web-app`.
- [x] Tim `Perkakas`: `yuda` (Chief), `tools-lead`.
- [x] Tim `Pendidikan & Riset`: `maya` (Chief), `edu-konten`, `riset-scout`.
- [ ] Grant GitHub per bot (§6.1) — blocker manusia. `riset-scout` = read saja.

## Fase 5 — rincian

- [x] Tim `Sistem & Lingkungan` dibuat: `arga` (Chief), `sys-desktop`, `sys-ade`.
- [ ] Webhook GitHub di 13 repo tier 1 (§6.2) — **tertunda**, butuh endpoint OMB + secret + URL publik.
