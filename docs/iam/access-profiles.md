---
title: Profil Akses (Access Profiles)
description: Jantung integrasi akses IAM NexAID
---

# Profil Akses (Access Profiles)

**Access Profile** adalah mekanisme paling penting di NexaID yang menghubungkan antara Pengguna, Peran (Role), Aplikasi, dan Departemen.

## Mengapa Perlu Access Profile?

Di perusahaan besar, seorang bernama Budi bisa saja:
- Menjadi **Admin** di aplikasi **HRIS** untuk kantor cabang **Jakarta**.
- Tapi Budi hanya berstatus sebagai **Staf Biasa** di aplikasi **Helpdesk** untuk kantor **Pusat**.

*Access Profile* lah yang memungkinkan skenario fleksibel ini. Satu pengguna dapat memiliki banyak *Access Profile* yang mengatur hak-hak berbedanya di berbagai aplikasi.

## Komponen Access Profile

Saat membuat Profil Akses, Admin akan menentukan kombinasi dari elemen-elemen berikut:
1. **Pengguna (User)**: Siapa yang diberikan profil ini?
2. **Aplikasi Target**: Di aplikasi mana profil ini akan berlaku?
3. **Peran (Role)**: Apa jabatan pengguna di aplikasi tersebut?
4. **Departemen (Unit Kerja)**: (Opsional) Ke departemen/cabang mana akses ini dikerucutkan?

## Status Profil (Aktif/Nonaktif)

Setiap *Access Profile* memiliki semacam saklar hidup/mati (status aktif).
- Jika saklar **Aktif**: Pengguna resmi mendapatkan akses ke Aplikasi dengan Role tersebut.
- Jika saklar **Dimatikan (Revoked)**: Pengguna otomatis dilucuti aksesnya dari aplikasi tersebut, tanpa memengaruhi aksesnya di aplikasi lain. Ini sangat berguna jika seorang pegawai dipindahtugaskan sementara.

## Sinkronisasi Otomatis ke Klien

NexaID bertindak sebagai satu-satunya *Single Source of Truth*. Setiap ada modifikasi (penambahan, perubahan role, penonaktifan) pada sebuah *Access Profile*, NexaID secara proaktif akan mengirim sinyal notifikasi perubahan kepada sistem Aplikasi Klien. Aplikasi Klien kemudian akan menyesuaikan akses si pengguna secara *real-time*.
