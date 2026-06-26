---
title: Deployment (Overview)
description: Cara mengatur server dan mempublikasikan (deploy) NexAID ke sistem infrastruktur (On-Prem / Cloud)
---

# Deployment (Overview)

Sistem NexaID bukan aplikasi *desktop* ringan; ini adalah platform server berskala tinggi yang mengamankan jantung perusahaan. Diperlukan persiapan *server* yang memadai.

## Prasyarat Infrastruktur

- Mesin berbasis Linux (Ubuntu, Debian, dsb).
- RAM Minimal 2GB (Kapasitas lebih besar jika integrasi klien banyak).
- Web Server untuk koneksi HTTPS (Nginx/Apache).
- Mesin Database terpusat (MySQL/PostgreSQL).
- In-Memory Cache/Queue Manager (Redis disarankan, guna kecepatan token).

## Pilihan Metode Deployment

Kami menyediakan panduan untuk dua skenario utama untuk peluncuran (deployment) NexaID ke publik atau intranet Anda:

1. **[Via Docker (Sangat Disarankan)](./docker)**
   Memakai Docker (menggunakan berkas `docker-compose.yml`) menghindari konflik *dependencies* dan memastikan server jalan identik dengan komputer *developer*. Cocok bagi arsitektur modern.

2. **[Persiapan Production (Konvensional/Manual)](./production)**
   Khusus bagi Anda yang harus menginstal konfigurasi sistem (*Web Server, Database, Pekerja Queue*) mandiri ke dalam server bare-metal/mesin tanpa lapisan kontainerisasi virtual.

3. **[Pemahaman Environment Variables (`.env`)](./environment)**
   Apapun metode *deployment* yang dipilih, semua konfigurasi krusial berlabuh di Environment Variables (variabel lingkungan). Wajib dipahami!
