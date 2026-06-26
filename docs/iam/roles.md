---
title: Peran (Roles)
description: Manajemen tingkat akses dengan Role pada NexAID
---

# Manajemen Peran (Roles)

Dalam NexaID, **Role** (Peran) adalah fondasi utama yang mendefinisikan kelompok jabatan atau tingkat akses tertentu. Sebuah peran mengelompokkan berbagai izin (*Permissions*) menjadi satu kesatuan yang mudah diberikan kepada pengguna.

## Apa itu Role di NexaID?

Role merepresentasikan kapasitas fungsi seorang pengguna. Contoh Role umum:
- `super_admin`: Admin sistem utama.
- `manager`: Akses persetujuan dan laporan.
- `staff`: Akses standar ke aplikasi.
- `guest`: Akses baca saja.

## Konsep Role Level

NexaID menggunakan konsep **Role Level** (angka) untuk menentukan tingkatan atau hierarki dari peran. 
- Level yang lebih tinggi menandakan kekuasaan yang lebih besar.
- Misalnya: `super_admin` mungkin memiliki level `100`, sementara `staff` memiliki level `10`.
- Konsep ini memudahkan aplikasi klien jika mereka perlu melakukan pengecekan bertingkat (misalnya, *Izinkan akses ini untuk pengguna dengan role level minimal 50*).

## Penerapan Role per Aplikasi

Berbeda dengan sistem konvensional, di ekosistem NexaID:
- Daftar Role bersifat dinamis dan dapat didaftarkan secara berbeda untuk **setiap aplikasi klien**.
- Artinya, aplikasi HRIS bisa memiliki role `hr_manager`, sementara aplikasi Helpdesk memiliki role `support_agent`.

## Mengelola Role

Administrator mengelola Role melalui menu **Roles** di admin panel:
1. Tentukan **Nama Role** (misal: "Admin Keuangan").
2. Tentukan **Slug/Identifier** unik (misal: `finance_admin`).
3. Tetapkan **Level** (angka).
4. Kaitkan Role ini dengan satu atau lebih **[Permissions](./permissions)**.

## Sinkronisasi Otomatis

Setiap kali Admin membuat Role baru, mengubah Permissions di dalam Role, atau menghapus Role, NexaID akan secara otomatis melakukan pemberitahuan pembaruan secara di balik layar kepada aplikasi klien terkait, sehingga mereka selalu memiliki salinan aturan keamanan yang sama dengan NexaID (Single Source of Truth).
