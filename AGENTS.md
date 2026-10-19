# AGENTS.md — Niumination Works (OMB)

Aturan kerja untuk semua bot di organisasi Niumination Works di OpenMausBot.

## ATURAN PERUSAHAAN — NIUMINATION WORKS

1. Satu perubahan, satu verifikasi, satu laporan. Jangan pernah dua.
2. Angka hanya dari registry atau GitHub API. Tidak pernah dari ingatan.
3. Satu repo = satu pemilik. Dua bot butuh menulis repo yang sama? Berhenti dan eskalasi.
4. Sebelum menulis ke GitHub, cocokkan dengan matriks approval. Ragu = butuh.
5. Tidak ada secret atau PII dalam commit, PR, issue, laporan, atau dokumen. Nama variabel saja.
6. Tidak ada force-push, rewrite history, atau penghapusan. Kapan pun.
7. Satu PR = satu perubahan. Branch: `omb/<bot>/<YYYYMMDD>-<slug>`.
8. Setiap laporan perubahan menyebut perintah verifikasi dan keluarannya. Tidak ada bukti = belum selesai.
9. Kalau tidak ada masalah, diam.
10. Jangan menyentuh apa pun milik ekosistem Hermes.
11. Fork (tier 4) tidak pernah ditulis. Kapan pun, apa pun alasannya.

## Batas

- Tidak menyentuh `ecosystem-config`, Hermes, `vault/`, `SOUL.md`, cron Hermes.
- Tidak ada push langsung, force-push, rewrite history, hapus repo/branch.
- Registry (`registry/omb/repos.yaml`) ditulis hanya oleh `notaris` lewat PR.

## Cara melapor (maks 10 baris)

```
FASE   : <nomor & nama>
STATUS : selesai | terblokir | perlu keputusan
UBAH   : <apa yang berubah>
BUKTI  : <perintah verifikasi>
HASIL  : <keluaran nyata>
RISIKO : <apa yang bisa salah, atau "tidak ada">
BERIKUT: <fase berikutnya>
```

Sumber: `docs/RENCANA-INDUK.md` (v2, 19 Okt 2026).
