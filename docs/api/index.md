---
title: API Reference (Overview)
description: Pengantar penggunaan REST API backend NexAID
---

# API Reference (Overview)

NexaID menyediakan arsitektur antarmuka REST API murni (*headless*) untuk berkomunikasi secara asinkron (Server-to-Server) dengan aplikasi klien manapun yang sudah didaftarkan.

## Base URL
Semua panggilan API dilakukan ke alamat dasar (*Base URL*) instalasi NexaID Anda.

Misalnya, jika NexaID Anda di-hosting di `https://sso.perusahaan.com`, maka titik awal API adalah:
`https://sso.perusahaan.com/api/`

## Format Data Pertukaran
Semua permintaan (`Requests`) dan kembalian (`Responses`) secara mutlak menggunakan format **JSON**. 

Pastikan Anda menyertakan Header ini pada setiap request:
```http
Accept: application/json
Content-Type: application/json
```

## Metode Autentikasi API
NexaID mengamankan Endpoint API-nya dengan **JSON Web Token (JWT)**.
Jika sebuah titik akhir (endpoint) memerlukan autorisasi, Anda harus melampirkan JWT token dengan tipe `Bearer` pada *header request*.

## Format Respons Standar
NexaID menggunakan konvensi JSON yang konsisten. Semua respons sukses minimal mengandung properti `status: "success"` dan membungkus data utama dalam properti `data`.

```json
{
  "status": "success",
  "data": {
    "key": "value"
  },
  "message": "Operasi berhasil"
}
```

Untuk melihat konvensi jika terjadi error, silakan merujuk ke halaman [Format Error Responses](./error-responses).

## Menelusuri API

Dokumentasi ini dibagi menjadi beberapa bagian utama:
- [API Autentikasi (Penjelasan Token JWT)](./authentication)
- [Referensi Endpoint SSO (Login, Validasi, Logout)](./sso-endpoints)
- [Referensi Endpoint IAM Pengguna](./user-endpoints)
