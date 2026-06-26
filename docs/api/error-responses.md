---
title: Format Error Responses
description: Panduan respons kegagalan API NexAID
---

# Format Error Responses

Saat Anda (Aplikasi Klien) memanggil API NexaID dan terjadi masalah—seperti token yang mati, kredensial tidak valid, atau input salah format—NexaID menggunakan struktur JSON standar agar aplikasi Anda mudah menampilkan pesan atau menangani gagal koneksi (Error Handling).

## Format Struktur Error

Berikut adalah format generik saat respons bernilai gagal (Kode HTTP > 299):

```json
{
  "status": "error",
  "message": "Pesan ramah yang bisa langsung dibaca (human-readable)",
  "error_code": "STRING_KODE_SPESIFIK",
  "errors": {
      "field_nama": ["Alasan detail jika error terjadi akibat validasi form"]
  }
}
```

## Daftar Kode HTTP Standar (Context NexaID)

| HTTP Code | Maksud | Contoh Skenario di NexaID |
| :---: | :--- | :--- |
| **400** | Bad Request | Parameter pemanggilan API kurang, atau token JWT berformat sangat acak. |
| **401** | Unauthorized | Tidak ada Token di header, Token expired, kredensial login salah, App Key salah. |
| **403** | Forbidden | Token sah, tetapi pengguna atau aplikasi tidak punya wewenang melihat data terkait. |
| **404** | Not Found | Endpoint keliru, atau data pengguna yang diakses sudah terhapus. |
| **422** | Unprocessable | Gagal validasi data registrasi/login (misal: format email salah). Biasa disertai blok array `errors`. |
| **429** | Too Many Requests | Rate limiting. Anda membombardir pemanggilan API terlalu cepat. |
| **500** | Server Error | Masalah *internal backend* tak terduga, contoh: database NexaID *down*. |

## Menangani Error (Best Practice)

- **Jika mendapat 401 karena "Token Expired"**: Hentikan operasi sementara, secara otomatis panggil endpoint `POST /api/auth/refresh` untuk mendapat token baru, lalu coba ulang API yang gagal tadi (Retrying).
- **Jika mendapat 422 Unprocessable Entity**: Ambil kunci `errors` pada struktur JSON lalu cetak/sampaikan pesan yang relevan ke tampilan antarmuka form bagi sang pengguna akhir agar mereka dapat merevisi input.
