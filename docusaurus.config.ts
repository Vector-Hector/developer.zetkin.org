import { themes as prismThemes } from 'prism-react-renderer';
import type { Config, PluginModule } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import proxyPlugin from './plugins/proxy-plugin';

const isDev = process.env.NODE_ENV === 'development';

const config: Config = {
  baseUrl: '/',
  favicon: 'img/logo.svg',
  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  onBrokenLinks: 'throw',
  organizationName: 'zetkin',

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        config: {
          'core-v1': {
            outputDir: 'docs/api/v1/paths',
            proxy: isDev ? 'http://localhost:3000/api' : undefined,
            showInfoPage: false,
            sidebarOptions: {
              categoryLinkSource: 'info',
              groupPathsBy: 'tag',
            },
            specPath: 'api/v1/openapi.json',
          },
          'core-v2': {
            outputDir: 'docs/api/v2/paths',
            proxy: isDev ? 'http://localhost:3000/api2' : undefined,
            showInfoPage: false,
            sidebarOptions: {
              categoryLinkSource: 'info',
              groupPathsBy: 'tag',
            },
            specPath: 'api/v2/openapi.json',
          },
        },
        docsPluginId: 'classic',
        id: 'openapi',
      },
    ],
    proxyPlugin as PluginModule,
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          docItemComponent: '@theme/ApiItem',
          editUrl: 'https://github.com/zetkin/developer.zetkin.org/tree/master',
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  projectName: 'developer.zetkin.org',

  tagline: 'Make participation simple for everyone',

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Zetkin Foundation. Built with Docusaurus.`,
      links: [
        {
          items: [
            {
              href: 'https://www.linkedin.com/company/zetkin-foundation',
              label: 'LinkedIn',
            },
            {
              href: 'https://www.facebook.com/zetkinfoundation',
              label: 'Facebook',
            },
            {
              href: 'https://www.instagram.com/zetkinfoundation/',
              label: 'Instagram',
            },
            {
              href: 'https://www.youtube.com/@zetkinfoundation',
              label: 'YouTube',
            },
          ],
          title: 'Community',
        },
        {
          items: [
            {
              href: 'https://github.com/zetkin/app.zetkin.org',
              label: 'GitHub',
            },
          ],
          title: 'More',
        },
      ],
      style: 'dark',
    },
    image: 'img/cover.jpg',
    languageTabs: [
      {
        highlight: 'javascript',
        language: 'javascript',
        logoClass: 'javascript',
        variant: 'fetch',
      },
      {
        highlight: 'javascript',
        language: 'nodejs',
        logoClass: 'nodejs',
        variant: 'axios',
      },
      {
        highlight: 'python',
        language: 'python',
        logoClass: 'python',
        variant: 'requests',
      },
      {
        highlight: 'bash',
        language: 'curl',
        logoClass: 'bash',
      },
      {
        highlight: 'go',
        language: 'go',
        logoClass: 'go',
      },
    ],
    metadata: [
      {
        content:
          'Developer documentation for the Zetkin organizing platform. Includes API references, SDK guides, and integration tools for building with Zetkin.',
        name: 'description',
      },
      {
        content:
          'Zetkin, API, SDK, developer documentation, organizing platform, activism, campaign management',
        name: 'keywords',
      },
      {
        content: 'summary_large_image',
        name: 'twitter:card',
      },
      {
        content: 'Zetkin Developer Portal',
        name: 'twitter:title',
      },
      {
        content:
          'Developer documentation for the Zetkin organizing platform. Build integrations with our APIs and SDKs.',
        name: 'twitter:description',
      },
    ],
    navbar: {
      items: [
        {
          href: '/docs/sdk',
          label: 'SDK',
          position: 'left',
        },
        {
          items: [
            {
              label: 'Core v1',
              to: '/docs/api/v1/getting-started',
            },
            {
              label: 'Core v2',
              to: '/docs/api/v2/getting-started',
            },
          ],
          label: 'API',
          position: 'left',
          type: 'dropdown',
        },
        {
          label: 'Contributing',
          position: 'right',
          sidebarId: 'contributingSidebar',
          type: 'docSidebar',
        },
        {
          href: 'https://github.com/zetkin/app.zetkin.org',
          label: 'GitHub',
          position: 'right',
        },
      ],
      logo: {
        alt: 'Zetkin Logo',
        src: 'img/logo.svg',
      },
      title: 'Zetkin',
    },
    prism: {
      darkTheme: prismThemes.dracula,
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,

  themes: ['docusaurus-theme-openapi-docs'],

  title: 'Zetkin Developer Portal',

  url: 'https://developer.zetkin.org',
};

export default config;
