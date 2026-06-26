import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
  base: '/docs-nexaid/',
  title: 'NexaID Docs',
  description: 'Documentation for NexaID Identity and Access Management platform.',
  head: [['link', { rel: 'icon', href: '/docs-nexaid/logo.jpg' }]],
  appearance: true,

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.jpg',
    outline: false,

    nav: [
      { text: 'Docs', link: '/guide/', activeMatch: '^/(guide|sso|iam|applications|deployment|troubleshooting)/' },
      { text: 'API Reference', link: '/api/', activeMatch: '^/api/' },
      {
        text: 'v1.1',
        items: [
          { text: 'v1.1 - Current', link: '/versions/v1.1' },
          { text: 'v1.0 - Legacy', link: '/versions/v1.0' },
          { text: 'All Versions', link: '/versions/' }
        ]
      }
    ],

    sidebar: {
      // Unified sidebar — muncul di semua seksi docs
      '/guide/': [{ text: 'Getting Started', collapsed: false, items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Quick Start', link: '/guide/quick-start' },
        { text: 'Core Concepts', link: '/guide/core-concepts' }
      ]}, { text: 'Single Sign-On', collapsed: false, items: [
        { text: 'Overview', link: '/sso/' },
        { text: 'SSO Flow', link: '/sso/flow' },
        { text: 'Login', link: '/sso/login' },
        { text: 'Callback', link: '/sso/callback' },
        { text: 'Logout', link: '/sso/logout' }
      ]}, { text: 'Identity & Access Management', collapsed: false, items: [
        { text: 'Overview', link: '/iam/' },
        { text: 'Users', link: '/iam/users' },
        { text: 'Roles', link: '/iam/roles' },
        { text: 'Permissions', link: '/iam/permissions' },
        { text: 'Access Profiles', link: '/iam/access-profiles' },
        { text: 'Departments', link: '/iam/departments' }
      ]}, { text: 'Applications', collapsed: false, items: [
        { text: 'Overview', link: '/applications/' },
        { text: 'App Registration', link: '/applications/app-registration' },
        { text: 'App Key', link: '/applications/app-key' },
        { text: 'Client Configuration', link: '/applications/client-configuration' },
        { text: 'Integration Checklist', link: '/applications/integration-checklist' }
      ]}, { text: 'Deployment', collapsed: false, items: [
        { text: 'Overview', link: '/deployment/' },
        { text: 'Environment', link: '/deployment/environment' },
        { text: 'Docker', link: '/deployment/docker' },
        { text: 'Production', link: '/deployment/production' }
      ]}, { text: 'Troubleshooting', collapsed: false, items: [
        { text: 'Overview', link: '/troubleshooting/' },
        { text: 'SSO Errors', link: '/troubleshooting/sso-errors' },
        { text: 'Token Errors', link: '/troubleshooting/token-errors' },
        { text: 'Common Issues', link: '/troubleshooting/common-issues' }
      ]}],

      '/sso/': [{ text: 'Getting Started', collapsed: false, items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Quick Start', link: '/guide/quick-start' },
        { text: 'Core Concepts', link: '/guide/core-concepts' }
      ]}, { text: 'Single Sign-On', collapsed: false, items: [
        { text: 'Overview', link: '/sso/' },
        { text: 'SSO Flow', link: '/sso/flow' },
        { text: 'Login', link: '/sso/login' },
        { text: 'Callback', link: '/sso/callback' },
        { text: 'Logout', link: '/sso/logout' }
      ]}, { text: 'Identity & Access Management', collapsed: false, items: [
        { text: 'Overview', link: '/iam/' },
        { text: 'Users', link: '/iam/users' },
        { text: 'Roles', link: '/iam/roles' },
        { text: 'Permissions', link: '/iam/permissions' },
        { text: 'Access Profiles', link: '/iam/access-profiles' },
        { text: 'Departments', link: '/iam/departments' }
      ]}, { text: 'Applications', collapsed: false, items: [
        { text: 'Overview', link: '/applications/' },
        { text: 'App Registration', link: '/applications/app-registration' },
        { text: 'App Key', link: '/applications/app-key' },
        { text: 'Client Configuration', link: '/applications/client-configuration' },
        { text: 'Integration Checklist', link: '/applications/integration-checklist' }
      ]}, { text: 'Deployment', collapsed: false, items: [
        { text: 'Overview', link: '/deployment/' },
        { text: 'Environment', link: '/deployment/environment' },
        { text: 'Docker', link: '/deployment/docker' },
        { text: 'Production', link: '/deployment/production' }
      ]}, { text: 'Troubleshooting', collapsed: false, items: [
        { text: 'Overview', link: '/troubleshooting/' },
        { text: 'SSO Errors', link: '/troubleshooting/sso-errors' },
        { text: 'Token Errors', link: '/troubleshooting/token-errors' },
        { text: 'Common Issues', link: '/troubleshooting/common-issues' }
      ]}],

      '/iam/': [{ text: 'Getting Started', collapsed: false, items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Quick Start', link: '/guide/quick-start' },
        { text: 'Core Concepts', link: '/guide/core-concepts' }
      ]}, { text: 'Single Sign-On', collapsed: false, items: [
        { text: 'Overview', link: '/sso/' },
        { text: 'SSO Flow', link: '/sso/flow' },
        { text: 'Login', link: '/sso/login' },
        { text: 'Callback', link: '/sso/callback' },
        { text: 'Logout', link: '/sso/logout' }
      ]}, { text: 'Identity & Access Management', collapsed: false, items: [
        { text: 'Overview', link: '/iam/' },
        { text: 'Users', link: '/iam/users' },
        { text: 'Roles', link: '/iam/roles' },
        { text: 'Permissions', link: '/iam/permissions' },
        { text: 'Access Profiles', link: '/iam/access-profiles' },
        { text: 'Departments', link: '/iam/departments' }
      ]}, { text: 'Applications', collapsed: false, items: [
        { text: 'Overview', link: '/applications/' },
        { text: 'App Registration', link: '/applications/app-registration' },
        { text: 'App Key', link: '/applications/app-key' },
        { text: 'Client Configuration', link: '/applications/client-configuration' },
        { text: 'Integration Checklist', link: '/applications/integration-checklist' }
      ]}, { text: 'Deployment', collapsed: false, items: [
        { text: 'Overview', link: '/deployment/' },
        { text: 'Environment', link: '/deployment/environment' },
        { text: 'Docker', link: '/deployment/docker' },
        { text: 'Production', link: '/deployment/production' }
      ]}, { text: 'Troubleshooting', collapsed: false, items: [
        { text: 'Overview', link: '/troubleshooting/' },
        { text: 'SSO Errors', link: '/troubleshooting/sso-errors' },
        { text: 'Token Errors', link: '/troubleshooting/token-errors' },
        { text: 'Common Issues', link: '/troubleshooting/common-issues' }
      ]}],

      '/applications/': [{ text: 'Getting Started', collapsed: false, items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Quick Start', link: '/guide/quick-start' },
        { text: 'Core Concepts', link: '/guide/core-concepts' }
      ]}, { text: 'Single Sign-On', collapsed: false, items: [
        { text: 'Overview', link: '/sso/' },
        { text: 'SSO Flow', link: '/sso/flow' },
        { text: 'Login', link: '/sso/login' },
        { text: 'Callback', link: '/sso/callback' },
        { text: 'Logout', link: '/sso/logout' }
      ]}, { text: 'Identity & Access Management', collapsed: false, items: [
        { text: 'Overview', link: '/iam/' },
        { text: 'Users', link: '/iam/users' },
        { text: 'Roles', link: '/iam/roles' },
        { text: 'Permissions', link: '/iam/permissions' },
        { text: 'Access Profiles', link: '/iam/access-profiles' },
        { text: 'Departments', link: '/iam/departments' }
      ]}, { text: 'Applications', collapsed: false, items: [
        { text: 'Overview', link: '/applications/' },
        { text: 'App Registration', link: '/applications/app-registration' },
        { text: 'App Key', link: '/applications/app-key' },
        { text: 'Client Configuration', link: '/applications/client-configuration' },
        { text: 'Integration Checklist', link: '/applications/integration-checklist' }
      ]}, { text: 'Deployment', collapsed: false, items: [
        { text: 'Overview', link: '/deployment/' },
        { text: 'Environment', link: '/deployment/environment' },
        { text: 'Docker', link: '/deployment/docker' },
        { text: 'Production', link: '/deployment/production' }
      ]}, { text: 'Troubleshooting', collapsed: false, items: [
        { text: 'Overview', link: '/troubleshooting/' },
        { text: 'SSO Errors', link: '/troubleshooting/sso-errors' },
        { text: 'Token Errors', link: '/troubleshooting/token-errors' },
        { text: 'Common Issues', link: '/troubleshooting/common-issues' }
      ]}],

      '/deployment/': [{ text: 'Getting Started', collapsed: false, items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Quick Start', link: '/guide/quick-start' },
        { text: 'Core Concepts', link: '/guide/core-concepts' }
      ]}, { text: 'Single Sign-On', collapsed: false, items: [
        { text: 'Overview', link: '/sso/' },
        { text: 'SSO Flow', link: '/sso/flow' },
        { text: 'Login', link: '/sso/login' },
        { text: 'Callback', link: '/sso/callback' },
        { text: 'Logout', link: '/sso/logout' }
      ]}, { text: 'Identity & Access Management', collapsed: false, items: [
        { text: 'Overview', link: '/iam/' },
        { text: 'Users', link: '/iam/users' },
        { text: 'Roles', link: '/iam/roles' },
        { text: 'Permissions', link: '/iam/permissions' },
        { text: 'Access Profiles', link: '/iam/access-profiles' },
        { text: 'Departments', link: '/iam/departments' }
      ]}, { text: 'Applications', collapsed: false, items: [
        { text: 'Overview', link: '/applications/' },
        { text: 'App Registration', link: '/applications/app-registration' },
        { text: 'App Key', link: '/applications/app-key' },
        { text: 'Client Configuration', link: '/applications/client-configuration' },
        { text: 'Integration Checklist', link: '/applications/integration-checklist' }
      ]}, { text: 'Deployment', collapsed: false, items: [
        { text: 'Overview', link: '/deployment/' },
        { text: 'Environment', link: '/deployment/environment' },
        { text: 'Docker', link: '/deployment/docker' },
        { text: 'Production', link: '/deployment/production' }
      ]}, { text: 'Troubleshooting', collapsed: false, items: [
        { text: 'Overview', link: '/troubleshooting/' },
        { text: 'SSO Errors', link: '/troubleshooting/sso-errors' },
        { text: 'Token Errors', link: '/troubleshooting/token-errors' },
        { text: 'Common Issues', link: '/troubleshooting/common-issues' }
      ]}],

      '/troubleshooting/': [{ text: 'Getting Started', collapsed: false, items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Quick Start', link: '/guide/quick-start' },
        { text: 'Core Concepts', link: '/guide/core-concepts' }
      ]}, { text: 'Single Sign-On', collapsed: false, items: [
        { text: 'Overview', link: '/sso/' },
        { text: 'SSO Flow', link: '/sso/flow' },
        { text: 'Login', link: '/sso/login' },
        { text: 'Callback', link: '/sso/callback' },
        { text: 'Logout', link: '/sso/logout' }
      ]}, { text: 'Identity & Access Management', collapsed: false, items: [
        { text: 'Overview', link: '/iam/' },
        { text: 'Users', link: '/iam/users' },
        { text: 'Roles', link: '/iam/roles' },
        { text: 'Permissions', link: '/iam/permissions' },
        { text: 'Access Profiles', link: '/iam/access-profiles' },
        { text: 'Departments', link: '/iam/departments' }
      ]}, { text: 'Applications', collapsed: false, items: [
        { text: 'Overview', link: '/applications/' },
        { text: 'App Registration', link: '/applications/app-registration' },
        { text: 'App Key', link: '/applications/app-key' },
        { text: 'Client Configuration', link: '/applications/client-configuration' },
        { text: 'Integration Checklist', link: '/applications/integration-checklist' }
      ]}, { text: 'Deployment', collapsed: false, items: [
        { text: 'Overview', link: '/deployment/' },
        { text: 'Environment', link: '/deployment/environment' },
        { text: 'Docker', link: '/deployment/docker' },
        { text: 'Production', link: '/deployment/production' }
      ]}, { text: 'Troubleshooting', collapsed: false, items: [
        { text: 'Overview', link: '/troubleshooting/' },
        { text: 'SSO Errors', link: '/troubleshooting/sso-errors' },
        { text: 'Token Errors', link: '/troubleshooting/token-errors' },
        { text: 'Common Issues', link: '/troubleshooting/common-issues' }
      ]}],

      '/api/': [{
        text: 'API Reference',
        items: [
          { text: 'Overview', link: '/api/' },
          { text: 'Authentication', link: '/api/authentication' },
          { text: 'SSO Endpoints', link: '/api/sso-endpoints' },
          { text: 'User Endpoints', link: '/api/user-endpoints' },
          { text: 'Error Responses', link: '/api/error-responses' }
        ]
      }],

      '/versions/': [{
        text: 'Versions',
        items: [
          { text: 'All Versions', link: '/versions/' },
          { text: 'v1.1 - Current', link: '/versions/v1.1' },
          { text: 'v1.0 - Legacy', link: '/versions/v1.0' }
        ]
      }]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/juniyasyos' }
    ],

    footer: {
      message: 'NexaID Documentation',
      copyright: 'Copyright © 2026'
    }
  }
})
)
