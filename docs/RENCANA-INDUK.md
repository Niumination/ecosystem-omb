# RENCANA INDUK v2 — Niumination Works di OpenMausBot

**Kepada:** bot utama OMB (`Assistant`, Chief of Staff)
**Dari:** Afrizal Munthe
**Tanggal:** 19 Oktober 2026
**Versi:** 2 — struktur tim diturunkan dari data portofolio, bukan dari bahasa pemrograman

---

## 0. Cara membaca dokumen ini

Rencana pembangunan perusahaan di OMB yang mengelola **95 repo GitHub**.
Mandiri — terpisah dari ekosistem Hermes. Jangan sentuh konfigurasi Hermes,
`SOUL.md`, cron Hermes, atau `vault/`.

Eksekusi **satu fase per sesi**. Setiap fase punya bagian **VERIFIKASI**.

**Perubahan dari v1:** pengelompokan v1 memakai bahasa pemrograman dan
menghasilkan satu spesialis memegang 48 repo sementara yang lain 2. Itu salah.
v2 mengelompokkan berdasarkan **urusan**, dan jumlah tim serta bot diturunkan
dari beban kerja nyata.

---

## 1. Data yang menjadi dasar struktur

Diambil dari GitHub API, 19 Oktober 2026. Semua angka di dokumen ini berasal
dari tabel ini — jangan diganti dengan perkiraan.

### 1.1 Portofolio

```
total repo        : 95
milik sendiri     : 55
FORK upstream     : 40   (42%)
own aktif ≤120 hr : 37
```

### 1.2 Sepuluh domain urusan

| Domain | Total | Own | Fork | Own aktif |
| --- | ---: | ---: | ---: | ---: |
| desktop (OS, rice, Hyprland, Windows) | 26 | 9 | 17 | 2 |
| agen (orkestrasi, harness, MCP) | 21 | 7 | 14 | 5 |
| publik (pemerintahan Aceh Tengah) | 9 | 9 | 0 | **9** |
| web (dashboard, portal pribadi) | 9 | 7 | 2 | 4 |
| perkakas (utilitas) | 7 | 6 | 1 | 4 |
| ade (terminal / AI dev environment) | 6 | 3 | 3 | 2 |
| lain (belum terklasifikasi) | 5 | 3 | 2 | 0 |
| pusat (yang mengurus portofolio) | 4 | 4 | 0 | 4 |
| edukasi (Akademi Gen AI, konten) | 4 | 4 | 0 | 4 |
| riset (eksperimen) | 4 | 3 | 1 | 3 |

### 1.3 Tiga kesimpulan yang menentukan desain

**a. `desktop` besar tapi hampir mati.** 26 repo, hanya **2** yang aktif milik
sendiri. Kalau tim diukur dari jumlah repo, tim desktop akan terlihat paling
penting. Padahal sebaliknya. **Ukuran tim = repo own aktif, bukan total.**

**b. `publik` adalah pusat kerja yang sebenarnya.** 9 repo, **semuanya** milik
sendiri dan **semuanya** aktif. Nol fork. Ini juga domain dengan risiko tertinggi
— portal Pemkab, watchdog pengadaan, laporan kepegawaian.

**c. 40 fork tidak butuh tim.** Fork adalah kode upstream. Bot yang
"memperbaiki" fork hanya menghasilkan kebisingan. Semua fork jadi `tier: 4`,
tetap tercatat di domainnya masing-masing, tapi `write_policy: none` dan tanpa
routine.

---

## 2. Struktur organisasi — 7 tim, 21 bot

Jumlah tim = jumlah domain yang punya beban kerja nyata. Domain `desktop` dan
`ade` digabung (keduanya "mesin tempat kerja dilakukan", dan masing-masing cuma
2 repo aktif). Domain `edukasi` dan `riset` digabung (4 + 3 aktif, terlalu kecil
untuk berdiri sendiri). Domain `lain` bukan tim — itu tugas `notaris`.

```
NIUMINATION WORKS — 7 tim, 21 bot
│
├─ 1. KANTOR PUSAT                              9 repo · 7 own · 4 aktif
│     Assistant        Chief of Staff (sudah ada) — delegasi, digest, governance
│     notaris          Sekretaris — PEMILIK TUNGGAL registry + 5 repo 'lain'
│     qa-review        Layanan bersama: review PR semua tim
│     sec-scan         Layanan bersama: secret & dependensi semua tim
│     ops-watch        Layanan bersama: kesehatan & insiden semua tim
│
├─ 2. PELAYANAN PUBLIK                          9 repo · 9 own · 9 aktif  ← terberat
│     wira             Chief
│     publik-portal        PemdiAcehTengah, kms-spbe, SPBE-DevOps-Academy,
│                          pabrik-aplikasi-gas
│     publik-akuntabilitas mata-aihackfest-2026, mata-watchdog-pi, Niu-LKH,
│                          Smart-ASN-Gayo-Mengaji, niu-gayo-agroclimate
│
├─ 3. INFRASTRUKTUR AGEN                       21 repo · 7 own · 5 aktif
│     nala             Chief
│     agen-runtime     omb-lightvela, mirai, hermes-office, HermesV-Github,
│                      niu-mission-control  (+8 fork terkait)
│     agen-harness     jcode-eco, Continue-Agent  (+6 fork harness/MCP)
│
├─ 4. SISTEM & LINGKUNGAN                      32 repo · 12 own · 4 aktif
│     arga             Chief
│     sys-desktop      26 repo desktop/OS/rice (9 own, hanya 2 aktif)
│     sys-ade          6 repo terminal/ADE (3 own, 2 aktif)
│
├─ 5. WEB & PORTAL                              9 repo · 7 own · 4 aktif
│     kirana           Chief
│     web-app          niu-dash-fullstack, kune-ya.com, niu-private,
│                      VirtualAssistance, Niu-Cyber-Search-Engine,
│                      mac-web-dashboard, arch-web-dashboard  (+2 fork)
│
├─ 6. PERKAKAS                                  7 repo · 6 own · 4 aktif
│     yuda             Chief
│     tools-lead       pdf-inspector, latticesend, niu-speedtest,
│                      ai-file-organizer-android, niu-cast, free-vps  (+1 fork)
│
└─ 7. PENDIDIKAN & RISET                        8 repo · 7 own · 7 aktif
      maya             Chief
      edu-konten       kelas, niu-journal, niu-journal-reflection-assistant,
                       contentvela
      riset-scout      spatial-vision, sapa-ai, Maze-3D-Game, roboto_origin
```

### 2.1 Kenapa layanan mutu/operasi ada di Kantor Pusat, bukan tim sendiri

Review, pemindaian secret, dan pemantauan kesehatan memotong **semua** domain.
Kalau dijadikan tim sendiri, setiap permintaan harus lewat delegasi lintas tim
untuk hal yang seharusnya rutin. Sebagai layanan bersama di bawah Chief of
Staff, mereka dipanggil langsung oleh tim mana pun.

### 2.2 Beban per bot — alasan pembagian ini

| Bot | Tim | Total | Own | Aktif |
| --- | --- | ---: | ---: | ---: |
| publik-akuntabilitas | Pelayanan Publik | 5 | 5 | 5 |
| agen-runtime | Infrastruktur Agen | 13 | 5 | 4 |
| notaris | Kantor Pusat | 9 | 7 | 4 |
| publik-portal | Pelayanan Publik | 4 | 4 | 4 |
| tools-lead | Perkakas | 7 | 6 | 4 |
| web-app | Web & Portal | 9 | 7 | 4 |
| edu-konten | Pendidikan & Riset | 4 | 4 | 4 |
| riset-scout | Pendidikan & Riset | 4 | 3 | 3 |
| sys-desktop | Sistem & Lingkungan | 26 | 9 | 2 |
| sys-ade | Sistem & Lingkungan | 6 | 3 | 2 |
| agen-harness | Infrastruktur Agen | 8 | 2 | 1 |

Tidak ada bot yang memegang lebih dari 5 repo aktif. `sys-desktop` memegang 26
repo tapi hanya 2 yang aktif — sisanya arsip yang tidak menghasilkan kerjaan.

---

## 3. Batas yang boleh Anda sentuh

| Boleh | Tidak boleh |
| --- | --- |
| Membuat 7 tim & 20 bot baru | Mengubah bot yang sudah ada (Dewi, Sora, Bayu, Tomo, Ika, Nadia, Rex) |
| Routine untuk bot di tim Anda | Routine bot lain tanpa Full access |
| Baca semua 95 repo | Menulis ke repo tier 4 (fork) |
| Branch + PR di tier 1–3 | Push langsung, force-push, rewrite history |
| Buka & tutup issue | Hapus repo atau branch |
| Tulis `registry/omb/**` via PR (hanya `notaris`) | Ubah `ecosystem-config` di luar itu |
| | Sentuh apa pun milik Hermes |
| | Commit secret dalam bentuk apa pun |

---

## 4. Registry — sumber kebenaran tunggal

**Lokasi:** `ecosystem-config` → `registry/omb/repos.yaml`
**Penulis tunggal:** `notaris`, lewat PR. Yang lain hanya membaca.

Seed **sudah dibuat dan tervalidasi** — `registry/repos.yaml`, 95 entri,
`version: 2`, dengan field `domain`, `team`, dan `owner` per repo.

```
counts: {tier1: 13, tier2: 25, tier3: 18, tier4: 39, total: 95, fork: 40}
```

### Skema per entri

```yaml
- repo: PemdiAcehTengah
  tier: 1
  fork: false
  domain: publik
  team: Pelayanan Publik
  owner: publik-portal        # SATU penulis. Tidak boleh dua.
  reviewer: qa-review
  lang: JavaScript
  size_kb: 758688
  days_since_push: 12
  write_policy: pr-only       # pr-only | none
  approval: human-merge       # human-merge | bot-merge | none
  checks: [qa-review, sec-scan]
  routine: daily              # daily|weekly|monthly|none
  deploy: vercel
```

### Aturan registry

1. **Angka hanya dari GitHub API atau dari file ini.** Tidak pernah dari
   ingatan.
2. Setiap perubahan = **satu PR**, judul `registry(omb): <apa yang berubah>`.
3. Repo baru muncul → `notaris` menambah sebagai `tier: 3`, `domain: lain`.
   Naik tier atau pindah domain butuh keputusan manusia.
4. Repo terhapus → `status: removed`, **tidak** dihapus dari file.
5. **Lima repo `domain: lain`** (`Devs-Niu`, `Prakom-Surgawi`, `ZaryuHive`,
   `UACC`, `PAGASUS-PRO`) belum bisa saya klasifikasikan dari deskripsinya —
   tiga di antaranya kosong atau tanpa keterangan. Menyelesaikan ini adalah
   tugas pertama `notaris`.

---

## 5. Mekanisme — tujuh tahap

```
   [1 SENSUS] ──► [2 KLASIFIKASI] ──► [3 PENUGASAN] ──► [4 PEKERJAAN]
                                                             │
   [7 LAPORAN] ◄── [6 VERIFIKASI] ◄──────── [5 GERBANG] ◄─────┘
```

**1. SENSUS** — routine `notaris`, harian 06:00. Ambil daftar repo, bandingkan
dengan registry, selisih → satu PR. Tidak ada selisih → **diam**.

**2. KLASIFIKASI** — deterministik:

| Kondisi | Tier |
| --- | --- |
| `fork == true` dan bukan production | 4 |
| ada di daftar 13 production | 1 |
| `days_since_push ≤ 120`, bukan fork | 2 |
| selain itu, milik sendiri | 3 |

Naik/turun tier bukan keputusan bot. Usulkan di digest.

**3. PENUGASAN** — registry menyatakan `team` dan `owner`. `owner` kosong untuk
repo tier 1–3 = **bug registry**, laporkan, jangan tebak.

**4. PEKERJAAN** — satu thread per item kerja di bawah bot `owner`, dalam
folder `work/<domain>/<repo>`. Thread = unit kerja, bukan unit kepemilikan.

**5. GERBANG** — sebelum aksi tulis apa pun, cocokkan dengan matriks §7.

**6. VERIFIKASI** — setiap perubahan menyebut perintah verifikasi dan
keluarannya:

```
UBAH   : <satu hal>
BUKTI  : <perintah yang dijalankan>
HASIL  : <keluaran nyata, ditempel>
BERIKUT: <langkah berikutnya atau "selesai">
```

Tidak ada perintah verifikasi yang bisa dijalankan? Katakan begitu. Itu jawaban
sah. Mengaku berhasil tanpa bukti bukan.

**7. LAPORAN** — satu thread hasil per tim. Digest harian ke Kantor Pusat
19:00, maksimal 10 baris. **Tidak ada masalah → diam.**

---

## 6. Integrasi teknis

### 6.1 Grant tool GitHub per bot

GitHub sudah ter-connect di OMB. Yang tersisa adalah **membatasi per bot** —
Connected apps → settings bot → GitHub → **exact list of tools**, bukan *all
tools*.

| Bot | Tool GitHub |
| --- | --- |
| `notaris` | read repo, list repos, create/update file, create PR |
| semua spesialis domain | read, create branch, create/update file, create PR, read/create issue |
| `qa-review` | read PR, create review comment |
| `sec-scan` | read repo, read/create issue |
| `ops-watch` | read, read/create issue, read workflow runs |
| `riset-scout` | read saja |

**Tidak ada bot yang boleh dapat tool delete atau tool settings repo.**
Begitu sebuah bot punya grant apa pun, service yang tidak terdaftar memberinya
**nol** tool — itu perilaku OMB, manfaatkan.

### 6.2 Webhook GitHub → OMB

Sudah setengah terpasang. Caddyfile Anda:

```
handle /hooks/* { reverse_proxy 127.0.0.1:8800 }
```

```
GitHub → https://maus.abstract.biz.id/hooks/<endpoint>
       → Cloudflare Tunnel → Caddy → 127.0.0.1:8800 → OMB
```

1. Buat webhook endpoint di OMB, pakai **Bearer authentication** (bukan
   capability URL di query string — supaya secret tidak masuk log).
2. Pasang webhook **hanya di 13 repo tier 1**. Event: `push` (branch default),
   `pull_request`, `workflow_run`.
3. Jangan ekspos port utama OMB. Hanya `/hooks/*`.

### 6.3 Branch protection — pasang dulu, sebelum bot menulis

Di 13 repo tier 1: require PR before merging, no force push, no deletion,
require status checks kalau ada CI.

Matriks §7 adalah kebijakan. Branch protection adalah penegakan. Kebijakan
tanpa penegakan hanya niat baik.

### 6.4 Batas 3 thread per bot

Maksimal **3 thread berjalan per bot**. Konsekuensinya:

- Jangan pernah membuat thread permanen per repo. `sys-desktop` punya 26 repo —
  tidak mungkin 26 thread.
- Routine **terserialisasi**, bukan paralel. Satu routine memeriksa 13 repo
  tier 1 berurutan dalam satu thread.
- Bot yang sering mentok di 3 thread = memegang terlalu banyak. Usulkan
  pemecahan di digest, jangan diam-diam mengantre.

---

## 7. Matriks approval — tidak bisa dinegosiasi

| Aksi | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
| --- | :---: | :---: | :---: | :---: |
| Baca kode | ✓ | ✓ | ✓ | ✓ |
| Buka issue | ✓ | ✓ | ✓ | ✗ |
| Buat branch + PR | ✓ | ✓ | ✓ | ✗ |
| **Merge PR** | manusia | manusia | bot + approval | ✗ |
| Push ke branch default | ✗ | ✗ | ✗ | ✗ |
| Force push / rewrite history | ✗ | ✗ | ✗ | ✗ |
| Hapus branch / repo | ✗ | ✗ | ✗ | ✗ |
| Ubah settings / branch protection | manusia | manusia | ✗ | ✗ |
| Ubah workflow CI | manusia | manusia | ✗ | ✗ |
| Commit secret | ✗ | ✗ | ✗ | ✗ |
| `git add -f` file ter-ignore | ✗ | ✗ | ✗ | ✗ |

- **Nama branch:** `omb/<bot>/<YYYYMMDD>-<slug>`
- **Satu PR = satu perubahan.**
- **Sebelum commit:** jalankan pemindaian secret. `.gitleaks.toml` sudah ada di
  `ecosystem-config` — pakai konfigurasi yang sama.
- **Tidak ada kredensial atau PII** dalam commit, PR, issue, laporan, dokumen.
  Nama variabel saja.
- **Ragu apakah butuh approval? Anggap butuh.**

---

## 8. Routine — 11 untuk 95 repo

| Routine | Bot | Jadwal | Lingkup | Ingat run lalu |
| --- | --- | --- | --- | :---: |
| `sensus-repo` | notaris | harian 06:00 | 95 repo | ya |
| `klasifikasi-lain` | notaris | mingguan (Rabu) | 5 repo `lain` | ya |
| `kesehatan-tier1` | ops-watch | harian 07:00 | 13 repo | ya |
| `kesehatan-tier2` | ops-watch | Senin 07:00 | 25 repo | ya |
| `review-pr` | qa-review | 2×/hari (09:00, 15:00) | PR terbuka tier 1–2 | ya |
| `scan-secret` | sec-scan | harian 05:00 | tier 1–3 (56 repo) | ya |
| `audit-dependensi` | sec-scan | Senin 05:30 | tier 1 (13 repo) | ya |
| `digest-harian` | Assistant | harian 19:00 | ringkasan 7 tim | ya |
| `laporan-publik` | wira | harian 08:00 | 9 repo publik | ya |
| `sensus-arsip` | notaris | 1×/bulan | 39 fork + 18 dormant | tidak |
| `drill-pemulihan` | ops-watch | 1×/bulan | uji restore | tidak |

**Pelayanan Publik dapat routine harian sendiri** (`laporan-publik`) karena
satu-satunya domain dengan 9 repo aktif semua dan risiko tertinggi. Domain lain
cukup tercakup routine lintas-tim.

Aturan routine:

- **"Remember the last run"** nyala untuk yang berulang (maks 2.000 karakter).
- **"Post results to"** → thread hasil divisi, bukan main thread.
- **"Also run when OpenMausBot starts"** hanya untuk `sensus-repo` dan
  `kesehatan-tier1`.
- **Setiap routine wajib punya jalur keluar diam.** Tidak ada temuan → satu
  baris `tidak ada temuan`. Bukan nol baris, bukan esai.

**11 routine, bukan 95.** Kalau jumlahnya mendekati 20, berhenti dan usulkan
konsolidasi.

---

## 9. Urutan pelaksanaan

**Satu fase per sesi.**

### Fase 0 — Prasyarat (manusia)
1. Branch protection di 13 repo tier 1.
2. Salin `registry/repos.yaml` (sudah siap, 95 entri tervalidasi) ke
   `ecosystem-config/registry/omb/`.
3. Putuskan: direktori di `ecosystem-config` (usulan saya) atau repo terpisah.
   Kalau repo terpisah, catat di `DECISIONS.md` **dan arsipkan sejumlah repo
   dormant sebagai penggantinya** — lihat §10.

**VERIFIKASI:** branch protection terlihat di Settings tiap repo tier 1;
registry terbaca sebagai 95 entri dengan `counts` yang cocok.

### Fase 1 — Kantor Pusat
Buat `notaris` + tiga layanan bersama. Routine `sensus-repo` dan
`klasifikasi-lain`. Jalankan **manual sekali**, periksa, baru jadwalkan.

**VERIFIKASI:** satu run sensus menyebut angka 95; lima repo `domain: lain`
sudah diusulkan klasifikasinya; tidak ada PR kalau tidak ada selisih.

### Fase 2 — Pelayanan Publik *(didahulukan karena beban & risiko tertinggi)*
Tim **Pelayanan Publik**: `wira`, `publik-portal`, `publik-akuntabilitas`.
Routine `laporan-publik`.

**VERIFIKASI:** 9 repo punya `owner` valid; satu PR uji di satu repo tier 1
lolos `qa-review` dan menunggu merge manusia.

### Fase 3 — Infrastruktur Agen
Tim **Infrastruktur Agen**: `nala`, `agen-runtime`, `agen-harness`.

**VERIFIKASI:** `list_team_setup` menunjukkan 3 bot; 21 repo terpetakan.

### Fase 4 — Pendidikan & Riset, Web & Portal, Perkakas
Tiga tim sekaligus **hanya kalau** fase 2–3 bersih. Kalau tidak, pecah.

**VERIFIKASI:** 6 tim ada di Team map, masing-masing tepat satu Chief.

### Fase 5 — Sistem & Lingkungan
Tim terakhir, karena 32 repo-nya hampir semua arsip. `arga`, `sys-desktop`,
`sys-ade`. Pasang webhook GitHub di 13 repo tier 1 di fase ini.

**VERIFIKASI:** 7 tim lengkap; satu push uji ke branch non-default di satu repo
tier 1 muncul di OMB dalam < 2 menit.

---

## 10. Tentang freeze D-1013-05

Aturan lama Anda: jangan menambah proyek/repo tanpa menutup yang lama. Data
mendukung penerapan aturan yang sama di sini — dan memberi jalan keluarnya:

- **39 fork** + **18 repo dormant** = 57 repo tanpa aktivitas berarti.
- `sys-desktop` memegang 26 repo dengan hanya 2 aktif. Itu kandidat arsip
  terbesar.
- Mengarsipkan sebagian **memenuhi** aturan freeze sekaligus membersihkan
  portofolio.

`notaris` bisa menyiapkan daftarnya di `sensus-arsip` pertama. Keputusan tetap
di Anda.

---

## 11. Instruksi bersama (shared instructions)

Tempel di **shared instructions** setiap tim.

```
ATURAN PERUSAHAAN — NIUMINATION WORKS

1. Satu perubahan, satu verifikasi, satu laporan. Jangan pernah dua.
2. Angka hanya dari registry atau GitHub API. Tidak pernah dari ingatan.
3. Satu repo = satu pemilik. Dua bot butuh menulis repo yang sama?
   Berhenti dan eskalasi.
4. Sebelum menulis ke GitHub, cocokkan dengan matriks approval. Ragu = butuh.
5. Tidak ada secret atau PII dalam commit, PR, issue, laporan, atau dokumen.
   Nama variabel saja.
6. Tidak ada force-push, rewrite history, atau penghapusan. Kapan pun.
7. Satu PR = satu perubahan. Branch: omb/<bot>/<YYYYMMDD>-<slug>.
8. Setiap laporan perubahan menyebut perintah verifikasi dan keluarannya.
   Tidak ada bukti = belum selesai.
9. Kalau tidak ada masalah, diam.
10. Jangan menyentuh apa pun milik ekosistem Hermes.
11. Fork (tier 4) tidak pernah ditulis. Kapan pun, apa pun alasannya.
```

---

## 12. Cara melapor

Maksimal 10 baris:

```
FASE   : <nomor & nama>
STATUS : selesai | terblokir | perlu keputusan
UBAH   : <apa yang berubah>
BUKTI  : <perintah verifikasi>
HASIL  : <keluaran nyata>
RISIKO : <apa yang bisa salah, atau "tidak ada">
BERIKUT: <fase berikutnya>
```

Terblokir? Sebut **persis** apa yang dibutuhkan. Jangan menebak lalu bertindak.

---

## 13. Yang belum saya verifikasi

- **Belum diuji:** apakah webhook receiver OMB di LightVela menerima dari luar.
  Caddyfile-nya benar, tapi saya tidak bisa menembaknya dari sini.
- **Belum diverifikasi:** batas jumlah tim dan bot per workspace OMB. Tidak ada
  angkanya di dokumentasi. Mulai dari 7 tim / 21 bot dan pantau.
- **Penilaian, bukan pengukuran:** pemetaan domain saya turunkan dari deskripsi
  repo. Lima repo tidak bisa diklasifikasikan (`domain: lain`) karena
  deskripsinya kosong atau tidak jelas. `notaris` harus menyelesaikan.
- **Perkiraan:** nama bot (`wira`, `nala`, `arga`, `kirana`, `yuda`, `maya`)
  adalah usulan. Ganti sesuka Anda, tapi **perbarui registry** supaya `owner`
  tetap cocok.

---

## Lampiran A — 13 repo tier 1

```
omb-lightvela                    Dockerfile      1 hari    17 KB   agen
Niumination                      JavaScript      1 hari    84 KB   pusat
PemdiAcehTengah                  JavaScript     12 hari 758.688 KB publik
niu-dash                         HTML           13 hari   2.060 KB pusat
Niu-LKH                          JavaScript     13 hari   4.103 KB publik
kune-ya.com                      TypeScript     13 hari     194 KB web
ai-file-organizer-android        Kotlin         36 hari   2.772 KB perkakas
pabrik-aplikasi-gas              JavaScript     54 hari     122 KB publik
mac-web-dashboard                TypeScript     62 hari     117 KB web
arch-web-dashboard               TypeScript     62 hari      34 KB web
cc-switch          [FORK]        Rust           73 hari  66.120 KB ade
niu-dash-fullstack               TypeScript     81 hari     317 KB web
AI-First-OS                      Shell         114 hari       5 KB desktop
```

## Lampiran B — Ringkasan

```
95 repo · 55 own · 40 fork · 37 own aktif
7 tim · 21 bot (20 baru + Assistant)
11 routine · 4 tier · 10 domain
tier 1 = 13   tier 2 = 25   tier 3 = 18   tier 4 = 39
```

Daftar lengkap per repo ada di `registry/repos.yaml` (version 2, tervalidasi).
