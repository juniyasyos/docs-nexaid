---
title: Checklist Integrasi Klien
description: Daftar periksa dari A-Z untuk menyelesaikan integrasi aplikasi dengan NexAID
---

# Checklist Integrasi Klien

Panduan *step-by-step* ini diperuntukkan bagi tim *Developer* untuk memastikan seluruh alur integrasi dengan sistem NexaID tidak ada yang terlewat.

### Tahap 1: Persiapan Administratif
- [ ] Pastikan sistem aplikasi Anda (Aplikasi Klien) sudah siap digunakan.
- [ ] Tentukan satu URL spesifik untuk proses penangkapan kembalian SSO (Callback URL).
- [ ] Minta Admin NexaID untuk meregistrasikan aplikasi Anda.
- [ ] Simpan `App Client ID` dan `Integration Key` yang diberikan Admin secara aman.

### Tahap 2: Konfigurasi Environment (Klien)
- [ ] Masukkan URL utama NexaID ke variabel environment Anda.
- [ ] Masukkan `App Client ID` ke variabel environment.
- [ ] Masukkan `Integration Key` ke variabel environment rahasia (`.env`). Pastikan file ini tidak masuk Git.

### Tahap 3: Implementasi Alur SSO
- [ ] Ubah halaman login lokal aplikasi Anda menjadi tombol **"Login via SSO"**.
- [ ] Program tombol tersebut untuk me-*redirect* browser pengguna ke `NEXAID_URL/login` dengan membawa parameter `client_id` dan `redirect_uri`.
- [ ] Buat Route/Controller untuk menerima *Callback* URL.
- [ ] Program Callback Controller untuk menangkap parameter `token` dari URL.
- [ ] Program Callback Controller untuk memanggil API backend NexaID (`/api/auth/session-from-token`) untuk memverifikasi token dan mengambil data asli (claims).
- [ ] Setelah verifikasi berhasil, ciptakan sesi login lokal di aplikasi Anda.

### Tahap 4: Implementasi Sinkronisasi IAM
- [ ] Siapkan struktur tabel/database di aplikasi Anda untuk menyimpan profil dasar pengguna.
- [ ] Rancang endpoint webhook khusus (misal: `POST /api/webhook/nexaid-sync`) yang bertugas menerima perintah sinkronisasi profil pengguna atau role dari NexaID.
- [ ] Program logika di aplikasi Anda untuk menangkap nilai *Role* dan *Permission* yang menempel pada respons login, lalu terapkan ke kontrol UI lokal Anda.

### Tahap 5: Tahap Pengujian (Testing)
- [ ] Uji klik tombol login (pastikan pindah ke NexaID tanpa error).
- [ ] Uji penolakan jika kredensial salah di NexaID.
- [ ] Uji pengembalian ke Callback dan penciptaan sesi lokal (login berhasil).
- [ ] Uji tombol **Logout**. Pastikan selain mematikan sesi di aplikasi lokal Anda, sistem Anda juga memanggil API logout NexaID.
- [ ] Uji API Endpoint untuk Refresh Token jika masa berlaku token habis.

### Tahap 6: Go-Live
- [ ] Pastikan koneksi HTTP diarahkan menggunakan **HTTPS/SSL** untuk komunikasi produksi.
- [ ] Lakukan *clearing cache* dan pengecekan kebocoran *Integration Key* di log server. 
- [ ] Aplikasi Klien siap digunakan oleh pengguna.
