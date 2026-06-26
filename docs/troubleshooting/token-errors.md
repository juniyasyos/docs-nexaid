---
title: Masalah Token & API (Token Errors)
description: Penyebab umum dan solusi seputar error 401 dan JWT
---

# Token Errors (Masalah Token JWT)

Ini khusus bagi tim *Backend Developer* yang menerima balikan respons `4xx` (khususnya `401`) dari server API NexaID saat sedang mencoba mengeksekusi sinkronisasi atau mengambil profil.

| Gejala di Log Server | Penyebab Utama | Langkah Penyelamatan |
| :--- | :--- | :--- |
| **`401 Unauthorized` - Token Expired** | Waktu *lifetime* Access Token telah lewat. | Jangan *redirect* user ke halaman login lagi! Tangkap `401` di server klien Anda, panggil endpoint `POST /api/auth/refresh` memakai Refresh Token lama, dapatkan Token baru, otomatis jalankan ulang *request*. |
| **`401 Unauthorized` - Invalid Signature / Token Invalid** | Data string JWT token termodifikasi (korup) akibat perpindahan jaringan, atau sengaja dipalsukan. | Pastikan Klien mem-*parsing* Token tanpa mengubah atau menghilangkan spasi/titik. Jika masih error, minta pengguna Logout dan Login ulang. |
| **`401 Unauthorized` - Token Revoked** | Token dikunci dari pusat. NexaID menyadari pengguna logout secara paksa, profilnya dinonaktifkan, atau dicurigai dibajak. | Tutup akses sesi lokal sang pengguna seketika dan tolak akses mereka menuju aplikasi. Alihkan (redirect) untuk login ulang. |
| **`401 Unauthorized` - Missing Authorization Header** | Anda mengirim permintaan API, tapi Anda lupa melampirkan token. | Periksa dokumentasi kode klien Anda, pastikan Anda mencantumkan baris: `Authorization: Bearer <token_atau_integration_key>`. |
| **`400 Bad Request` - Wrong Token Format** | Anda menyisipkan kata `Bearer ` secara keliru atau token berisikan karakter yang bukan standar Base64 JSON. | Pastikan ada persis 1 buah [SPASI] antara kata `Bearer` dan rentetan `eyJhbG...` token. |
| **Gagal melakukan `Refresh Token`** | Refresh token juga expired, atau sengaja di-revoke dari pusat. | Jika ini terjadi, barulah Anda boleh memaksa sesi pengguna tamat total dan alihkan mereka ke form Login. |
