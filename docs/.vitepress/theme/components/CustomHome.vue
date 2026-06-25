<template>
  <div class="custom-home">
    <div class="hero">
      <div class="glow-bg"></div>
      <h1 class="title">
        Nexa<span class="gradient-text">ID</span> Docs
      </h1>
      <p class="subtitle">
        Identity & Access Management Documentation
      </p>
      <p class="tagline">
        Dokumentasi penggunaan NexaID untuk SSO, user management, role, unit kerja, dan integrasi aplikasi.
      </p>
      
      <div class="action-buttons">
        <a href="/guide/" class="btn primary">Get Started</a>
        <a href="/sso/flow" class="btn secondary">View SSO Flow</a>
      </div>
    </div>

    <div class="features-grid">
      <div class="feature-card" v-for="feature in features" :key="feature.title">
        <a :href="feature.link" class="feature-link">
          <div class="icon-wrapper">
            <span class="icon">{{ feature.icon }}</span>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.details }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    icon: '🔐',
    title: 'SSO Integration',
    details: 'Panduan integrasi login, callback, token verification, dan logout antar aplikasi.',
    link: '/sso/'
  },
  {
    icon: '👥',
    title: 'IAM Management',
    details: 'Dokumentasi user, role, permission, access profile, dan department management.',
    link: '/iam/'
  },
  {
    icon: '📦',
    title: 'Application Registry',
    details: 'Panduan mendaftarkan aplikasi client, app key, redirect URL, dan konfigurasi akses.',
    link: '/applications/'
  },
  {
    icon: '⚡',
    title: 'API Reference',
    details: 'Dokumentasi endpoint, autentikasi, response format, dan error handling.',
    link: '/api/'
  }
]
</script>
