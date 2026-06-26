---
title: Registrasi Aplikasi
description: Langkah-langkah mendaftarkan aplikasi baru di NexAID
---

# Registrasi Aplikasi

Sebelum aplikasi klien dapat memunculkan tombol "Login dengan SSO" dan berkomunikasi dengan NexaID, administrator harus mendaftarkan aplikasi tersebut di panel admin.

## Langkah Pendaftaran

1. Masuk ke NexaID Admin Panel.
2. Navigasikan ke menu **Applications**.
3. Klik tombol **Buat Aplikasi Baru** (Create).
4. Isi kelengkapan informasi yang diperlukan.

## Informasi yang Diperlukan

Saat mendaftarkan aplikasi, form akan meminta informasi berikut:

- **Nama Aplikasi**: Nama yang akan ditampilkan kepada pengguna (misal: "Portal HRIS").
- **Deskripsi**: Penjelasan singkat tentang kegunaan aplikasi.
- **Application URL**: Alamat URL utama dari website/aplikasi klien (misal: `https://hris.perusahaan.com`).
- **Callback URL (Redirect URI)**: Alamat URL yang LENGKAP ke mana NexaID akan mengirimkan kembali pengguna setelah mereka berhasil mengetikkan email & password yang benar (misal: `https://hris.perusahaan.com/auth/callback`).

::: warning Pentingnya Callback URL
Sistem keamanan SSO sangat bergantung pada Callback URL. NexaID **akan menolak** meneruskan proses login jika URL tempat pengguna ingin dikembalikan tidak sama persis dengan Callback URL yang didaftarkan di sini.
:::

## Hasil Setelah Registrasi

Setelah aplikasi berhasil disimpan, sistem akan secara otomatis menerbitkan dua komponen rahasia:
1. **App Client ID** (pengenal unik aplikasi).
2. **Integration Key / App Secret** (kunci rahasia untuk komunikasi API server).

Kedua data ini harus diserahkan kepada tim Developer aplikasi klien untuk dimasukkan ke konfigurasi sistem mereka (lihat [Manajemen App Key](./app-key)).
