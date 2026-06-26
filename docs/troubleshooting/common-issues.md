---
title: Isu Umum (Common Issues)
description: Masalah infrastruktur, server, dan IAM sync
---

# Isu Umum (Common Issues)

Selain SSO dan API JWT, ada beberapa masalah teknis konvensional terkait jaringan (network) atau *Event Push* dari NexaID yang lambat.

| Gejala/Masalah | Kemungkinan Penyebab | Langkah Pemeriksaan |
| :--- | :--- | :--- |
| **Aplikasi klien mengatakan Server NexaID `Connection Refused / Timeout`** | NexaID berada di lingkungan infrastruktur privat, atau server aplikasi Anda diblokir oleh Firewall/IP Whitelist server NexaID. | 1. Ping URL NexaID dari *terminal* server aplikasi. <br>2. Hubungi IT Infrastruktur untuk memastikan IP Publik aplikasi Anda tidak kena *block* Firewall. |
| **Pengguna tidak muncul (User missing) di tabel aplikasi klien padahal sudah registrasi SSO** | *Queue worker* NexaID mungkin mati (Webhook sinkronisasi IAM macet di *background job*), atau endpoint webhook aplikasi Anda mengembalikan error `500`. | 1. Cek Service Pekerja di server NexaID. <br>2. Cek Log error *backend* Klien Anda saat Endpoint Sinkronisasi User dipanggil. |
| **Role atau Permission tidak terasa efeknya di aplikasi Klien** | Admin sudah mengganti profil Budi jadi "Manajer", tapi di Aplikasi HRIS dia tetap "Staf Biasa". Hook sinkronisasi role tidak ditangkap dengan benar. | Pastikan fitur *Access Profile* (kaitan antara Budi, Aplikasi HRIS, Role Manajer) di set dengan saklar **Aktif** di Admin. |
| **Nama Departemen tidak terupdate di klien** | Klien tidak menyediakan endpoint webhook pembaruan divisi, atau tidak mengenali pesan payload JSON dari NexaID. | Developer klien harus membedah log, apakah webhook perubahan unit kerja masuk, lalu periksa apakah *identifier* UUID/kode departemen sinkron di kedua *database*. |
| **Berhasil Login SSO, redirect berhasil, tapi di Aplikasi Anda dibilang "Gagal"** | Logika pembuatan *Local Session* di *callback handler* aplikasi Klien Anda gagal bekerja. | Matikan sejenak fitur integrasi. Cari tahu mengapa aplikasi lokal gagal menerbitkan cookie sesi ke peramban (browser) pengguna Anda sendiri. |
