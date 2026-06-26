---
title: Single Sign-On (SSO)
description: "Overview SSO di NexAID: apa itu, manfaat untuk organisasi, dan fitur-fitur utamanya."
---

# Single Sign-On (SSO)

**Single Sign-On (SSO)** adalah salah satu fitur utama NexAID yang memungkinkan pengguna untuk **login satu kali dan mendapatkan akses ke semua aplikasi** yang terhubung ke ekosistem NexAID — tanpa perlu mengingat dan memasukkan kata sandi berulang.

---

## Apa Itu SSO?

SSO adalah mekanisme otentikasi terpusat. Alih-alih setiap aplikasi memiliki sistem login sendiri, semua aplikasi mendelegasikan proses otentikasi ke **NexAID sebagai Identity Provider (IdP)**. 

Ketika seorang pengguna sudah memiliki sesi aktif di NexAID, mereka dapat langsung masuk ke aplikasi klien mana pun tanpa diminta login ulang.

::: info Analogi Sederhana
Bayangkan kartu akses gedung kantor. Satu kartu bisa membuka semua pintu yang Anda berwenang masuki — tanpa perlu kunci terpisah untuk setiap ruangan. Itulah prinsip SSO.
:::

---

## Manfaat SSO untuk Organisasi

### Untuk Pengguna Akhir
- ✅ Hanya perlu mengingat **satu set kredensial**.
- ✅ Tidak ada hambatan login ketika berpindah antar aplikasi.
- ✅ Pengalaman pengguna yang lebih mulus dan produktif.

### Untuk Administrator IT
- ✅ **Kontrol terpusat**: Menonaktifkan akun di NexAID langsung memutus akses ke semua aplikasi.
- ✅ **Audit log terpusat**: Semua aktivitas login tercatat di satu tempat.
- ✅ Mudah mengelola onboarding dan offboarding karyawan.

### Untuk Developer / Tim Integrasi
- ✅ Tidak perlu membangun sistem autentikasi dari nol.
- ✅ Integrasi cukup dengan mendaftarkan App Key dan Callback URL.
- ✅ Hak akses pengguna didistribusikan otomatis dari NexAID.

---

## Fitur SSO di NexAID

### 🔐 Otentikasi Berbasis JWT

Setelah login berhasil, NexAID menerbitkan **JWT (JSON Web Token)** yang berisi identitas pengguna dan hak akses mereka. Token ini dapat divalidasi oleh aplikasi klien kapan saja melalui endpoint NexAID.

### 🔄 Sesi Terpusat

NexAID memelihara satu sesi utama untuk setiap pengguna. Selama sesi ini aktif, pengguna dapat mengakses semua aplikasi klien tanpa login ulang.

### 🚪 Logout Global

Ketika pengguna melakukan logout di NexAID (atau di salah satu aplikasi klien yang mendukungnya), sesi di **semua aplikasi yang terhubung** dapat diakhiri sekaligus.

### 📋 Audit Log Login

Setiap aktivitas login, logout, dan akses token tercatat secara otomatis. Administrator dapat memantau siapa yang login dari mana dan kapan.

### 🔁 Distribusi Hak Akses Otomatis

Ketika hak akses pengguna diubah di NexAID (misalnya role baru ditetapkan), perubahan tersebut secara otomatis dikirim ke semua aplikasi klien yang relevan — tanpa intervensi manual.

### 🛡️ Keamanan Token

Token JWT yang diterbitkan NexAID menggunakan kriptografi yang kuat dan memiliki masa berlaku (*expiry*) yang terbatas. Aplikasi klien disarankan menyimpan token di server-side untuk mencegah risiko keamanan.

---

## Halaman Dokumentasi SSO

Pelajari lebih lanjut tentang implementasi SSO di NexAID:

| Halaman | Deskripsi |
|---------|-----------|
| [Alur SSO](./flow) | Penjelasan lengkap alur redirect → login → token → callback |
| [Proses Login](./login) | Parameter login, redirect ke NexAID, persiapan aplikasi klien |
| [Callback & Token](./callback) | Cara menerima dan memvalidasi token setelah login |
| [Logout](./logout) | Logout lokal vs global, endpoint, dan best practice |

::: tip Mulai Integrasi
Belum pernah mengintegrasikan aplikasi ke NexAID? Mulai dari panduan [Quick Start](../guide/quick-start) untuk langkah-langkah lengkapnya.
:::
