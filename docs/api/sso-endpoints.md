---
title: Endpoint SSO (Otentikasi & Token)
description: Referensi lengkap metode otentikasi API SSO
---

# Referensi API Endpoint SSO

Kumpulan dokumentasi rute (endpoint) API yang mengatur siklus hidup sesi dan pencetakan token otorisasi Single Sign-On.

---

## `POST` /api/auth/login

Memvalidasi kombinasi email dan kata sandi milik pengguna. Jika valid, sistem akan mencetak sepasang token JWT baru.

**Otorisasi:** Tidak diperlukan (Publik)

### Request Body

| Parameter | Tipe | Wajib | Keterangan |
| :--- | :---: | :---: | :--- |
| `email` | string | ✅ | Email pengguna terdaftar. |
| `password` | string | ✅ | Kata sandi pengguna. |
| `client_id` | string | ❌ | ID Klien aplikasi asal (berguna untuk pencatatan). |

### Response Sukses (200 OK)

```json
{
  "status": "success",
  "data": {
    "access_token": "eyJhbGciOiJI...",
    "refresh_token": "def5020...",
    "expires_in": 3600,
    "token_type": "Bearer"
  }
}
```

### Error Codes
- `401 Unauthorized` - Kredensial (email/password) salah.
- `422 Unprocessable Entity` - Format email salah atau password kosong.

---

## `POST` /api/auth/session-from-token

Fungsi krusial khusus untuk Backend Aplikasi Klien. Mengirim token mentah hasil lemparan (callback) untuk dibongkar dan diverifikasi keasliannya oleh NexaID, sekaligus memberikan profil data penggunanya.

**Otorisasi:** **Wajib Header Kunci Rahasia Integrasi Klien** (`Authorization: Bearer <INTEGRATION_KEY>`)

### Request Body

| Parameter | Tipe | Wajib | Keterangan |
| :--- | :---: | :---: | :--- |
| `token` | string | ✅ | JWT Access Token yang didapat saat Callback. |

### Response Sukses (200 OK)

```json
{
  "status": "success",
  "data": {
    "is_valid": true,
    "user_id": "9a2f1c84-...",
    "roles": ["admin_hr"],
    "permissions": ["view_salary", "edit_salary"],
    "department": "HR Division"
  }
}
```

### Error Codes
- `401 Unauthorized` - Token palsu, rusak, kedaluwarsa, atau Integration Key klien salah.

---

## `POST` /api/auth/refresh

Memperbarui `access_token` yang sudah lewat masa berlakunya tanpa memerlukan kata sandi ulang.

**Otorisasi:** Tidak diperlukan, tetapi wajib melampirkan token *refresh* yang valid di bodi (*body*).

### Request Body

| Parameter | Tipe | Wajib | Keterangan |
| :--- | :---: | :---: | :--- |
| `refresh_token` | string | ✅ | String token refresh yang Anda miliki. |

### Response Sukses (200 OK)

```json
{
  "status": "success",
  "data": {
    "access_token": "eyJhbGciOiJI..._NEW",
    "expires_in": 3600,
    "token_type": "Bearer"
  }
}
```

### Error Codes
- `401 Unauthorized` - Refresh token tidak valid atau sudah kadaluwarsa (memaksa pengguna harus Login manual).

---

## `POST` /api/auth/logout

Mencabut (mencoret) secara paksa sisa umur Access Token dan menghapus sesi (session) SSO global dari server NexaID.

**Otorisasi:** **Wajib Access Token JWT** (`Authorization: Bearer <access_token>`)

### Request Body
Kosong.

### Response Sukses (200 OK)

```json
{
  "status": "success",
  "message": "Sesi telah berhasil diakhiri."
}
```

### Error Codes
- `401 Unauthorized` - Token tidak disematkan, salah, atau sudah kadaluwarsa sebelumnya.
