---
title: Endpoint Profil Pengguna
description: Referensi API untuk mengambil data hak akses profil pengguna
---

# Endpoint Profil Pengguna

## `GET` /api/users/me

Meminta sistem backend NexaID untuk memberikan data mentah mendetail tentang siapa pemilik tiket/sesi yang sedang memanggil API. 
Informasi yang diberikan merangkum profil inti pengguna serta informasi IAM, seperti daftar Role dan unit kerja tempatnya berada.

**Otorisasi:** **Wajib Header Access Token JWT** (`Authorization: Bearer <access_token>`)

### Request Headers

| Parameter | Tipe | Wajib | Keterangan |
| :--- | :---: | :---: | :--- |
| `Authorization` | string | ✅ | Kata kunci `Bearer ` ditambah string token JWT aktif. |

### Request Body
Kosong.

### Response Sukses (200 OK)

```json
{
  "status": "success",
  "data": {
    "user": {
      "id": "e44d31e9-4e08-...",
      "name": "Budi Santoso",
      "email": "budi.santoso@perusahaan.com",
      "is_verified": true,
      "status": "active"
    },
    "roles": [
      "application_admin",
      "content_editor"
    ],
    "permissions": [
      "create_article",
      "delete_article"
    ],
    "unit_kerja": {
      "id": "dept-jkt-01",
      "name": "Kantor Pusat Jakarta",
      "parent_name": "Headquarters"
    }
  }
}
```

### Error Codes
- `401 Unauthorized` - Token tidak disematkan, sudah kedaluwarsa, tidak valid, atau akun pengguna telah dihapus.
