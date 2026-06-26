---
title: Izin Spesifik (Permissions)
description: Mengontrol aksi tingkat mikro dengan Permissions
---

# Izin Spesifik (Permissions)

Jika Role mendefinisikan jabatan pengguna (seperti "Editor"), maka **Permission** (Izin) mendefinisikan apa saja tindakan persis yang boleh dilakukan oleh Role tersebut (seperti "membuat artikel", "mengedit artikel", "menghapus artikel").

## Hubungan Permission dan Role

Permission berfungsi sebagai atom atau unit akses terkecil. Sebuah Role adalah sekumpulan Permission. 

- Pengguna tidak diberikan Permission secara langsung. 
- Pengguna diberikan Role, dan karena Role tersebut memiliki kumpulan Permission, maka pengguna akan mewarisinya secara otomatis.

## Mendefinisikan Permission

Saat mendaftarkan Permission, sangat disarankan menggunakan penamaan (*slug*) yang berorientasi pada aksi.

Contoh yang baik:
- `create_user`
- `view_financial_reports`
- `approve_leave_request`
- `delete_document`

## Best Practice Pengelolaan Permission

::: tip Tips Penamaan Konsisten
Gunakan pola **`[aksi]_[sumber daya]`** untuk mempermudah identifikasi oleh developer di aplikasi klien. Contoh: `edit_article` atau `publish_article`.
:::

1. **Jaga Skala Mikro**: Buat Permission se-spesifik mungkin (misal: pisahkan `view_report` dan `download_report`).
2. **Kaitkan ke Role dengan Bijak**: Pastikan sebuah Permission hanya dimasukkan ke Role yang benar-benar membutuhkan hak akses tersebut.
3. **Pengecekan di Klien**: Aplikasi Klien nantinya cukup mengecek "Apakah pengguna dengan sesi ini memiliki string permission `approve_leave_request`?" untuk mengunci suatu tombol.
