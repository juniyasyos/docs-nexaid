---
title: Konfigurasi Klien
description: Panduan setup teknis untuk developer aplikasi klien
---

# Konfigurasi Klien (Developer Guide)

Halaman ini berisi panduan teknis bagi tim pengembang (Developer) mengenai cara menyiapkan konfigurasi di aplikasi klien agar dapat berkomunikasi dengan NexaID.

## Persiapan Environment Variables

Di server backend aplikasi klien Anda, tambahkan variabel lingkungan (environment variables) berikut. Penamaannya bisa Anda sesuaikan dengan framework yang Anda gunakan:

```env
# URL tempat instalasi NexaID berjalan
NEXAID_SSO_URL="https://sso.perusahaan.com"

# Kredensial aplikasi yang didapat dari Admin NexaID
NEXAID_CLIENT_ID="nxd_abc123"
NEXAID_INTEGRATION_KEY="secret-key-rahasia-panjang"

# URL ke mana NexaID harus mengembalikan pengguna setelah login
NEXAID_CALLBACK_URL="https://hris.perusahaan.com/auth/callback"
```

## Memanggil Halaman Login

Saat pengguna menekan tombol "Login dengan SSO" di aplikasi Anda, arahkan (redirect) pengguna tersebut ke URL berikut:

```text
https://sso.perusahaan.com/login?client_id=nxd_abc123&redirect_uri=https://hris.perusahaan.com/auth/callback
```

- Parameter `client_id` harus sama dengan yang terdaftar.
- Parameter `redirect_uri` harus sama **persis** dengan yang ada di pendaftaran aplikasi NexaID.

## Penggunaan Integration Key di Server-to-Server

Setelah pengguna login, NexaID akan melempar mereka kembali ke `redirect_uri` beserta sebuah token JWT.

Tugas aplikasi klien adalah **bertanya kepada NexaID** "Apakah token ini benar valid?". Panggilan ini dilakukan via *Backend* API (Server-to-Server). Saat memanggil API NexaID, Anda diwajibkan menyertakan *Integration Key*:

```http
POST /api/auth/session-from-token HTTP/1.1
Host: sso.perusahaan.com
Authorization: Bearer <INTEGRATION_KEY_RAHASIA>
```

Jika tidak disertakan, atau kuncinya salah, NexaID akan menolak permintaan dengan error `401 Unauthorized`.

## Penerimaan Update Data (Webhook/Push Concept)

NexaID secara proaktif akan mengirim (*Push*) pemberitahuan (*Webhook*) kepada Aplikasi Klien setiap kali terjadi:
- Penambahan pengguna baru di aplikasi tersebut.
- Perubahan tingkat *Role* seorang pengguna.
- Perubahan struktur departemen/unit kerja.

Pastikan Anda menyiapkan endpoint khusus (contoh: `/api/webhook/nexaid/sync`) yang siap menerima dan memproses kiriman data berformat JSON dari NexaID. Pengamanan pada endpoint ini juga sebaiknya menggunakan pengecekan *Integration Key*.
