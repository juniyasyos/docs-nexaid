---
title: Identity & Access Management (IAM)
description: Gambaran umum sistem manajemen identitas dan akses pada NexAID
---

# Identity & Access Management (IAM)

NexaID tidak hanya berfungsi sebagai pusat login (SSO), tetapi juga sebagai sistem manajemen identitas dan hak akses (IAM) terpusat untuk seluruh aplikasi yang terhubung.

## Konsep Inti IAM

Sistem IAM pada NexaID memastikan setiap pengguna memiliki akses yang tepat, ke aplikasi yang tepat, pada waktu yang tepat. Pengelolaan ini dilakukan melalui komponen-komponen berikut:

- **[Users](./users)**: Manajemen entitas profil individu pengguna di dalam sistem.
- **[Roles](./roles)**: Pengelompokan tingkat hak akses (misalnya: Admin, Staf, Manajer).
- **[Permissions](./permissions)**: Hak spesifik untuk melakukan aksi tertentu pada aplikasi.
- **[Access Profiles](./access-profiles)**: Kunci penghubung yang menentukan apa peran (*Role*) seorang pengguna pada aplikasi tertentu dan di departemen mana.
- **[Departments (Unit Kerja)](./departments)**: Pengelolaan hierarki dan struktur organisasi.

## Bagaimana IAM Bekerja Bersama SSO?

Ketika seorang pengguna melakukan login via SSO:
1. NexaID akan memverifikasi identitas mereka.
2. NexaID mengumpulkan seluruh informasi terkait peran, izin, dan profil akses pengguna dari sistem IAM.
3. Seluruh informasi hak akses tersebut disematkan ke dalam token JWT yang kemudian dikirimkan ke aplikasi klien.

Dengan demikian, aplikasi klien tidak perlu memiliki database role/permission sendiri. Aplikasi hanya perlu membaca data hak akses dari token yang diberikan oleh NexaID.
