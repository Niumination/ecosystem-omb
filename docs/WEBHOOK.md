# Webhook GitHub → OMB (§6.2) — hasil telusur 2026-10-19

## Infrastruktur (terverifikasi)
- OMB punya **receiver webhook native**. Port internal `8800` (`OMB_WEBHOOK_PORT`).
- Caddy: `handle /hooks/* { reverse_proxy 127.0.0.1:8800 }`.
- Publik: `OMB_WEBHOOK_PUBLIC_URL=https://maus.abstract.biz.id`.
- Uji langsung: `GET /` → 200 · `GET /api/health` → 200 `{"app":"openmausbot"}` · `GET /hooks/` → 404 `{"error":"Unknown webhook endpoint"}`. **Receiver hidup & terjangkau**; tinggal endpoint didaftarkan.

## Cara kerja endpoint (dari kode OMB `server/webhook-ingress.ts`)
- Endpoint dibuat lewat **automation tipe "webhook"**. Bentuk: `https://maus.abstract.biz.id/hooks/wh_<id>`.
- Secret diterima lewat **salah satu**:
  1. path: `/hooks/wh_<id>/<secret>` (capability URL), atau
  2. header `Authorization: Bearer <secret>` atau `x-openmaus-secret: <secret>`.
- Hanya **POST**. Body maks **256 KB**. Header dikenali: `X-GitHub-Event` (nama event), `X-GitHub-Delivery` (idempotency).
- URL+secret privat hanya ditampilkan **sekali** (saat create/rotate).

## Kendala penting
- GitHub **tidak bisa** mengirim header `Authorization` kustom. GitHub hanya mengirim `X-Hub-Signature-256` (HMAC dengan secret GitHub sendiri).
- Jadi §6.2 ("Bearer, bukan capability URL") **butuh relay** yang menambahkan header; kalau tidak, harus pakai capability URL (secret di path — yang §6.2 hindari karena bisa masuk log Caddy/GitHub).

## Opsi
- **A. Capability URL** — URL webhook GitHub = `https://maus.abstract.biz.id/hooks/wh_<id>/<secret>`. Cepat; secret ada di URL.
- **B. Relay Caddy (aman)** — route `handle /hooks/gh/*` meneruskan ke OMB dengan header `Authorization: Bearer <secret>` (secret di env Caddy). Sesuai §6.2.
- **C. Relay eksternal** (Cloudflare Worker) — di luar server.

Rekomendasi: **B** untuk repo tier 1.
