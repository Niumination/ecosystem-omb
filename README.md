# ecosystem-omb — Niumination Works

Repo orkestrasi/konfigurasi untuk ekosistem **OpenMausBot (OMB)** milik Niumination.
Ekosistem ini berdiri sendiri di akun GitHub yang sama, supaya tidak saling mengganggu.

## Tiga ekosistem

| Ekosistem | Repo / lokasi | Isi |
| --- | --- | --- |
| Hermes Agent (mac) | `ecosystem-config` | AGENTS.md, BACKLOG.md, scripts, docs — pipeline Hermes |
| **lightvela** | `brain` → `docs/ecosystem-changelog.md` | catatan perubahan ekosistem (auto-sync); **tidak ada repo khusus** |
| **Niumination Works (OMB)** | **`ecosystem-omb`** (repo ini) | registry repo, struktur tim/bot, routine, kebijakan |

Repo pendukung OMB (bukan ekosistem tersendiri):

- `omb-lightvela` — setup/deployment instance OMB yang sedang berjalan (compose, Dockerfile, Caddyfile, config redacted).
- `omb-lightvela-secrets` (privat) — config utuh, `.env`, backup volume 9router.

Rujukan ekosistem lightvela:
https://github.com/Niumination/brain/blob/main/docs/ecosystem-changelog.md

## Isi

- `docs/RENCANA-INDUK.md` — rencana induk v2, sumber kebenaran struktur organisasi.
- `docs/DECISIONS.md` — catatan keputusan.
- `registry/omb/repos.yaml` — registry repo (32 entri aktif, v2). Penulis tunggal: bot `notaris`, lewat PR.
- `AGENTS.md` — aturan kerja bot Niumination Works.
- `BACKLOG.md` — status fase.

## Integrasi

- **GitHub** — registry + repo OMB; grant all tools (D-0018), kecuali `riset-scout` read-only (§6.1).
- **Slack** — workspace `niumination`; channel kerja `#niumination-works`. Digest harian (Assistant) dikirim ke sana. Lihat D-0017.

## Batas

- Tidak menyentuh `ecosystem-config`, Hermes, `vault/`, `SOUL.md`, atau cron Hermes.
- Tidak ada secret/PII dalam commit, PR, issue, laporan, dokumen.
- Tidak ada push langsung, force-push, atau penghapusan repo/branch.
- Fork (tier 4) tidak pernah ditulis.
- Satu PR = satu perubahan. Branch: `omb/<bot>/<YYYYMMDD>-<slug>`.
