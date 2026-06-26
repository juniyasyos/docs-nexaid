---
title: Manajemen App Key & Kredensial
description: Mengelola kunci akses dan keamanan aplikasi klien
---

# Manajemen App Key & Kredensial

Agar aplikasi klien dapat membuktikan identitasnya kepada NexaID saat melakukan komunikasi *back-end* (server-to-server), NexaID menggunakan sistem kunci kriptografis yang disebut sebagai App Key.

## Apa itu App Client ID & Integration Key?

Setelah pendaftaran berhasil, setiap aplikasi akan dibekali sepasang kredensial:
- **App Client ID**: Bersifat publik. Ini adalah pengenal/nama unik aplikasi di mata NexaID. Biasanya berupa deretan huruf unik.
- **Integration Key (App Secret)**: Bersifat SANGAT RAHASIA. Ini adalah kata sandi aplikasi untuk menembus pengamanan API NexaID.

## Penggunaan Kredensial

Developer aplikasi klien membutuhkan kredensial ini untuk dua hal utama:
1. Mengirimkannya sebagai *URL Parameter* saat memicu pembukaan halaman login NexaID (menggunakan Client ID).
2. Memasang *Integration Key* pada *Headers* HTTP (`X-Api-Key` atau `Authorization`) saat memanggil API backend NexaID, misalnya saat ingin memvalidasi token yang baru saja mereka terima.

## Keamanan Kredensial (Best Practices)

::: danger Awas Kebocoran Key!
Jangan pernah menyimpan Integration Key di dalam kode *frontend* (HTML/React/Vue yang dieksekusi di browser) atau menanamkannya langsung ke *source code* (hardcode).
:::

1. Simpan Integration Key secara eksklusif di dalam file *Environment* server (misalnya `.env`).
2. Jangan memasukkan file `.env` ke *Version Control* (seperti Git).
3. Batasi siapa saja pengembang yang mengetahui kunci ini.

## Menghasilkan Ulang Kunci (Regenerate Key)

Jika terjadi insiden kebocoran keamanan, di mana seseorang yang tidak berhak mengetahui Integration Key aplikasi Anda:
1. Admin NexaID harus segera menekan tombol **Regenerate Key** di halaman profil aplikasi tersebut.
2. Hal ini akan membatalkan (revoke) kunci lama secara instan.
3. Developer aplikasi klien akan mengalami gagal koneksi hingga mereka memperbarui kunci rahasia terbaru ke file `.env` server mereka.
