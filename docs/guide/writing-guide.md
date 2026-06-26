# Panduan Penulisan Dokumentasi NexaID

Selamat datang di panduan penulisan dokumentasi NexaID! Panduan ini dirancang untuk membantu Anda menulis dokumentasi yang jelas, modern, dan mudah dipahami oleh pengguna.

Dokumentasi kita menggunakan [VitePress](https://vitepress.dev/) yang diperkaya dengan gaya visual modern.

---

## Prinsip Dasar Penulisan

1. **Jelas & Ringkas**: Gunakan kalimat pendek. Hindari jargon teknis yang tidak perlu, atau jelaskan jika harus digunakan.
2. **Berorientasi pada Pengguna**: Fokus pada *apa* yang ingin dicapai pengguna, bukan sekadar menjelaskan fitur sistem.
3. **Konsisten**: Gunakan format, istilah, dan struktur yang seragam di seluruh dokumen.
4. **Visual & Terstruktur**: Gunakan tabel, blok kode, dan peringatan (callouts) agar teks tidak monoton.

---

## 1. Tipografi dan Teks Dasar

Gunakan paragraf yang tidak terlalu panjang (maksimal 4-5 kalimat per paragraf). 

Untuk menonjolkan istilah, gunakan format berikut:
- **Tebal (Bold)**: Digunakan untuk penamaan UI, tombol, atau konsep penting. Contoh: Klik tombol **Simpan Konfigurasi**.
- *Miring (Italic)*: Digunakan untuk penekanan nada, judul buku/referensi, atau istilah bahasa asing. Contoh: Pengguna *harus* memiliki role Admin.
- `Inline Code`: Digunakan untuk nama variabel, file, atau nilai konfigurasi. Contoh: Ubah nilai `SSO_ENABLED` menjadi `true` di dalam `config.json`.

---

## 2. Penggunaan Peringatan (Callouts / Custom Blocks)

VitePress mendukung *custom blocks* untuk menarik perhatian pengguna. Gunakan ini secara strategis:

::: tip Tip atau Praktik Terbaik
Gunakan block `tip` untuk memberikan saran, best practices, atau cara alternatif yang lebih efisien.
:::

::: info Informasi Tambahan
Gunakan block `info` untuk memberikan konteks tambahan, catatan pinggir, atau penjelasan yang tidak kritis tetapi berguna.
:::

::: warning Peringatan!
Gunakan block `warning` untuk memberi tahu pengguna mengenai potensi masalah, fitur yang sudah *deprecated*, atau hal yang butuh perhatian khusus.
:::

::: danger Hati-hati (Critical)
Gunakan block `danger` **hanya** untuk peringatan kritis, seperti aksi yang dapat menyebabkan kehilangan data, kerusakan sistem, atau risiko keamanan.
:::

---

## 3. Format Blok Kode

Saat melampirkan contoh kode, **selalu tentukan bahasanya** (misal: `json`, `js`, `bash`) untuk *syntax highlighting*. Anda juga bisa menandai baris tertentu.

**Contoh Request (JSON):**

```json
{
  "client_id": "nxd_123456789",
  "grant_type": "authorization_code",
  "redirect_uri": "https://app.example.com/callback"
}
```

**Contoh Command Line (Bash):**

```bash
# Mengaktifkan service NexaID
systemctl start nexaid-core
```

---

## 4. Format Tabel

Tabel sangat baik untuk membandingkan opsi, daftar parameter, atau kode error. Berkat gaya kustom kita, tabel kini terlihat modern dan bersih.

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| `user_id` | String | **Ya** | ID unik pengguna dalam sistem NexaID. |
| `role` | String | Tidak | Menentukan hak akses pengguna (default: `guest`). |
| `active` | Boolean | Tidak | Status akun pengguna. |

---

## 5. Membuat Tautan (Links)

- **Tautan Internal**: Gunakan tautan relatif tanpa ekstensi `.md`. Contoh: Pelajari lebih lanjut tentang [SSO Flow](../sso/flow).
- **Tautan Eksternal**: Tautan akan otomatis membuka tab baru. Contoh: Baca [dokumentasi OAuth 2.0](https://oauth.net/2/).

---

## 6. Daftar (Lists)

### Unordered List (Daftar Tak Berurut)
Gunakan untuk poin-poin yang tidak membutuhkan urutan spesifik.
- Poin pertama
- Poin kedua
  - Sub-poin (gunakan indentasi 2 spasi)
  - Sub-poin lainnya

### Ordered List (Daftar Berurut)
Gunakan untuk langkah-langkah prosedural (tutorial).
1. Masuk ke **Admin Dashboard**.
2. Navigasi ke menu **Applications > SSO**.
3. Klik tombol **Create New Client**.

---

## Template Struktur Halaman Standar

Jika Anda membuat halaman baru, ikuti struktur ini:

1. **Judul Utama (`<h1>` atau `#`)**: Singkat dan deskriptif.
2. **Pengantar (1-2 Paragraf)**: Apa fungsi fitur ini dan mengapa pengguna membutuhkannya?
3. **Prasyarat (Opsional)**: Apa yang harus disiapkan sebelum memulai?
4. **Langkah-langkah / Cara Penggunaan**: Gunakan *ordered list* dan gambar jika perlu.
5. **Konfigurasi Tambahan / Referensi**: Tabel parameter, properti lanjutan, dsb.
6. **Langkah Selanjutnya (Opsional)**: Tautan ke dokumen terkait berikutnya.

Selamat mendokumentasikan! Dokumentasi yang baik adalah kunci kepuasan pengguna.
