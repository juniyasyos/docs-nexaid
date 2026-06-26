---
title: Quick Start — Integrasi Aplikasi ke NexAID
description: Panduan langkah demi langkah bagi developer untuk mengintegrasikan aplikasi klien ke NexAID SSO.
---

# Quick Start: Integrasi Aplikasi ke NexAID

Panduan ini ditujukan untuk **developer** yang ingin mengintegrasikan aplikasi mereka ke NexAID sehingga pengguna dapat login menggunakan SSO.

::: info Prasyarat
- Anda memiliki akses ke **NexAID Admin Panel**.
- Aplikasi klien Anda sudah dapat diakses melalui HTTPS (direkomendasikan untuk produksi).
- Anda sudah menentukan **Callback URL** — URL di aplikasi klien yang akan menerima token setelah login berhasil.
:::

---

## Langkah 1: Daftarkan Aplikasi di NexAID Admin

1. Masuk ke **NexAID Admin Panel** dengan akun administrator.
2. Navigasi ke menu **Applications** → **Tambah Aplikasi Baru**.
3. Isi formulir pendaftaran aplikasi:

   | Field | Keterangan |
   |-------|-----------|
   | **Nama Aplikasi** | Nama aplikasi yang akan tampil di portal SSO |
   | **URL Aplikasi** | URL utama aplikasi Anda (contoh: `https://myapp.example.com`) |
   | **Callback URL** | URL endpoint di aplikasi klien yang menerima token setelah login |
   | **Deskripsi** | (Opsional) Deskripsi singkat aplikasi |

4. Klik **Simpan**. Aplikasi Anda akan terdaftar dan mendapat status **Aktif**.

::: tip
Callback URL harus berupa endpoint yang dapat diakses oleh server NexAID. Pastikan URL ini sudah dikonfigurasi di server aplikasi Anda sebelum melakukan pengujian.
:::

---

## Langkah 2: Dapatkan App Key & Callback URL

Setelah aplikasi terdaftar, NexAID akan menerbitkan **App Key** unik untuk aplikasi Anda.

1. Buka halaman detail aplikasi yang baru saja dibuat.
2. Catat informasi berikut:

   - **App Key** — kunci identifikasi unik aplikasi Anda di NexAID. Diperlukan saat membangun URL login SSO.
   - **Callback URL** — konfirmasi bahwa URL yang didaftarkan sudah benar.

::: warning Kerahasiaan App Key
**Jangan** menyimpan App Key di dalam kode sumber (*source code*) atau repository publik. Simpan sebagai environment variable di server aplikasi Anda.
:::

Contoh penyimpanan App Key sebagai environment variable:

```bash
# .env (aplikasi klien)
NEXAID_APP_KEY=your-app-key-here
NEXAID_SSO_URL=https://nexaid.example.com
NEXAID_CALLBACK_URL=https://myapp.example.com/auth/callback
```

---

## Langkah 3: Konfigurasi Aplikasi Klien

### 3a. Buat URL Login SSO

Saat pengguna mengklik tombol "Login", arahkan pengguna ke URL login NexAID dengan menyertakan App Key sebagai parameter:

```
https://nexaid.example.com/login?app_key={APP_KEY}
```

Contoh implementasi di berbagai bahasa:

::: code-group

```php [PHP]
$nexaidUrl = getenv('NEXAID_SSO_URL');
$appKey    = getenv('NEXAID_APP_KEY');

$loginUrl = "{$nexaidUrl}/login?app_key={$appKey}";

// Redirect pengguna ke NexAID
header("Location: {$loginUrl}");
exit;
```

```javascript [Node.js / Express]
const loginUrl = `${process.env.NEXAID_SSO_URL}/login?app_key=${process.env.NEXAID_APP_KEY}`;
res.redirect(loginUrl);
```

```python [Python / Flask]
import os
from flask import redirect

nexaid_url = os.getenv('NEXAID_SSO_URL')
app_key    = os.getenv('NEXAID_APP_KEY')

login_url = f"{nexaid_url}/login?app_key={app_key}"
return redirect(login_url)
```

:::

### 3b. Siapkan Endpoint Callback

Buat endpoint di aplikasi Anda yang akan menerima `token` dari NexAID setelah login berhasil.

Contoh endpoint callback:

```
GET https://myapp.example.com/auth/callback?token={JWT_TOKEN}
```

Endpoint ini perlu:
1. Mengambil nilai `token` dari query string.
2. Memvalidasi token ke NexAID (lihat langkah 4).
3. Membuat sesi lokal untuk pengguna yang terautentikasi.

---

## Langkah 4: Uji Alur SSO

### 4a. Uji Login

1. Buka aplikasi klien Anda di browser.
2. Klik tombol **Login** — Anda akan diarahkan ke halaman login NexAID.
3. Masukkan kredensial pengguna yang sudah terdaftar di NexAID.
4. Setelah login berhasil, Anda akan diarahkan kembali ke **Callback URL** dengan JWT token di query string.

### 4b. Validasi Token

Verifikasi token yang diterima dengan memanggil endpoint validasi NexAID:

```http
POST /api/auth/session-from-token
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json
```

Respons sukses:

```json
{
  "status": true,
  "message": "Token valid",
  "data": {
    "user": {
      "id": 1,
      "name": "Budi Santoso",
      "email": "budi@example.com",
      "roles": ["staff", "admin-app"]
    }
  }
}
```

::: tip Sesi Berhasil
Jika respons `status: true`, gunakan data `user` untuk membuat sesi di aplikasi klien Anda. Simpan JWT token di server-side (misalnya session atau HttpOnly Cookie) — **jangan** di LocalStorage.
:::

### 4c. Penanganan Error Umum

| Kondisi | Penyebab | Solusi |
|---------|---------|--------|
| Redirect loop | App Key salah atau tidak aktif | Periksa App Key di Admin Panel |
| Token tidak valid | Token sudah kadaluarsa atau dimanipulasi | Minta pengguna login ulang |
| Callback URL tidak cocok | URL di Admin ≠ URL aktual | Perbarui Callback URL di Admin Panel |
| `401 Unauthorized` | Token tidak dikirim atau format salah | Pastikan header `Authorization: Bearer {token}` |

---

## Langkah Selanjutnya

Setelah integrasi dasar berhasil, Anda dapat melanjutkan ke:

- 📖 [Alur SSO Lengkap](../sso/flow) — memahami siklus hidup token dan sesi secara mendalam.
- 🔒 [Logout SSO](../sso/logout) — implementasi logout lokal dan global.
- 👥 [Manajemen IAM](../iam/) — konfigurasi role, permission, dan access profile.
- 🔌 [API Reference](../api/) — dokumentasi lengkap semua endpoint NexAID.
