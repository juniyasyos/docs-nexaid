---
title: Login SSO — NexAID
description: Cara kerja proses login SSO di NexAID dari sisi pengguna dan developer, beserta parameter dan persiapan aplikasi klien.
---

# Login SSO

Halaman ini menjelaskan secara detail bagaimana proses login SSO bekerja — baik dari sudut pandang **pengguna akhir** maupun **developer** yang membangun integrasi.

---

## Pengalaman Pengguna Saat Login

Dari sudut pandang pengguna, alur login SSO NexAID terasa sederhana dan mulus:

1. Pengguna membuka aplikasi klien dan mengklik tombol **"Login"** atau **"Masuk"**.
2. Browser secara otomatis diarahkan ke **halaman login NexAID**.
3. Pengguna mengisi **username/email** dan **password** di portal NexAID.
4. Setelah login berhasil, pengguna langsung masuk ke aplikasi klien — tanpa langkah tambahan.

::: tip Sudah Login Sebelumnya?
Jika pengguna sudah memiliki sesi aktif di NexAID (misalnya baru saja menggunakan aplikasi lain yang juga terhubung ke NexAID), mereka **tidak perlu login lagi**. NexAID mengenali sesi yang ada dan langsung mengarahkan pengguna kembali ke aplikasi klien.
:::

---

## Cara Developer Memulai Alur Login

Sebagai developer, tugas Anda adalah membangun tombol/tautan "Login" yang mengarahkan pengguna ke NexAID dengan parameter yang benar.

### URL Login NexAID

```
GET https://nexaid.example.com/login?app_key={APP_KEY}
```

### Parameter Query String

| Parameter | Tipe | Wajib | Keterangan |
|-----------|------|-------|-----------|
| `app_key` | string | ✅ Ya | App Key unik aplikasi klien, diperoleh dari NexAID Admin Panel |

::: info Darimana Mendapat App Key?
App Key diterbitkan secara otomatis saat Anda mendaftarkan aplikasi di NexAID Admin. Lihat panduan [Quick Start](../guide/quick-start#langkah-2-dapatkan-app-key-callback-url) untuk detail lengkapnya.
:::

### Contoh Implementasi Tombol Login

::: code-group

```html [HTML Sederhana]
<a href="https://nexaid.example.com/login?app_key=YOUR_APP_KEY">
  Login dengan NexAID
</a>
```

```php [PHP]
<?php
$appKey   = getenv('NEXAID_APP_KEY');
$loginUrl = "https://nexaid.example.com/login?app_key={$appKey}";
?>

<a href="<?= htmlspecialchars($loginUrl) ?>">Login dengan NexAID</a>
```

```javascript [JavaScript]
const appKey   = process.env.NEXAID_APP_KEY;
const loginUrl = `https://nexaid.example.com/login?app_key=${appKey}`;

// Redirect programatik
window.location.href = loginUrl;
```

```python [Python / Flask]
import os
from flask import redirect

@app.route('/login')
def login():
    app_key   = os.getenv('NEXAID_APP_KEY')
    login_url = f"https://nexaid.example.com/login?app_key={app_key}"
    return redirect(login_url)
```

:::

---

## Apa yang Terjadi di Sisi NexAID

Setelah pengguna tiba di halaman login NexAID:

1. **NexAID membaca `app_key`** dan mengidentifikasi aplikasi klien mana yang meminta login.
2. **NexAID memeriksa sesi aktif** — jika pengguna sudah login, langsung lanjut ke penerbitan token.
3. **Jika belum login**, NexAID menampilkan form login untuk pengguna.
4. Setelah verifikasi berhasil, NexAID **menerbitkan JWT token** dan melakukan redirect ke Callback URL aplikasi klien.

---

## Persiapan di Aplikasi Klien

Sebelum mengaktifkan login SSO, pastikan hal-hal berikut sudah dikonfigurasi di aplikasi klien:

### ✅ Checklist Sebelum Login SSO Aktif

- [ ] App Key sudah disimpan sebagai environment variable (bukan hardcoded di kode).
- [ ] Callback URL sudah didaftarkan di NexAID Admin Panel.
- [ ] Endpoint callback sudah dibuat di aplikasi klien (lihat [Halaman Callback](./callback)).
- [ ] Aplikasi berjalan di HTTPS (wajib untuk produksi).
- [ ] Penanganan error sudah disiapkan jika login gagal atau dibatalkan.

---

## Skenario Khusus

### Pengguna Belum Terdaftar di NexAID

Jika pengguna mencoba login tetapi akun mereka belum ada di NexAID, mereka akan mendapatkan pesan error di halaman login NexAID. Pengguna **tidak akan** diarahkan ke Callback URL.

::: warning
Pastikan semua pengguna yang perlu mengakses aplikasi klien Anda sudah didaftarkan di NexAID oleh administrator sebelumnya.
:::

### Pengguna Tidak Memiliki Akses ke Aplikasi

Jika pengguna ada di NexAID tetapi tidak memiliki izin akses ke aplikasi klien tertentu, NexAID akan menampilkan pesan akses ditolak. Aplikasi klien juga sebaiknya memeriksa role/permission dari data token untuk validasi tambahan.

### Login Dibatalkan Oleh Pengguna

Jika pengguna menutup halaman login NexAID atau menekan tombol batal, **tidak ada redirect ke Callback URL** yang terjadi. Pastikan aplikasi klien menangani kondisi di mana pengguna kembali tanpa token.

---

## Keamanan saat Login

::: danger Jangan Modifikasi Parameter App Key
Jangan pernah membiarkan pengguna atau pihak luar memodifikasi nilai `app_key` secara dinamis. Nilai ini harus selalu berasal dari konfigurasi server.
:::

::: warning Lindungi App Key
App Key bersifat rahasia. Jangan tampilkan di frontend (HTML source, JavaScript klien), log server, atau commit ke repository publik.
:::

---

## Langkah Berikutnya

Setelah pengguna berhasil login di NexAID, browser akan diarahkan ke Callback URL aplikasi klien dengan JWT token. Pelajari cara menangani callback di:

👉 [Callback & Validasi Token](./callback)
