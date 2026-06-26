# Rencana Pengembangan Dokumentasi: Fase "Guide"

Berdasarkan referensi utama pada `docs/guide/index.md`, fokus perencanaan dokumentasi ini akan dialokasikan secara eksklusif untuk melengkapi dan merestrukturisasi bagian **Guide**. Bagian ini merupakan fondasi "Alur Belajar" yang berurutan bagi pengguna baru (Administrator maupun Developer).

---

## 1. Tujuan Fase Ini
Menyelesaikan seluruh 12 topik utama yang telah didefinisikan dalam *Alur Belajar* agar pembaca memiliki pemahaman yang solid mulai dari instalasi awal hingga fitur lanjutan (SSO & Audit Logs).

---

## 2. Struktur Konten Guide (Alur Belajar)

Setiap halaman di bawah ini akan diisi dengan penjelasan terstruktur, *best practices*, serta diagram visual jika memungkinkan.

### 1. Introduction (`/guide/introduction.md`)
- Penjabaran ulang apa itu NexaID.
- *Value proposition*: Kenapa menggunakan NexaID dibandingkan platform IAM lainnya?
- Arsitektur *High-Level* (Diagram Mermaid).

### 2. Quick Start (`/guide/quick-start.md`)
- Panduan eksekusi kilat.
- Persyaratan sistem.
- *Command* instalasi (*Docker / Bun*).
- Login pertama ke dashboard admin.

### 3. Core Concepts (`/guide/core-concepts.md`)
- Glosarium istilah penting yang sering digunakan (Tenants, Identity, Tokens).
- Penjelasan singkat konsep autentikasi vs otorisasi.

### 4. Organizations (`/guide/organizations.md`)
- Cara NexaID memodelkan struktur organisasi.
- *Tenant* tunggal vs multi-tenant.
- Unit kerja / departemen.

### 5. Users (`/guide/users.md`)
- Manajemen siklus hidup pengguna (Pembuatan, Update, Suspend, Hapus).
- Atribut standar pengguna.

### 6. Jobs (`/guide/jobs.md`)
- Konsep hierarki "Jabatan" di NexaID.
- Hubungan antara pengguna dengan jabatannya di dalam unit kerja tertentu.

### 7. Access Profiles (`/guide/access-profiles.md`)
- Penjelasan konsep *Access Profile*.
- Bagaimana profil akses menyederhanakan *assignment* hak akses untuk berbagai jenis karyawan/pengguna.

### 8. Roles & Permissions (`/guide/roles-permissions.md`)
- Sistem *Role-Based Access Control* (RBAC) di NexaID.
- Cara kerja *Roles* (Grup izin) dan *Permissions* (Hak akses granular).

### 9. Applications (`/guide/applications.md`)
- Cara mendaftarkan aplikasi klien (Client ID & Secret).
- Jenis-jenis aplikasi yang didukung (Web, SPA, Mobile).

### 10. Single Sign-On (`/guide/single-sign-on.md`)
- Penjelasan *SSO Flow* menggunakan OIDC / OAuth2.
- *Sequence diagram* alur login (Mermaid.js).
- *Callback URIs* dan konfigurasi *Client*.

### 11. Sessions (`/guide/sessions.md`)
- Cara NexaID menangani sesi pengguna secara terpusat.
- Mekanisme *logout* (*Back-channel* dan *Front-channel*).

### 12. Audit Logs (`/guide/audit-logs.md`)
- Mengapa audit log penting untuk IAM.
- Aktivitas apa saja yang direkam.
- Cara mencari dan membaca log keamanan.

---

## 3. Langkah Selanjutnya (Action Items)

- [ ] **Action 1:** Meng-update sidebar konfigurasi VitePress (`docs/.vitepress/config.mts`) agar sesuai dengan daftar urutan (12 item) di atas.
- [ ] **Action 2:** Membuat *file markdown* kosong untuk topik-topik (4-12) yang belum ada di dalam folder `docs/guide/`.
- [ ] **Action 3:** Memulai penulisan *Draft 1* untuk dokumen *Introduction* dan *Quick Start*.
- [ ] **Action 4:** Menambahkan diagram (Mermaid) pada *Core Concepts*, *Organizations*, dan *SSO*.
