---
title: Pengenalan NexAID
description: Apa itu NexAID, masalah yang diselesaikan, dan siapa yang menggunakannya.
---

# Pengenalan NexAID

Selamat datang di dokumentasi resmi **NexAID** — platform *Identity and Access Management* (IAM) dan *Single Sign-On* (SSO) yang dirancang untuk kebutuhan organisasi modern.

NexAID hadir sebagai **pusat otentikasi tunggal** yang aman dan mudah diintegrasikan. Dengan NexAID, seluruh ekosistem aplikasi di organisasi Anda terhubung ke satu titik identitas yang terpercaya.

## Masalah yang Diselesaikan

Tanpa sistem manajemen identitas yang terpusat, organisasi sering menghadapi tantangan berikut:

- **Pengguna memiliki banyak akun dan kata sandi** di masing-masing aplikasi — rentan terhadap kebocoran dan sulit dikelola.
- **Hak akses yang tidak konsisten** — pengguna bisa saja masih memiliki akses ke sistem lama setelah berpindah divisi atau resign.
- **Tidak ada visibilitas audit** — sulit melacak siapa mengakses apa, kapan, dan dari mana.
- **Integrasi aplikasi baru memakan waktu** — setiap aplikasi harus membangun sistem autentikasinya sendiri.

NexAID menyelesaikan semua itu melalui satu platform yang terpusat, terstandarisasi, dan mudah diintegrasikan.

## Apa Itu NexAID?

NexAID adalah platform otentikasi dan otorisasi terpusat yang menyediakan dua kapabilitas utama:

### Single Sign-On (SSO)

Pengguna cukup **login satu kali** di portal NexAID, lalu dapat mengakses semua aplikasi yang terdaftar tanpa perlu login ulang. Ketika sesi NexAID berakhir, seluruh akses ke aplikasi yang terhubung secara otomatis dicabut.

::: tip Manfaat SSO
Login sekali, akses semua. Tidak ada lagi password berbeda untuk setiap aplikasi — meningkatkan produktivitas sekaligus keamanan organisasi.
:::

### Identity & Access Management (IAM)

NexAID menyediakan manajemen identitas yang lengkap:

- **Pengguna (Users)** — data identitas terpusat untuk seluruh anggota organisasi.
- **Role & Permission** — hak akses yang dapat dikonfigurasi secara granular per aplikasi.
- **Access Profile** — bundel permission yang dapat ditetapkan ke pengguna atau grup.
- **Departemen** — pengelompokan pengguna berdasarkan unit organisasi.

Setiap perubahan hak akses di NexAID secara otomatis didistribusikan ke seluruh aplikasi klien yang terhubung — tanpa konfigurasi manual di masing-masing aplikasi.

## Siapa Pengguna NexAID?

NexAID melayani tiga kelompok pengguna utama:

### 👤 Pengguna Akhir (End User)

Karyawan atau anggota organisasi yang menggunakan aplikasi sehari-hari. Mereka cukup login satu kali melalui portal NexAID dan langsung dapat mengakses semua aplikasi yang telah mendapat izin sesuai peran mereka.

### 🛡️ Administrator

Tim IT atau administrator sistem yang bertanggung jawab atas:

- Manajemen pengguna, role, permission, dan departemen.
- Pendaftaran dan konfigurasi aplikasi klien.
- Pemantauan sesi aktif dan audit log.
- Pengaturan kebijakan akses di seluruh organisasi.

### 👩‍💻 Developer / Tim Integrasi

Developer yang mengintegrasikan aplikasi ke ekosistem NexAID. Mereka menggunakan API dan alur SSO NexAID untuk:

- Mendelegasikan otentikasi pengguna ke NexAID.
- Menerima dan memvalidasi JWT token dari NexAID.
- Menyinkronkan data hak akses pengguna ke aplikasi klien.

::: info Mulai dari Mana?
- **Pengguna baru yang ingin mencoba**: Lihat panduan [Quick Start](./quick-start).
- **Memahami konsep dasar**: Baca halaman [Konsep Inti](./core-concepts).
- **Langsung integrasi SSO**: Mulai dari [Overview SSO](../sso/).
:::
