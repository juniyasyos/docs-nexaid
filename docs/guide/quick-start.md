---
title: Quick Start
description: Menjalankan NexaID untuk pertama kali dan mengintegrasikan aplikasi klien.
---

# Quick Start

Panduan ini membantu Anda menjalankan **NexaID** dari awal hingga berhasil menghubungkan aplikasi pertama ke dalam ekosistem Single Sign-On (SSO).

Setelah mengikuti panduan ini, Anda akan dapat:

- Menjalankan NexaID di lingkungan lokal.
- Login ke Dashboard Administrator.
- Mendaftarkan aplikasi baru.
- Mengintegrasikan aplikasi menggunakan **nexaid-client**.

---

## Requirements

Pastikan lingkungan pengembangan telah memenuhi persyaratan minimum berikut:

| Software | Minimum Version |
|----------|-----------------|
| PHP | 8.3+ |
| Composer | Latest |
| Node.js | 22+ |
| MySQL / MariaDB | Supported |
| Git | Latest |

---

## Installation

Pertama, *clone* repositori NexaID dan masuk ke direktorinya:

```bash
composer create-project juniyasyos/nexaid nexaid
cd nexaid
```

Install seluruh dependensi backend dan frontend:

```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install
```

Salin template environment dan *generate application key*:

```bash
cp .env.example .env
php artisan key:generate
```

---

## Environment & Database

Sesuaikan konfigurasi database Anda pada file `.env`:

```env
APP_NAME=NexaID
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nexaid
DB_USERNAME=root
DB_PASSWORD=
```

Pastikan koneksi database telah sesuai, kemudian jalankan proses migrasi dan *seeding* data awal:

```bash
# Jalankan migrasi tabel database
php artisan migrate

# Jalankan seeding data awal (termasuk akun Admin default)
php artisan db:seed
```

---

## Run Application

Jalankan server pengembangan lokal:

```bash
composer run dev
```

Secara bawaan NexaID akan berjalan dan dapat diakses pada: **[http://localhost](http://localhost)**

---

## First Login

1. Buka browser dan akses URL **[http://localhost](http://localhost)**
2. Login menggunakan akun administrator yang telah dibuat melalui proses *seeding*.
3. Setelah berhasil login, Anda akan langsung diarahkan ke **Dashboard NexaID**.

---

## Register Application

Agar aplikasi klien Anda dapat menggunakan layanan autentikasi NexaID, aplikasi tersebut harus didaftarkan terlebih dahulu.

1. Masuk ke menu **Applications** di sidebar dashboard admin.
2. Klik tombol **Create Application**, lalu lengkapi informasi berikut:

| Field | Keterangan |
|--------|------------|
| **Application Name** | Nama aplikasi Anda |
| **Application URL** | URL utama aplikasi (contoh: `http://localhost:9000`) |
| **Callback URL** | URL tujuan setelah autentikasi berhasil (contoh: `http://localhost:9000/sso/callback`) |
| **Description** | Deskripsi aplikasi (opsional) |

3. Simpan konfigurasi. NexaID akan menghasilkan **App Key** yang akan digunakan oleh aplikasi klien Anda.

---

## Integrate Client

Untuk mempermudah integrasi, aplikasi klien (seperti *SIIMUT*, *IKP*, atau *LMS*) menggunakan package`nexaid-client`. Package ini menangani autentikasi, sinkronisasi pengguna, *session*, dan *logout* secara otomatis.

Berikut adalah langkah-langkah teknis instalasi dan modifikasi *codebase* pada aplikasi klien Laravel Anda.

### 1. Install Package & Publish Config/Migration

Pada terminal aplikasi klien Anda, jalankan perintah berikut:

```bash
# Install package nexaid-client via Composer
composer require juniyasyos/nexaid-client

# Publish file konfigurasi bawaan
php artisan vendor:publish --tag=nexaid-client-config

# Publish file migrasi untuk database client
php artisan vendor:publish --tag=nexaid-client-migrations
```

**Penjelasan Hasil Publish:**
- Perintah config akan menyalin file pengaturan bawaan ke `config/iam.php` di dalam aplikasi klien Anda (sebagai *fallback* opsi jika tidak diset di `.env`).
- Perintah migrations akan membuat beberapa file migrasi baru di direktori `database/migrations` aplikasi klien Anda, di antaranya:
  1. **Add IAM Columns**: Menambahkan kolom `iam_id` (sebagai penanda identitas unik SSO) dan `status` (aktif/suspend) ke tabel `users` yang sudah ada.
  2. **Tabel Settings**: Membuat tabel `iam_settings` untuk mengatur log/konfigurasi internal *package*.
  3. **Tabel Unit Kerja**: Membuat tabel struktur organisasi (`unit_kerja` dan pivot-nya) agar penempatan kerja pengguna dari NexaID tersinkronisasi.

Selanjutnya, eksekusi file-file migrasi tersebut untuk menerapkannya ke dalam *database* klien:
```bash
php artisan migrate
```

### 2. Modifikasi Model User

Anda harus menyesuaikan model autentikasi klien (biasanya `App\Models\User.php`) agar mendukung kolom-kolom baru dari IAM dan dapat menyimpan *array* role pengguna.

```php
class User extends Authenticatable
{
    // Tambahkan kolom IAM ke dalam fillable
    protected $fillable = [
        'iam_id',
        'name',
        'nip', // Sesuaikan dengan IAM_IDENTIFIER_FIELD di .env
        'roles',
        'status',
        // ... kolom lainnya
    ];

    // Pastikan roles dicast sebagai array (json)
    protected $casts = [
        'password' => 'hashed',
        'roles' => 'array',
    ];

    // (Opsional) Fungsi helper untuk pengecekan role
    public function hasRole($role)
    {
        $roles = $this->roles ?? [];
        if (is_array($role)) {
            return count(array_intersect($role, $roles)) > 0;
        }
        return in_array($role, $roles);
    }
}
```

### 3. Konfigurasi Routes (`web.php`)

Aplikasi klien harus dirancang agar bisa beradaptasi baik dalam mode SSO aktif maupun mode *fallback* (Login Lokal biasa).
Berdasarkan implementasi di aplikasi klien (misal LMS/IKP), sesuaikan file `routes/web.php` Anda seperti berikut:

```php
use Juniyasyos\IamClient\Http\Controllers\SsoLoginRedirectController;
use Juniyasyos\IamClient\Http\Controllers\LogoutController;
use App\Http\Controllers\AuthController; // Controller login lokal Anda

// --- 1. Rute Login Berdasarkan Konfigurasi IAM ---
if (config('iam.enabled')) {
    // Mode SSO Aktif
    Route::get('/', function (\Illuminate\Http\Request $request) {
        if (\Illuminate\Support\Facades\Auth::check()) {
            return redirect('/dashboard');
        }
        // Serahkan proses redirect login ke package IAM
        return app(SsoLoginRedirectController::class)($request);
    })->name('login');
} else {
    // Mode Lokal (Fallback)
    Route::get('/', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/', [AuthController::class, 'login'])->name('login.post');
}

// --- 2. Middleware & Rute Terproteksi ---
$authMiddleware = config('iam.enabled') ? 'iam.auth:web' : 'auth';

Route::middleware($authMiddleware)->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    });

    // --- 3. Rute Logout Global ---
    if (config('iam.enabled')) {
        Route::post('/logout', LogoutController::class)->name('logout');
    } else {
        Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    }
});
```

### 4. Konfigurasi Environment (`.env`)

Tambahkan konfigurasi *environment* terlengkap berikut pada file `.env` aplikasi klien Anda:

```env
# =============================================================================
# Identity & Access Management / SSO
# =============================================================================

# true  = gunakan IAM/SSO authentication
# false = gunakan custom Filament login dengan NIP/password
USE_SSO=true
IAM_ENABLED=true


# =============================================================================
# IAM Server
# =============================================================================

IAM_HOST=http://127.0.0.1
IAM_BASE_URL=${IAM_HOST}
IAM_BACKCHANNEL=http://127.0.0.1
IAM_APP_KEY=YOUR_APP_KEY_DARI_DASHBOARD


# =============================================================================
# IAM Endpoints
# =============================================================================

IAM_VERIFY_ENDPOINT=${IAM_HOST}/api/sso/verify
IAM_USER_APPLICATIONS_ENDPOINT=${IAM_HOST}/api/users/applications/detail


# =============================================================================
# SSO Routes
# =============================================================================

IAM_LOGIN_ROUTE=/sso/login
IAM_CALLBACK_ROUTE=/sso/callback
IAM_DEFAULT_REDIRECT=/


# =============================================================================
# Laravel Guard & User Mapping
# =============================================================================

IAM_GUARD=web
IAM_USER_MODEL=App\Models\User
IAM_IDENTIFIER_FIELD=nip
IAM_UNIT_KERJA_MODEL=App\Models\UnitKerja


# =============================================================================
# Session & Token Storage
# =============================================================================

IAM_PRESERVE_SESSION_ID=true
IAM_STORE_TOKEN_IN_SESSION=true
IAM_SYNC_SESSION_LIFETIME=true

# Buffer dalam menit yang dikurangi dari TTL token.
# Contoh: token 60 menit - buffer 2 menit = session lifetime 58 menit.
IAM_SESSION_LIFETIME_BUFFER=2


# =============================================================================
# Role & User Synchronization
# =============================================================================

IAM_SYNC_ROLES=true
IAM_ROLE_GUARD_NAME=web
IAM_REQUIRE_ROLES=true
IAM_ALLOW_ROLELESS_SSO=false

# Sync mode:
# push = IAM mengirim role/user ke client, lalu client menerima data tersebut.
IAM_ROLE_SYNC_MODE=push
IAM_USER_SYNC_MODE=push

# Izinkan client membuat role baru dari payload IAM jika belum tersedia.
IAM_ROLE_SYNC_FROM_IAM_ALLOW_CREATE=true


# =============================================================================
# Backchannel Verification
# =============================================================================

IAM_BACKCHANNEL_METHOD=jwt
IAM_BACKCHANNEL_VERIFY=true

# Shared secret untuk backchannel verification.
SSO_SECRET=lms_secret_key_123


# =============================================================================
# JWT Configuration
# =============================================================================

IAM_ISSUER=${IAM_HOST}
IAM_JWT_SECRET=base64:G8w0qytVP8V+Mml5pYqm90R9m7AdfltGk1GCXMGq2qw=
IAM_JWT_LEEWAY=60


# =============================================================================
# Token Verification
# =============================================================================

# Verifikasi JWT pada setiap request untuk memastikan token lokal masih valid.
IAM_VERIFY_EACH_REQUEST=true

# Verifikasi token ke IAM server agar token revoked/expired ikut terdeteksi.
IAM_VERIFY_REMOTE_EACH_REQUEST=true

# Attach middleware verifikasi otomatis ke web routes.
IAM_ATTACH_VERIFY_MIDDLEWARE=true
```

### Penjelasan Variabel Konfigurasi

Berikut penjelasan singkat mengenai kegunaan grup variabel di atas:

*   **IAM / SSO (`USE_SSO`, `IAM_ENABLED`)**: Mengaktifkan atau menonaktifkan fitur otentikasi SSO NexaID. Jika `false`, aplikasi dapat *fallback* ke metode login lokal/bawaannya.
*   **IAM Server & Endpoints**: Mendefinisikan URL utama server NexaID (`IAM_HOST`), *App Key* untuk verifikasi aplikasi, serta letak *endpoint API* untuk sinkronisasi token dan data pengguna.
*   **SSO Routes**: Menentukan URL *routing* lokal di aplikasi klien Anda untuk menangani pengalihan ke halaman login (`IAM_LOGIN_ROUTE`) dan menerima kembali balasan autentikasi dari server (`IAM_CALLBACK_ROUTE`).
*   **Laravel Guard & User Mapping**: Memetakan data dari NexaID ke struktur *database* lokal klien (contohnya memetakan pengguna ke `App\Models\User` dan mencari kecocokan berdasarkan kolom `nip`).
*   **Session & Token Storage**: Menyelaraskan usia *session* lokal klien dengan masa aktif (TTL) token dari NexaID agar pengguna tidak dipaksa keluar/logout sebelum waktunya.
*   **Role & User Synchronization**: Mengaktifkan mode tarik (*push/pull*) di mana seluruh *role*, profil pengguna, hingga unit kerja yang diatur di NexaID secara otomatis tersinkronisasi/diperbarui di *database* klien.
*   **Backchannel Verification & JWT**: Melindungi pertukaran data antara server dengan mengatur *shared secret* (`SSO_SECRET`) dan keamanan dekripsi (melalui `IAM_JWT_SECRET`), serta memberikan toleransi waktu keterlambatan respons (`IAM_JWT_LEEWAY`).
*   **Token Verification**: Menjaga aplikasi tetap aman dengan mengecek keabsahan token di setiap *request* yang dilakukan pengguna, serta memastikan akun tersebut belum di-*revoke* / ditangguhkan dari server pusat NexaID.

Setelah kelima langkah di atas diselesaikan, aplikasi klien Anda telah sepenuhnya terintegrasi dengan ekosistem SSO NexaID.

---

## Verify Integration

Lakukan pengujian berikut untuk memastikan integrasi berjalan lancar:
1. Akses halaman *protected* di aplikasi klien Anda.
2. Anda akan otomatis diarahkan (*redirect*) ke halaman login NexaID.
3. Login menggunakan akun NexaID.
4. Anda akan diarahkan kembali ke aplikasi klien.
5. Sesi berhasil dibuat dan Anda kini dapat mengakses aplikasi klien!

---

## Next Steps

Setelah sukses menjalankan NexaID, kami menyarankan Anda melanjutkan ke bagian berikut:

- [Core Concepts](./core-concepts) — Memahami arsitektur dasar, tenant, dan pengguna.
- [Organizations](./organizations) — Mengelola departemen dan struktur organisasi.
- [Single Sign-On](./single-sign-on) — Detail teknis alur OIDC / SSO NexaID.
- [Audit Logs](./audit-logs) — Monitoring aktivitas autentikasi.