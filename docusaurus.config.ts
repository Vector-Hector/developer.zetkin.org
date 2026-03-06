import {themes as prismThemes} from 'prism-react-renderer';
import type {Config, PluginModule} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';
import proxyPlugin from "./plugins/proxy-plugin";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const isDev = process.env.NODE_ENV === 'development';

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
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/zetkin/developer.zetkin.org/tree/master',
          docItemComponent: '@theme/ApiItem',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          'core-v1': {
            proxy: isDev ? 'http://localhost:3000/api' : null,
            specPath: 'api/v1/openapi.json',
            outputDir: 'docs/api/v1/paths',
            showInfoPage: false,
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'info',
            },
          },
          'core-v2': {
            specPath: 'api/v2/openapi.json',
            outputDir: 'docs/api/v2/paths',
            showInfoPage: false,
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'info',
            },
          },
        },
      },
    ],
    proxyPlugin as PluginModule
  ],

  themes: ['docusaurus-theme-openapi-docs'],

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
          position: 'left',
          label: 'SDK',
          href: '/docs/sdk'
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'API',
          items: [{
            label: 'Core v1',
            to: '/docs/api/v1/getting-started'
          }, {
            label: 'Core v2',
            to: '/docs/api/v2/getting-started'
          }]
        },
        {
          type: 'docSidebar',
          sidebarId: 'contributingSidebar',
          position: 'right',
          label: 'Contributing',
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
    languageTabs: [
      {
        language: "javascript",
        highlight: "javascript",
        logoClass: "javascript",
        variant: "fetch",
      },
      {
        language: "nodejs",
        highlight: "javascript",
        logoClass: "nodejs",
        variant: "axios",
      },
      {
        language: "python",
        highlight: "python",
        logoClass: "python",
        variant: "requests",
      },
      {
        language: "curl",
        highlight: "bash",
        logoClass: "bash",
      },
      {
        language: "go",
        highlight: "go",
        logoClass: "go",
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
