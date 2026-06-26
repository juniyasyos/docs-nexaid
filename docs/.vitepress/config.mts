import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
  base: '/docs-nexaid/',
  title: 'NexaID Docs',
  description: 'Documentation for NexaID Identity and Access Management platform.',
  head: [['link', { rel: 'icon', href: '/docs-nexaid/logo.png' }]],
  appearance: true,

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',
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
      '/guide/': [{
        text: 'Guideline',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Quick Start', link: '/guide/quick-start' },
          { text: 'Core Concepts', link: '/guide/core-concepts' },
          { text: 'Organizations', link: '/guide/organizations' },
          { text: 'Users', link: '/guide/users' },
          { text: 'Access Profiles', link: '/guide/access-profiles' },
          { text: 'Roles', link: '/guide/roles' },
          { text: 'Applications', link: '/guide/applications' },
          { text: 'Single Sign-On', link: '/guide/single-sign-on' },
          { text: 'Sessions', link: '/guide/sessions' },
          { text: 'Audit Logs', link: '/guide/audit-logs' }
        ]
      }],

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
