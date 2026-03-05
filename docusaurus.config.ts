import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Zetkin Developer Portal',
  tagline: 'Make participation simple for everyone',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://developer.zetkin.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zetkin', // Usually your GitHub org/user name.
  projectName: 'developer.zetkin.org', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'reference',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/zetkin/developer.zetkin.org/tree/master',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi',
      {
        id: 'openapi',
        path: './api/openapi.json',
        routeBasePath: 'api',
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi'],

  themeConfig: {
    image: 'img/cover.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Zetkin',
      logo: {
        alt: 'Zetkin Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          position: 'left',
          label: 'Reference',
        },
        {
          href: '/api',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/zetkin/app.zetkin.org',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/zetkin-foundation',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/zetkinfoundation',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/zetkinfoundation/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@zetkinfoundation',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zetkin/app.zetkin.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zetkin Foundation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
