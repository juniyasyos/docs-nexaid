---
title: Manajemen Aplikasi
description: Mengelola aplikasi yang terintegrasi dengan ekosistem NexAID
---

# Manajemen Aplikasi Klien

NexaID berfungsi sebagai sistem induk (*Identity Provider*). Sistem-sistem lain seperti portal HRIS, Helpdesk, atau aplikasi internal perusahaan yang mengandalkan NexaID untuk login disebut sebagai **Aplikasi Klien**.

## Mengapa Aplikasi Perlu Didaftarkan?

NexaID tidak mengizinkan sembarang website untuk menggunakan layanan otentikasinya demi keamanan. Sebuah aplikasi harus didaftarkan secara resmi agar:
- NexaID dapat mengenali dari mana sebuah permintaan login (*request login*) berasal.
- NexaID dapat memverifikasi alamat tujuan kembalinya pengguna setelah berhasil login (Callback URL).
- Komunikasi antar server (*server-to-server*) antara NexaID dan backend aplikasi dapat diamankan melalui kunci rahasia (*Integration Key*).

## Fitur Manajemen Aplikasi

Dari dalam panel admin NexaID, Anda dapat:
- Melakukan registrasi awal sistem/aplikasi klien (lihat [Registrasi Aplikasi](./app-registration)).
- Menghasilkan dan mengatur kunci rahasia (lihat [Manajemen App Key](./app-key)).
- Mengelola pengaturan URL dan visibilitas klien.
- Melihat daftar profil akses dan pengguna yang ditugaskan ke aplikasi tertentu.

## Memulai Integrasi

Bagi tim pengembang (*Developer*) yang ingin memulai menautkan aplikasi mereka ke NexaID, silakan pelajari:
1. [Konfigurasi Klien](./client-configuration)
2. [Checklist Integrasi](./integration-checklist)
