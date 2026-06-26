---
title: Applications & Integrations
description: Panduan mendaftarkan aplikasi klien di NexaID, pengaturan Client ID & Secret, serta pemahaman mengenai URL Callback dan Backchannel.
---

# Applications & Integrations

Agar sebuah aplikasi (seperti HRIS, LMS, SIIMUT, atau Aplikasi Kasir) dapat menggunakan layanan SSO dari NexaID, aplikasi tersebut harus didaftarkan terlebih dahulu sebagai **Application Client**.

Proses pendaftaran ini bertujuan untuk menghasilkan kredensial keamanan (Client ID & Secret) dan menentukan jalur komunikasi (*routing*) yang sah antara pusat identitas NexaID dengan aplikasi Anda.

---

## Mendaftarkan Aplikasi Baru

Untuk mendaftarkan aplikasi baru, login ke dashboard administrator NexaID dan akses menu **Applications**. Klik tombol untuk mendaftarkan aplikasi baru.

Berikut adalah penjelasan dari atribut-atribut krusial yang perlu Anda konfigurasi:

### 1. App Key (Client ID)
Kunci identitas unik untuk aplikasi Anda (contoh: `lms-services`, `siimut-core`). Nilai ini akan ditaruh oleh developer aplikasi klien di dalam konfigurasi `.env` mereka (pada variabel `IAM_APP_KEY`).

### 2. App Secret
Kata sandi rahasia (*secret*) yang digunakan untuk memverifikasi keaslian komunikasi antar server.
- **Peringatan:** Simpan secret ini dengan aman! NexaID menyimpan secret ini menggunakan algoritma *hash* (SHA-256), sehingga jika Anda kehilangannya, Anda harus men-generate ulang secret baru.
- Klien menggunakan secret ini untuk memvalidasi *signature* dari token JWT yang diterbitkan oleh NexaID.

### 3. Redirect URIs (Front-Channel Callback)
Daftar URL tujuan yang diizinkan untuk menerima lemparan balik (*redirect*) setelah pengguna sukses melakukan login di halaman NexaID.
- **Contoh:** `https://lms.perusahaan.com/sso/callback`
- **Fungsi Keamanan:** Jika *user* memanipulasi parameter URL *login* dan mencoba mengalihkan balasan ke `situs-hacker.com`, NexaID akan menolak *login* tersebut karena URL tujuan tidak terdaftar di dalam pengaturan `Redirect URIs` ini (*mencegah serangan Open Redirect*).
- Anda bebas memasukkan beberapa URL sekaligus (misalnya URL untuk *localhost/development* dan URL untuk *production*).

### 4. Backchannel URL (Server-to-Server)
Ini adalah URL API internal milik aplikasi klien Anda yang akan dipanggil secara langsung (*server-to-server*) oleh NexaID di belakang layar, tanpa melalui *browser* pengguna.
- **Latar Belakang (Docker Network):** Fitur ini lahir karena isu umum pada arsitektur *microservices* atau Docker. Jika klien dan NexaID berada di satu server fisik (atau Docker *network* yang sama), pemanggilan API ke *domain public* (`https://lms.perusahaan.com`) seringkali gagal karena masalah *Hairpin NAT*. Solusinya, NexaID akan menembak langsung *hostname* internal Docker milik klien (contoh: `http://lms-container:9000/api/iam/webhook`).
- **Fungsinya:** Sangat vital untuk proses **sinkronisasi data seketika** (JIT) dan *Global Logout*. Jika admin mencabut hak akses seseorang di NexaID, NexaID akan memanggil *Backchannel URL* ini agar aplikasi klien langsung menggugurkan sesi (*logout*) pengguna tersebut secara *real-time*.

### 5. Token Expiry (Opsional)
Anda dapat menentukan umur token (*Time To Live / TTL*) yang berbeda-beda untuk tiap aplikasi. Jika aplikasi Anda bersifat sangat konfidensial (misal: Aplikasi Keuangan), Anda bisa menyetel *Token Expiry* yang pendek (misalnya 900 detik / 15 menit). Jika dikosongkan, ia akan mengikuti TTL *default* dari server NexaID (umumnya 1 jam).

---

## Manajemen Peran Aplikasi (Application Roles)

Setiap aplikasi yang didaftarkan di NexaID berhak untuk memiliki "kamus perannya" (*Application Roles*) masing-masing.

Sebagai contoh:
- Aplikasi **LMS** mendaftarkan role: `admin`, `teacher`, `student`.
- Aplikasi **HRIS** mendaftarkan role: `hr-manager`, `employee`, `reviewer`.

Peran-peran ini bersifat eksklusif untuk aplikasi tersebut. Nantinya, sekumpulan *Role* dari berbagai aplikasi ini dapat digabungkan/dibungkus ke dalam **[Access Profiles](./access-profiles.md)** untuk didistribusikan kepada karyawan secara serentak.

Anda dapat mendefinisikan *Role* baru langsung dari halaman detail masing-masing aplikasi di dalam dashboard NexaID.
