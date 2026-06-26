---
title: Manajemen Pengguna (Users)
description: Cara mengelola pengguna dalam platform NexAID
---

# Manajemen Pengguna (Users)

Pengguna (User) adalah entitas utama dalam ekosistem NexaID. Seluruh hak akses, riwayat aktivitas, dan integrasi aplikasi akan bermuara pada entitas profil pengguna ini.

## Atribut Utama Pengguna

Setiap profil pengguna di NexaID memiliki informasi inti berikut:
- **Nama Lengkap**: Identitas nama asli pengguna.
- **Email**: Alamat email yang juga berfungsi sebagai identitas utama untuk login.
- **Status Aktif**: Menentukan apakah akun tersebut dapat digunakan. Akun yang dinonaktifkan tidak akan bisa melakukan login SSO.
- **Status Verifikasi**: Menandakan apakah alamat email pengguna telah dikonfirmasi.

## Mengelola Pengguna

Administrator dapat mengelola daftar pengguna melalui NexaID Admin Panel:

### 1. Menambahkan Pengguna Baru
Pengguna baru dapat didaftarkan secara manual oleh Admin, atau secara mandiri melalui halaman registrasi publik (jika fitur ini diaktifkan di pengaturan).

### 2. Mengedit Profil
Admin dapat mengubah rincian seperti nama, email, dan konfigurasi profil dari panel admin.

### 3. Menonaktifkan Pengguna
Jika ada karyawan yang *resign* atau sebuah akun bermasalah, Admin cukup mengubah status pengguna menjadi **Nonaktif**. Begitu akun dinonaktifkan:
- Sesi aktif mereka di semua aplikasi seketika berakhir.
- Pengguna tidak akan bisa melakukan proses login SSO baru.

## Pengguna dan Hak Akses

Sebuah entitas pengguna yang berdiri sendiri tidak memiliki hak apa-apa. Agar dapat mengakses aplikasi klien dengan fitur-fiturnya, pengguna tersebut harus diberikan hak akses yang diatur melalui **[Access Profiles](./access-profiles)**. Access Profile inilah yang akan menentukan apa **Role** pengguna tersebut pada aplikasi tertentu.
