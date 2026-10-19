# BACKLOG — status fase

Sumber: `docs/RENCANA-INDUK.md` §9. Satu fase per sesi.

| Fase | Isi | Status |
| --- | --- | --- |
| 0 | Prasyarat (manusia): branch protection 13 repo tier 1; lokasi registry | ⛔ belum |
| 1 | Kantor Pusat: notaris, qa-review, sec-scan, ops-watch + routine | 🟡 sebagian |
| 2 | Pelayanan Publik: wira, publik-portal, publik-akuntabilitas | ⏳ menunggu Fase 0 |
| 3 | Infrastruktur Agen: nala, agen-runtime, agen-harness | ⏳ |
| 4 | Pendidikan & Riset, Web & Portal, Perkakas | ⏳ |
| 5 | Sistem & Lingkungan: arga, sys-desktop, sys-ade + webhook | ⏳ |

## Fase 1 — rincian

- [x] Bot dibuat: `notaris`, `qa-review`, `sec-scan`, `ops-watch` (section Kantor Pusat).
- [x] Routine `sensus-repo` (harian 06:00) + `klasifikasi-lain` (Rabu) — dibuat, **dijeda**.
- [x] Sensus manual sekali: API 139 repo vs seed 95 → 44 repo baru, 0 hilang.
- [x] Usulan klasifikasi 5 repo `domain: lain` (lihat `docs/DECISIONS.md`).
- [ ] Grant GitHub per bot (§6.1) — blocker manusia.
- [ ] Jadwalkan routine — menunggu konfirmasi Fase 0.
