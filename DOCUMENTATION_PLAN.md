# Rencana Pengembangan Dokumentasi NexaID

Dokumen ini adalah cetak biru (blueprint) untuk merapikan, melengkapi, dan menyusun ulang dokumentasi **NexaID (Identity and Access Management Platform)** agar lebih terstruktur, mudah dipahami, dan profesional.

---

## 1. Evaluasi Kondisi Saat Ini
Saat ini struktur *sidebar* sudah terpetakan dengan baik (Guide, SSO, IAM, Applications, Deployment, Troubleshooting), namun konten di dalamnya masih kosong atau belum terarah. Kita perlu fokus membangun fondasi yang kuat mulai dari **Guide**, karena ini adalah gerbang pertama bagi developer yang ingin menggunakan NexaID.

---

## 2. Fase 1: Fokus pada `Guide` (Prioritas Utama)

Bagian *Guide* harus memberikan pemahaman fundamental sebelum pengguna masuk ke teknis spesifik seperti SSO atau IAM.

### A. Introduction (`/guide/introduction.md`)
Halaman ini harus memukau dan langsung menjawab *"Mengapa NexaID?"*
* **What is NexaID?**: Penjelasan singkat bahwa NexaID adalah platform IAM modern.
* **Key Features**: Highlight fitur utama (SSO, Role-Based Access Control, JWT, Scalability).
* **Target Audience**: Siapa yang harus menggunakan ini (Developer, System Administrator, Enterprise).
* **Architecture High-Level**: *Mermaid diagram* sederhana yang menunjukkan interaksi User -> NexaID -> Applications.

### B. Quick Start (`/guide/quick-start.md`)
Fokus pada *Time-to-Value* yang cepat. Developer harus bisa menjalankan NexaID dalam waktu kurang dari 5 menit.
* **Prerequisites**: Apa yang dibutuhkan (Docker, Node.js, Bun, dll).
* **Running Locally**: Command untuk menjalankan via `docker-compose up` atau bun script.
* **First Login**: Cara login ke Admin Console pertama kali (default credentials).
* **Next Steps**: Link ke bagian registrasi aplikasi atau pembuatan user.

### C. Core Concepts (`/guide/core-concepts.md`)
Penting untuk menyamakan kosakata (glosarium) yang digunakan di seluruh ekosistem NexaID.
* **Identities vs Users**: Perbedaan identitas global dan user spesifik.
* **Roles & Permissions**: Konsep RBAC (Role-Based Access Control) di NexaID.
* **Applications & Clients**: Konsep aplikasi yang didaftarkan (Client ID, Client Secret).
* **Tokens**: Penjelasan tentang Access Token, Refresh Token, dan ID Token (OIDC).

---

## 3. Fase 2: Pendalaman Fitur Inti

Setelah *Guide* selesai, kita akan bergerak ke dokumentasi fitur secara spesifik:

### A. Single Sign-On (SSO)
* **SSO Flow**: Visualisasi dengan *Mermaid Sequence Diagram* bagaimana Authorization Code Flow bekerja.
* **Login & Logout**: Penjelasan *redirect URIs*, pengelolaan sesi, dan *back-channel logout*.

### B. Identity & Access Management (IAM)
* **Users & Departments**: Panduan mengelola struktur organisasi pengguna.
* **Access Profiles**: Cara menggunakan profil akses untuk mengotomatisasi *Roles* & *Permissions*.

### C. Applications Integration
* **App Registration**: Panduan step-by-step mendaftarkan aplikasi pihak ketiga.
* **SDKs & Libraries**: Cara menggunakan library OIDC/OAuth2 standar untuk terhubung ke NexaID.

---

## 4. Fase 3: Operasional & Troubleshooting

Bagian akhir untuk memastikan NexaID siap dipakai di *Production*.
* **Deployment**: Panduan *environment variables*, konfigurasi *database*, dan *High Availability* (HA).
* **Troubleshooting**: Daftar error codes umum (misal: *invalid_grant*, *unauthorized_client*) beserta solusinya.

---

## 5. Standar Penulisan Dokumentasi (Guidelines)

Agar dokumentasi tetap rapi (tidak karuan) ke depannya, kita harus mematuhi aturan berikut:
1. **Bahasa**: Gunakan bahasa yang teknis namun mudah dicerna (konsisten menggunakan Bahasa Indonesia/Inggris).
2. **Visual**: Wajib gunakan diagram (Mermaid.js) untuk menjelaskan alur/flow yang rumit.
3. **Alerts**: Gunakan GitHub/VitePress Alerts (`::: info`, `::: warning`, `::: danger`) untuk menyoroti hal penting.
4. **Code Snippets**: Semua contoh kode harus bisa di-copy-paste dan menggunakan sintaks *highlighting* yang tepat.

---

### Langkah Eksekusi Selanjutnya:
1. Apakah struktur **Guide** di atas sudah sesuai dengan visi Anda untuk NexaID?
2. Jika setuju, saya akan mulai menulis konten untuk **`/guide/introduction.md`** dan **`/guide/quick-start.md`** dengan format markdown yang profesional dan menyertakan diagram diagram pendukung.
