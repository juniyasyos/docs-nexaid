import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NexaID Docs',
  description: 'Documentation for NexaID Identity and Access Management platform.',

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'SSO', link: '/sso/' },
      { text: 'IAM', link: '/iam/' },
      { text: 'Applications', link: '/applications/' },
      { text: 'API', link: '/api/' },
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
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Overview', link: '/guide/' },
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Core Concepts', link: '/guide/core-concepts' }
          ]
        }
      ],

      '/sso/': [
        {
          text: 'Single Sign-On',
          items: [
            { text: 'Overview', link: '/sso/' },
            { text: 'SSO Flow', link: '/sso/flow' },
            { text: 'Login', link: '/sso/login' },
            { text: 'Callback', link: '/sso/callback' },
            { text: 'Logout', link: '/sso/logout' }
          ]
        }
      ],

      '/iam/': [
        {
          text: 'Identity & Access Management',
          items: [
            { text: 'Overview', link: '/iam/' },
            { text: 'Users', link: '/iam/users' },
            { text: 'Roles', link: '/iam/roles' },
            { text: 'Permissions', link: '/iam/permissions' },
            { text: 'Access Profiles', link: '/iam/access-profiles' },
            { text: 'Departments', link: '/iam/departments' }
          ]
        }
      ],

      '/applications/': [
        {
          text: 'Applications',
          items: [
            { text: 'Overview', link: '/applications/' },
            { text: 'App Registration', link: '/applications/app-registration' },
            { text: 'App Key', link: '/applications/app-key' },
            { text: 'Client Configuration', link: '/applications/client-configuration' },
            { text: 'Integration Checklist', link: '/applications/integration-checklist' }
          ]
        }
      ],

      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Authentication', link: '/api/authentication' },
            { text: 'SSO Endpoints', link: '/api/sso-endpoints' },
            { text: 'User Endpoints', link: '/api/user-endpoints' },
            { text: 'Error Responses', link: '/api/error-responses' }
          ]
        }
      ],

      '/deployment/': [
        {
          text: 'Deployment',
          items: [
            { text: 'Overview', link: '/deployment/' },
            { text: 'Environment', link: '/deployment/environment' },
            { text: 'Docker', link: '/deployment/docker' },
            { text: 'Production', link: '/deployment/production' }
          ]
        }
      ],

      '/troubleshooting/': [
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Overview', link: '/troubleshooting/' },
            { text: 'SSO Errors', link: '/troubleshooting/sso-errors' },
            { text: 'Token Errors', link: '/troubleshooting/token-errors' },
            { text: 'Common Issues', link: '/troubleshooting/common-issues' }
          ]
        }
      ],

      '/versions/': [
        {
          text: 'Versions',
          items: [
            { text: 'All Versions', link: '/versions/' },
            { text: 'v1.1 - Current', link: '/versions/v1.1' },
            { text: 'v1.0 - Legacy', link: '/versions/v1.0' }
          ]
        }
      ]
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
