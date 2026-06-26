---
title: Masalah Login (SSO Errors)
description: Penyebab umum dan solusi seputar kegagalan alur SSO
---

# SSO Errors (Masalah Alur Login)

Daftar di bawah ini mencakup hambatan yang paling sering dialami pengguna maupun *Developer* saat mereka melakukan pengujian alur otentikasi klik tombol login.

| Gejala/Masalah | Kemungkinan Penyebab | Solusi |
| :--- | :--- | :--- |
| **"Invalid Redirect URI" saat akan masuk NexaID** | URL `redirect_uri` yang dikirim dari aplikasi Anda beda sekecil apa pun (contoh: kurang `/` di ujung) dengan yang ada di Admin NexaID. | Cek pengaturan aplikasi Anda di NexaID Admin. Samakan URL tersebut *karakter-per-karakter*. Ingat, `http://` dan `https://` dianggap berbeda! |
| **Tombol Login tidak bergerak / Halaman Blank** | Kesalahan *routing* di sisi aplikasi Klien, gagal membangun parameter URL. | Pastikan format redirect adalah: `<NEXAID_URL>/login?client_id=<APP_ID>&redirect_uri=<URL_CALLBACK>`. |
| **Pengguna Gagal Login (Akun Tidak Aktif/Diblokir)** | Seseorang di Admin Panel mematikan saklar "Aktif" di profil pengguna. | Minta administrator untuk membuka blokir/mengaktifkan kembali pengguna tersebut di tabel Users NexaID. |
| **Session Tidak Ditemukan / "Token Kosong" di Callback** | *Browser Privacy* ketat (Incognito / Safari ITP) atau perbedaan skema Cookie (SameSite issues). | Pastikan domain utama aplikasi dan sistem NexaID tidak dicegat Cookie *cross-site*. (Jika domain beda, aplikasi harus baca murni URL Token, bukan ambil otomatis dari Browser Cookie). |
| **"App Key Tidak Valid" saat Membongkar Token** | Pengembang aplikasi klien memasukkan Integration Key lama ke dalam file `.env`. | Buka portal admin NexaID, salin **Integration Key** milik aplikasi tersebut, dan ubah di dalam file `.env` server klien, lalu lakukan *Restart Server*. |
