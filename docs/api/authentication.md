---
title: API Autentikasi & JWT
description: Konsep dan cara menggunakan Bearer Token pada request API NexAID
---

# Autentikasi API (JWT)

Titik-titik akhir (*endpoints*) API NexaID yang mengolah data identitas bersifat rahasia. Untuk menembus perlindungan tersebut, permintaan (*request*) API Anda harus diotentikasi.

NexaID menggunakan standar industri **JSON Web Tokens (JWT)**.

## Cara Mendapatkan Token

Token JWT tidak dibuat secara statis. Token ini dihasilkan secara instan ketika pengguna (User) atau Aplikasi Klien memvalidasi identitas mereka. 
Token utama dihasilkan saat memanggil endpoint **[Login](./sso-endpoints#post-api-auth-login)**.

## Menyematkan Token pada Header Request

Setelah mendapatkan Token, Anda wajib menyisipkannya pada *HTTP Headers* untuk setiap panggilan API selanjutnya menggunakan format otentikasi `Bearer`.

**Contoh Format Header HTTP:**
```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5...
```

Jika token tidak disematkan, salah ketik, atau kadaluwarsa, server NexaID akan menolak panggilan dengan pesan `401 Unauthorized`.

## Access Token vs Refresh Token

Saat Anda melakukan login, server akan mengembalikan dua buah token yang memiliki peran berbeda:

1. **Access Token**
   - **Tujuan**: Digunakan sebagai tiket akses untuk memanggil API. (Ini yang diletakkan di header `Bearer`).
   - **Masa Berlaku**: Singkat (umumnya 15 menit hingga 1 jam).
   
2. **Refresh Token**
   - **Tujuan**: Digunakan secara rahasia di *background* untuk meminta *Access Token* yang baru jika token lama sudah mati.
   - **Masa Berlaku**: Panjang (umumnya 7 hari hingga 30 hari).
   - **Keuntungan**: Pengguna tidak perlu dipaksa mengetik kata sandi mereka berulang kali setiap 1 jam.

## Memperbarui Token (Refresh)

Ketika *Access Token* Anda mati (Expired), Anda jangan menyuruh pengguna untuk Login ulang. Cukup arahkan aplikasi backend Anda untuk memanggil endpoint **[Refresh Token](./sso-endpoints#post-api-auth-refresh)** dengan menyerahkan *Refresh Token* yang masih valid. Anda akan mendapatkan *Access Token* baru untuk digunakan.
