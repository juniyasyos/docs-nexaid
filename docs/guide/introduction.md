---
title: Pengenalan NexaID
description: Memahami peran NexaID sebagai Identity Provider dan layanan Identity & Access Management.
---

# Pengenalan NexaID

NexaID adalah platform **Identity and Access Management (IAM)** yang menyediakan layanan autentikasi, otorisasi, dan pengelolaan identitas pengguna secara terpusat. Dengan mekanisme **Single Sign-On (SSO)**, aplikasi dapat menggunakan satu layanan identitas yang sama tanpa perlu mengimplementasikan sistem login maupun manajemen pengguna secara terpisah.

Selain berfungsi sebagai **Identity Provider (IdP)**, NexaID juga menjadi sumber utama data pengguna, struktur organisasi, serta kebijakan akses yang digunakan bersama oleh seluruh aplikasi yang terintegrasi.

```mermaid
graph TD
    User([User]) -->|Authenticate| NexaID{NexaID}

    Admin([Administrator]) -->|Manage Users & Access| NexaID

    NexaID --> AppA[Application A]
    NexaID --> AppB[Application B]
    NexaID --> AppC[Application C]
````

## Mengapa NexaID?

Pada organisasi yang memiliki banyak aplikasi, setiap sistem sering kali mengelola pengguna, proses autentikasi, serta hak aksesnya sendiri. Pendekatan ini menyebabkan data identitas tersebar di berbagai aplikasi, meningkatkan beban administrasi, serta menyulitkan penerapan kebijakan akses yang konsisten.

NexaID memusatkan seluruh proses tersebut ke dalam satu layanan sehingga setiap aplikasi cukup mendelegasikan autentikasi dan pengelolaan identitas kepada NexaID. Dengan pendekatan ini, aplikasi dapat berfokus pada logika bisnis tanpa perlu membangun maupun memelihara sistem autentikasi sendiri.

Keuntungan yang diperoleh antara lain:

* **Single Sign-On (SSO)** untuk seluruh aplikasi.
* **Identity Management** yang terpusat.
* **Role, Permission, dan Access Profile** yang konsisten.
* **Manajemen organisasi** (departemen, unit kerja, dan jabatan) yang terintegrasi.
* **Session Management** dan **Audit Log** yang dikelola dari satu tempat.
* **Integrasi aplikasi** yang lebih sederhana menggunakan standar autentikasi.
* **Kustomisasi halaman login** sesuai identitas visual perusahaan.

## Kemampuan Utama

NexaID menyediakan beberapa layanan inti yang dapat digunakan bersama oleh seluruh aplikasi.

| Layanan                     | Deskripsi                                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Identity Management**     | Mengelola identitas pengguna sebagai sumber data utama seluruh aplikasi.                                    |
| **Single Sign-On (SSO)**    | Melakukan autentikasi satu kali untuk mengakses beberapa aplikasi yang terhubung.                           |
| **Access Management**       | Mengelola Role, Permission, dan Access Profile secara terpusat.                                             |
| **Organization Management** | Mengelola struktur organisasi, departemen, unit kerja, dan jabatan.                                         |
| **Application Management**  | Mendaftarkan dan mengonfigurasi aplikasi yang terintegrasi dengan NexaID.                                   |
| **Session Management**      | Mengelola sesi login, logout, serta pemantauan sesi aktif pengguna.                                         |
| **Audit Logs**              | Mencatat aktivitas autentikasi dan perubahan konfigurasi sebagai kebutuhan audit dan keamanan.              |
| **Custom Login Experience** | Menyesuaikan tampilan halaman login menggunakan logo, warna, ilustrasi, maupun identitas visual perusahaan. |

## Siapa yang Menggunakan NexaID?

NexaID digunakan oleh beberapa peran yang berbeda di dalam organisasi.

### Administrator

Bertanggung jawab mengelola pengguna, organisasi, aplikasi, role, permission, access profile, serta kebijakan akses melalui dashboard administrasi.

### Developer

Mengintegrasikan aplikasi dengan NexaID menggunakan protokol autentikasi yang didukung, mengimplementasikan proses login, serta memanfaatkan identitas pengguna yang disediakan oleh NexaID.

### End User

Melakukan autentikasi melalui NexaID untuk mengakses aplikasi yang telah diberikan izin sesuai hak akses yang dimiliki.

---

::: info Langkah Selanjutnya

Jika ini adalah pertama kalinya menggunakan NexaID, lanjutkan ke **Quick Start** untuk menjalankan aplikasi dan melakukan konfigurasi awal.

Selanjutnya, pelajari **Core Concepts** untuk memahami komponen utama seperti Identity, Organization, Application, Role, Permission, dan Access Profile sebelum melakukan integrasi aplikasi.
