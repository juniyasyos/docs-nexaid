---
title: Struktur Departemen (Unit Kerja)
description: Pengaturan organisasi dan hierarki di platform NexAID
---

# Struktur Departemen (Unit Kerja)

Untuk mendukung perusahaan dengan skala organisasi yang kompleks, NexaID menyediakan manajemen hierarki **Departemen** (atau Unit Kerja).

## Apa itu Departemen di NexaID?

Departemen berfungsi memodelkan struktur pohon organisasi perusahaan Anda, seperti Divisi, Cabang, Sub-Bagian, atau Tim. Struktur ini penting untuk mengatur cakupan (*scope*) dari hak akses seorang pengguna.

## Manfaat Hierarki Departemen

Dengan menggunakan Departemen, Anda dapat:
- Mendefinisikan struktur organisasi bertingkat (misalnya: Kantor Pusat -> Divisi IT -> Tim Support).
- Mengaitkan pengguna dengan tempat di mana mereka berada.
- Melalui *Access Profile*, Anda dapat mengatur bahwa si Budi adalah "Manager" khusus untuk "Divisi IT" saja. Ini membatasi akses Budi agar tidak bisa melihat data dari "Divisi Keuangan".

## Mengelola Departemen

Di dalam panel admin, Anda dapat:
1. **Membuat Departemen Baru**: Tentukan nama dan kodenya.
2. **Mengatur Induk (Parent)**: Pilih apakah departemen ini berdiri sendiri atau berada di bawah departemen lain. Ini akan otomatis membentuk bagan hierarki pohon.
3. **Mengaitkan Pengguna**: Tempatkan pengguna ke dalam departemen yang tepat.

## Sinkronisasi Hierarki ke Klien

NexaID menjamin struktur organisasi di seluruh sistem Anda selalu selaras. Jika Anda mengubah nama cabang dari "Cabang Jakarta" menjadi "Cabang Jakarta Pusat", perubahan ini akan disiarkan dan disinkronisasi ke seluruh Aplikasi Klien. Aplikasi klien tidak perlu merepotkan pengguna untuk mengatur ulang struktur organisasi secara manual di masing-masing aplikasi.
