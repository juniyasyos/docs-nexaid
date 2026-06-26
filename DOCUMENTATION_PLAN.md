# Technical Documentation Plan — Guide

## Objective

Fase ini berfokus pada penyusunan dokumentasi **Guide** sebagai jalur pembelajaran utama (Learning Path) bagi Administrator dan Developer yang baru menggunakan NexaID.

Target utama fase ini adalah menghasilkan dokumentasi yang:

* konsisten
* mudah dipelajari secara bertahap
* berorientasi implementasi
* siap menjadi fondasi dokumentasi fitur dan API pada fase berikutnya

> **Scope fase ini hanya mencakup folder `docs/guide/`.**
>
> Dokumentasi API, SDK, Reference, maupun Feature Documentation tidak termasuk dalam fase ini.

---

# Deliverables

Pada akhir fase ini harus tersedia:

* [ ] Sidebar Guide telah terstruktur.
* [ ] Seluruh halaman Guide telah dibuat.
* [ ] Seluruh halaman memiliki frontmatter.
* [ ] Seluruh halaman memiliki navigation next/prev.
* [ ] Semua internal link tervalidasi.
* [ ] Semua diagram Mermaid berhasil dirender.
* [ ] Tidak terdapat placeholder kosong.
* [ ] Build VitePress berhasil tanpa warning.

---

# Documentation Standard

Seluruh halaman Guide wajib mengikuti struktur berikut.

```text
Title

Overview

Prerequisites (opsional)

Concept

Implementation

Best Practices

Common Mistakes

Next Step
```

Setiap halaman minimal memiliki:

* Ringkasan singkat
* Diagram (jika diperlukan)
* Contoh implementasi
* Catatan keamanan (apabila relevan)
* Referensi menuju halaman berikutnya

---

# Guide Roadmap

| Status | Document            | Priority | Diagram | Example |
| ------ | ------------------- | -------- | ------- | ------- |
| ⬜      | Introduction        | High     | ✅       | ❌       |
| ⬜      | Quick Start         | Critical | ❌       | ✅       |
| ⬜      | Core Concepts       | High     | ✅       | ❌       |
| ⬜      | Organizations       | High     | ✅       | ✅       |
| ⬜      | Users               | High     | ❌       | ✅       |
| ⬜      | Jobs                | Medium   | ❌       | ✅       |
| ⬜      | Access Profiles     | High     | ✅       | ✅       |
| ⬜      | Roles & Permissions | Critical | ✅       | ✅       |
| ⬜      | Applications        | Critical | ✅       | ✅       |
| ⬜      | Single Sign-On      | Critical | ✅       | ✅       |
| ⬜      | Sessions            | High     | ✅       | ✅       |
| ⬜      | Audit Logs          | Medium   | ❌       | ✅       |

---

# Technical Scope

## 1. Introduction

**Output**

* Platform overview
* Value proposition
* High Level Architecture
* Terminology

Checklist

* [ ] Overview
* [ ] Architecture diagram
* [ ] Feature summary
* [ ] Learning path

---

## 2. Quick Start

**Output**

Developer dapat menjalankan NexaID pertama kali.

Checklist

* [ ] Requirements
* [ ] Installation
* [ ] Environment
* [ ] First login
* [ ] Dashboard overview

---

## 3. Core Concepts

Checklist

* [ ] Identity
* [ ] Authentication
* [ ] Authorization
* [ ] User
* [ ] Organization
* [ ] Application
* [ ] Role
* [ ] Permission
* [ ] Access Profile
* [ ] Session
* [ ] Token

---

## 4. Organizations

Checklist

* [ ] Organization model
* [ ] Department
* [ ] Unit Kerja
* [ ] Relationship
* [ ] Example hierarchy

---

## 5. Users

Checklist

* [ ] User lifecycle
* [ ] User status
* [ ] Identity attributes
* [ ] Import
* [ ] Best practices

---

## 6. Jobs

Checklist

* [ ] Job Position
* [ ] Assignment
* [ ] Organization mapping
* [ ] Examples

---

## 7. Access Profiles

Checklist

* [ ] Concept
* [ ] Components
* [ ] Assignment Flow
* [ ] Use cases

---

## 8. Roles & Permissions

Checklist

* [ ] RBAC
* [ ] Permission inheritance
* [ ] Role assignment
* [ ] Security recommendations

---

## 9. Applications

Checklist

* [ ] Register application
* [ ] Client credentials
* [ ] Redirect URI
* [ ] Supported application types

---

## 10. Single Sign-On

Checklist

* [ ] OAuth2 overview
* [ ] Authorization Code Flow
* [ ] PKCE (jika mendukung)
* [ ] Sequence Diagram
* [ ] Token Exchange
* [ ] Logout Flow
* [ ] Security Best Practices

---

## 11. Sessions

Checklist

* [ ] Session lifecycle
* [ ] Session expiration
* [ ] Single Logout
* [ ] Multi-device session

---

## 12. Audit Logs

Checklist

* [ ] Audit events
* [ ] Security events
* [ ] Search
* [ ] Filtering
* [ ] Compliance

---

# Dependencies

```text
Introduction
      │
      ▼
Quick Start
      │
      ▼
Core Concepts
      │
      ├─────────────┐
      ▼             ▼
Organizations    Applications
      │             │
      ▼             ▼
Users         Roles & Permissions
      │             │
      └──────┬──────┘
             ▼
      Access Profiles
             ▼
      Single Sign-On
             ▼
         Sessions
             ▼
        Audit Logs
```

---

# Phase Progress

## Infrastructure

* [ ] Sidebar
* [ ] Folder structure
* [ ] Markdown files
* [ ] Navigation
* [ ] Mermaid support

## Documentation

* [ ] Introduction
* [ ] Quick Start
* [ ] Core Concepts
* [ ] Organizations
* [ ] Users
* [ ] Jobs
* [ ] Access Profiles
* [ ] Roles
* [ ] Applications
* [ ] Single Sign-On
* [ ] Sessions
* [ ] Audit Logs

---

# Definition of Done

Fase Guide dianggap selesai apabila:

* [ ] Semua halaman tersedia.
* [ ] Tidak ada placeholder.
* [ ] Seluruh contoh telah diverifikasi.
* [ ] Semua diagram berhasil dirender.
* [ ] Semua tautan internal valid.
* [ ] Build VitePress berhasil.
* [ ] Struktur navigasi telah direview.
* [ ] Dokumentasi siap dipublikasikan.
