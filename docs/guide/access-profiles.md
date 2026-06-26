---
title: Access Profiles (Role Bundles)
description: Panduan mengenai konsep Access Profile di NexaID, yang berfungsi sebagai "Role Bundles" untuk menyederhanakan pemberian hak akses ke berbagai aplikasi klien secara serentak.
---

# Access Profiles (Role Bundles)

Di lingkungan perusahaan dengan banyak aplikasi internal, mengatur perizinan satu per satu akan sangat merepotkan. Misalnya, seorang pegawai baru di departemen Keuangan mungkin membutuhkan akses sebagai `editor` di aplikasi **LMS**, akses `reviewer` di aplikasi **Finance App**, dan akses `viewer` di aplikasi **SIIMUT**.

Untuk menyederhanakan proses ini, NexaID menggunakan fitur **Access Profiles** yang beroperasi layaknya *Role Bundles* (bundel peran).

## Konsep Dasar Access Profile

Secara teknis, sebuah **Access Profile** adalah semacam "keranjang" (grup) yang menampung sekumpulan **Role** yang ditarik dari berbagai **Aplikasi** yang berbeda. 

```mermaid
graph TD
    AP["Access Profile:<br/>Staf Keuangan Utama"]
    
    AP --> R1["Role: Editor<br/>(Aplikasi LMS)"]
    AP --> R2["Role: Reviewer<br/>(Aplikasi Finance App)"]
    AP --> R3["Role: Viewer<br/>(Aplikasi SIIMUT)"]
    
    User1([User: Alice]) -->|Diberikan Profil| AP
    User2([User: Bob]) -->|Diberikan Profil| AP
```

Ketika Anda menetapkan sebuah **Access Profile** kepada seorang pengguna (User), pengguna tersebut akan **secara otomatis mewarisi seluruh Role** yang ada di dalam keranjang profil tersebut ke setiap aplikasi kliennya.

### Keuntungan Menggunakan Access Profile:
1. **Pemberian Akses Cepat (*Onboarding*):** Saat karyawan baru masuk, admin tidak perlu mendaftarkan role karyawan tersebut satu per satu di setiap aplikasi. Cukup berikan mereka satu *Access Profile* yang merepresentasikan *job desc* mereka.
2. **Pencabutan Akses Terpusat (*Offboarding*):** Jika seorang karyawan pindah divisi, Anda hanya perlu mencabut *Access Profile* lamanya dan menggantinya dengan yang baru. Seluruh role di tiap aplikasi klien akan otomatis dicabut/disesuaikan oleh NexaID.
3. **Meminimalisir Kesalahan Manusia:** Menghindari insiden seperti *lupa* mencabut hak akses krusial seorang mantan karyawan di salah satu aplikasi lama.

---

## Arsitektur Data di NexaID

Berdasarkan *core* sistem NexaID, struktur relasinya dibangun sangat efisien:

1. **Aplikasi (`Application`)**: Data aplikasi klien yang didaftarkan di server NexaID (misal: LMS, IKP).
2. **Peran Aplikasi (`ApplicationRole`)**: Daftar peran spesifik yang valid untuk digunakan pada sebuah aplikasi (misal: `admin`, `teacher`, `student`).
3. **Profil Akses (`AccessProfile`)**: Bundel utamanya, yang memetakan banyak `ApplicationRole` dari aplikasi yang berbeda-beda (*Many-to-Many*).
4. **Relasi Pengguna (`UserAccessProfile`)**: Mengikat pengguna mana saja yang saat ini memegang `AccessProfile` tersebut.

::: info Direct Role Assignment
Meskipun NexaID sangat merekomendasikan penggunaan **Access Profile** untuk manajemen massal, sistem tetap mendukung fitur **Direct Role Assignment** (Penetapan *Role* secara langsung ke seorang *User* tanpa menggunakan profil) untuk penanganan kasus-kasus khusus/pengecualian.
:::

---

## Penggunaan pada Dashboard

Untuk membuat dan mendistribusikan *Access Profile*, langkahnya sangat lugas:

1. **Buat Access Profile:** Navigasi ke menu *Access Profiles*, buat entri baru dan berikan nama yang representatif (contoh: "Akses Manajerial Keuangan").
2. **Kumpulkan Role:** Checklist/pilih role-role dari aplikasi mana saja yang akan dimasukkan ke dalam paket profil ini.
3. **Tetapkan Pengguna:** Pilih nama-nama pengguna yang berhak mendapatkan paket akses ini.

Sekali dikonfigurasi, NexaID akan mem-_push_ status akses dan peran baru ini ke aplikasi klien, sehingga pengguna langsung bisa login ke aplikasi-aplikasi tersebut dengan hak akses yang telah Anda tentukan.
