# ecosystem-omb — Niumination Works

Repo orkestrasi/konfigurasi untuk ekosistem **OpenMausBot (OMB)** milik Niumination.
Ekosistem ketiga di akun GitHub yang sama, sengaja dipisah supaya tidak saling mengganggu.

| Ekosistem | Repo | Isi |
| --- | --- | --- |
| Hermes Agent (mac) | `ecosystem-config` | AGENTS.md, BACKLOG.md, scripts, docs — pipeline Hermes |
| OMB LightVela | `omb-lightvela` | Docker stack OMB di maus.abstract.biz.id |
| **Niumination Works (OMB)** | **`ecosystem-omb`** (repo ini) | registry repo, struktur tim/bot, routine, kebijakan |

## Isi

- `docs/RENCANA-INDUK.md` — rencana induk v2, sumber kebenaran struktur organisasi.
- `docs/DECISIONS.md` — catatan keputusan.
- `registry/omb/repos.yaml` — registry repo (seed 95 entri). Penulis tunggal: bot `notaris`, lewat PR.
- `AGENTS.md` — aturan kerja bot Niumination Works.
- `BACKLOG.md` — status fase.

## Batas

- Tidak menyentuh `ecosystem-config`, Hermes, `vault/`, `SOUL.md`, atau cron Hermes.
- Tidak ada secret/PII dalam commit, PR, issue, laporan, dokumen.
- Tidak ada push langsung, force-push, atau penghapusan repo/branch.
- Fork (tier 4) tidak pernah ditulis.
- Satu PR = satu perubahan. Branch: `omb/<bot>/<YYYYMMDD>-<slug>`.
