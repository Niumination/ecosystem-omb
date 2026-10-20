# Grant GitHub per bot (§6.1) — jalur aman

> **USANG sejak 2026-10-20 (D-0018).** Semua bot kini **all tools** (GitHub `"*"` + Slack `"*"`), kecuali `riset-scout` GitHub tetap read-only 7 tool (§6.1). Tabel & aturan per-bot di bawah disimpan sebagai riwayat.

**Cara:** OMB → Connected apps → settings tiap bot → GitHub → pilih **daftar tool persis**, BUKAN *all tools*.
**Aturan keras:** tidak ada bot yang boleh dapat tool **delete** atau **settings repo**. Ragu = jangan beri.

Bot yang sudah dihapus (Infrastruktur Agen) tidak perlu grant.

| Bot | Tool GitHub |
| --- | --- |
| notaris | read repo, list repos, create/update file, create PR |
| qa-review | read PR, create review comment |
| sec-scan | read repo, read/create issue |
| ops-watch | read, read/create issue, read workflow runs |
| wira (Chief) | read, read/create issue |
| publik-portal | read, create branch, create/update file, create PR, read/create issue |
| publik-akuntabilitas | read, create branch, create/update file, create PR, read/create issue |
| arga (Chief) | read, read/create issue |
| sys-desktop | read, create branch, create/update file, create PR, read/create issue |
| sys-ade | read, create branch, create/update file, create PR, read/create issue |
| kirana (Chief) | read, read/create issue |
| web-app | read, create branch, create/update file, create PR, read/create issue |
| yuda (Chief) | read, read/create issue |
| tools-lead | read, create branch, create/update file, create PR, read/create issue |
| maya (Chief) | read, read/create issue |
| edu-konten | read, create branch, create/update file, create PR, read/create issue |
| riset-scout | read saja |

Sumber: RENCANA-INDUK.md §6.1. Disetujui manusia 2026-10-19.

## Diterapkan 2026-10-19 (via API OMB)

Kelompok tool (slug Composio) yang dipasang:

- READ: GITHUB_GET_A_REPOSITORY, GITHUB_GET_REPOSITORY_CONTENT, GITHUB_GET_RAW_REPOSITORY_CONTENT, GITHUB_GET_A_TREE, GITHUB_GET_A_BRANCH, GITHUB_LIST_BRANCHES, GITHUB_GET_A_REFERENCE
- LIST_REPOS: GITHUB_LIST_REPOSITORIES_FOR_THE_AUTHENTICATED_USER, GITHUB_LIST_REPOSITORIES_FOR_A_USER, GITHUB_FIND_REPOSITORIES, GITHUB_GET_THE_AUTHENTICATED_USER
- FILE_WRITE: GITHUB_CREATE_OR_UPDATE_FILE_CONTENTS, GITHUB_COMMIT_MULTIPLE_FILES
- BRANCH: GITHUB_CREATE_A_REFERENCE
- PR_CREATE: GITHUB_CREATE_A_PULL_REQUEST
- PR_READ: GITHUB_GET_A_PULL_REQUEST, GITHUB_LIST_PULL_REQUESTS, GITHUB_FIND_PULL_REQUESTS, GITHUB_LIST_PULL_REQUESTS_FILES
- ISSUE: GITHUB_CREATE_AN_ISSUE, GITHUB_SEARCH_ISSUES_AND_PULL_REQUESTS, GITHUB_CREATE_AN_ISSUE_COMMENT
- REVIEW: GITHUB_CREATE_A_REVIEW_COMMENT_FOR_A_PULL_REQUEST, GITHUB_CREATE_A_REVIEW_FOR_A_PULL_REQUEST, GITHUB_SUBMIT_A_REVIEW_FOR_A_PULL_REQUEST
- WORKFLOW: GITHUB_LIST_REPOSITORY_WORKFLOWS, GITHUB_LIST_WORKFLOW_RUNS_FOR_A_REPOSITORY, GITHUB_GET_A_WORKFLOW

## Diterapkan 2026-10-20 (via API OMB) — all tools (D-0018)

Semua bot: GitHub `"*"` + Slack `"*"` (all tools). Pengecualian: `riset-scout` GitHub read-only 7 tool (§6.1). Diterapkan lewat `PATCH /api/bots/<id>`, diverifikasi `GET /api/bots`.
