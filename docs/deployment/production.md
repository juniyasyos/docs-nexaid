---
title: Rekomendasi Checklist Standar Production
description: Praktik ideal menjaga keandalan saat Go-Live
---

# Daftar Periksa Publikasi (Production Checklist)

Mengingat NexaID memegang seluruh gerbang otentikasi (Identitas Induk) organisasi, jika server NexaID "mati", otomatis seluruh karyawan tidak dapat *Login* ke portal manapun.

Oleh karena itu, ini panduan vital sebelum status proyek beralih jadi *Live/Production*.

## 1. Pastikan SSL/HTTPS Bersertifikat

Ini kewajiban yang **TIDAK BISA DITAWAR**. Jika NexaID ditaruh di port HTTP biasa (Bukan HTTPS), seluruh token sesi (JWT) beserta sandi (Password) pengguna rentan disadap.
- Gunakan sertifikat berbayar, atau *Let's Encrypt* yang otomatis.
- Konfigurasi dari server `Nginx` atau `Apache` Anda (sebagai alat pintu masuk / *Reverse Proxy*) guna memaksa semua pengalihan HTTP -> HTTPS.

## 2. Persiapan "Worker Queue" Latar Belakang

Fitur pengiriman pembaharuan *Role*, *Departemen*, dan *User Baru* dari NexaID ke Aplikasi Klien **TIDAK berjalan di jalur utama** untuk mencegah situs terasa lemot (tersendat). Pengiriman (webhook push) itu dikirim ke sistem Antrian (*Queue*).
- **Awas!** Jika Anda (Admin Infrastruktur) lupa menjalankan *Service Queue Worker* secara permanen (melalui `Supervisor` Linux atau layanan `worker` Docker), Sinkronisasi IAM ke Klien tidak akan pernah berjalan! Klien akan tertinggal pembaruannya selamanya.

## 3. Strategi Keamanan (Database & Backup)

Bencana selalu mengintai;
- Setel skrip salinan (Backup) harian. Khusus targetkan ekspor format `SQL Dump` dari isi database `nexaid`. 
- Data kunci integrasi dan hash *Password* sangat mahal harganya, upayakan *backup file SQL* dikirimkan (dikopi) ke penampung (S3 bucket/SFTP Server) yang jauh di gedung/pusat data yang berbeda dengan instalasi NexaID ini.

## 4. Analisis & Monitoring

Jangan main tebak-tebakan saat insiden;
- Pastikan ada pemantauan sisa RAM dan CPU yang terus berjalan (*Uptime Health-Check*).
- Karena *Log file* pencatat sistem akan menjadi sangat bengkak (mengingat semua alur log Login, Error Klien, dsb. disimpan terpusat di server ini), pastikan menyetel layanan `Log-rotation` (pemotong log sistem periodik) di server Linux Anda agar kapasitas keping keras (Hard Drive Disk / SSD) tidak amblas dan mengakibatkan Server Down (Full Storage).
