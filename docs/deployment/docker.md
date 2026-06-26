---
title: Deployment Menggunakan Docker
description: Mengisolasi arsitektur NexAID dalam jaringan kontainer modern
---

# Deployment via Docker (Kontainer)

Peluncuran via arsitektur per-kontainer (*Containerized*) mengandalkan **Docker** dan **Docker Compose** adalah langkah yang sangat kami anjurkan karena menghilangkan seluruh faktor "Jalan kok di komputer saya, tapi error di *Server* (It works on my machine)".

## Menyiapkan `docker-compose.yml`

Minimal, NexaID membutuhkan 4 (empat) susunan *services* virtual untuk berjalan optimal:
1. `app` — Menjalankan mesin *Backend Server* utama.
2. `db` — Menjalankan instansi *Database* (MySQL atau Postgres).
3. `redis` — Menjalankan memori singgah yang *hyper-fast* (Redis).
4. `worker` — Menjalankan mesin pemrosesan komunikasi antrian sinkronisasi belakang layar (Worker Queue).

**Contoh file (Minimalis):**
```yaml
version: '3.8'
services:
  app:
    image: nexaid-core:latest
    ports:
      - "8080:80"
    environment:
      - DB_HOST=db
      - REDIS_HOST=redis
      # Jangan lupa set up Environment Variable Anda di file terpisah!
    env_file:
      - .env
    depends_on:
      - db
      - redis

  db:
    image: mysql:8.0
    environment:
      - MYSQL_DATABASE=nexaid
      - MYSQL_ROOT_PASSWORD=rahasia
    volumes:
      - nexaid_db_data:/var/lib/mysql

  redis:
    image: redis:alpine
    
  worker:
    image: nexaid-core:latest
    command: ["php", "artisan", "queue:work"] # Contoh perintah nyalakan worker
    env_file:
      - .env
    depends_on:
      - redis

volumes:
  nexaid_db_data:
```

## Perintah Dasar Manajemen (Docker Compose)

Jika Anda belum mengerti cara memulai layanan:
```bash
# Untuk menjalankan sekaligus dan membiarkannya berjalan di latar (daemon)
docker-compose up -d

# Jika Anda ingin mengecek error, periksa output mesin
docker-compose logs -f

# Untuk mematikan
docker-compose down
```

::: tip Pastikan Koneksi
Walau diatur rapi oleh Docker, pastikan bahwa konektivitas Web (Port 80/443 luar) dari alamat publik dapat menembus port `8080` (contoh di atas) dengan perantara semacam *Reverse Proxy* (Nginx) tambahan (Cek halaman [Production](./production)).
:::
