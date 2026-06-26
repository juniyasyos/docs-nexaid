---
title: Variabel Lingkungan (Environment)
description: Panduan seluruh Environment Variable penting NexAID
---

# Variabel Lingkungan (.env)

Segala kunci rahasia (*secrets*) dan URL krusial yang mengendalikan cara kerja NexaID di suatu server disimpan melalui format kunci-nilai (key-value) *Environment Variables*. 

::: danger Jangan Pernah
Jangan *commit* atau serahkan berkas `.env` Anda ke repositori sumber terbuka (Git Publik). Kehilangan file ini berpotensi membahayakan SSO semua anak perusahaan Anda.
:::

Berikut daftar tabel konfigurasi esensial NexaID yang patut Anda ganti saat melakukan instalasi.

| Kategori | Nama Variabel | Deskripsi Singkat | Contoh Nilai / Standar |
| :--- | :--- | :--- | :--- |
| **App Utama** | `APP_URL` | URL absolut untuk *Backend* Sistem | `https://sso.perusahaan.com` |
| | `FRONTEND_URL` | URL antar muka tatap muka (Portal & Admin) | `https://sso.perusahaan.com` |
| **Database** | `DB_CONNECTION` | Mesin *database* yang digunakan | `mysql` atau `pgsql` |
| | `DB_HOST` | Alamat IP atau hostname *database* | `127.0.0.1` |
| | `DB_DATABASE` | Nama *database* skema | `nexaid_db` |
| | `DB_USERNAME` | Pengguna kredensial *database* | `root` |
| | `DB_PASSWORD` | Sandi dari akun *database* | `S4ndiR4hasi4!!` |
| **Keamanan JWT** | `JWT_SECRET` | Serangkaian kalimat sandi super rahasia *(Jangan Ganti Saat Berjalan!)* | `(generated via command)` |
| | `JWT_TTL` | Umur *Access Token* *(menit)* | `60` |
| | `JWT_REFRESH_TTL` | Umur *Refresh Token* *(menit)* | `20160` (14 Hari) |
| **Background / Cache** | `CACHE_DRIVER` | Tempat penyimpanan file *cache* | `redis` atau `file` |
| | `QUEUE_CONNECTION` | Mesin pengelola *Job Antrian* | `redis` atau `database` |
| | `REDIS_HOST` | Host instalasi memori Redis | `127.0.0.1` |

## Modifikasi Masa Berlaku Token
Untuk alasan keamanan atau karena karakter aplikasi (seperti kios publik yang cepat selesai pakai), admin infra diizinkan memperkecil nilai umur (TTL) dari *Access Token* JWT (`JWT_TTL`) menjadi misal 15 (menit) sesuai kebijakan ISO/Kepatuhan (Compliance) korporasi.
