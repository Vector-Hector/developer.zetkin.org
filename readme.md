# Zetkin Developer Portal

Developer documentation portal for the Zetkin organizing platform. Built with [Docusaurus](https://docusaurus.io/) v3
and [docusaurus-plugin-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-plugin-openapi-docs).

## Prerequisites

- Node.js >= 20

## Getting started

```shell
git clone https://github.com/zetkin/developer.zetkin.org
cd developer.zetkin.org
npm install
```

The OpenAPI specs live in `static/spec/v1/openapi.json` and `static/spec/v2/openapi.json`. To generate the API docs
pages from them:

```shell
npm run openapi-build
```

Start the development server:

```shell
npm run start
```

For production build:

```shell
npm run build
npm run serve
```

## Available scripts

| Script                  | Description                            |
|-------------------------|----------------------------------------|
| `npm run start`         | Start development server               |
| `npm run build`         | Build for production                   |
| `npm run serve`         | Serve production build locally         |
| `npm run openapi-build` | Regenerate API docs from OpenAPI specs |
| `npm run lint`          | Run ESLint and Prettier checks         |
| `npm run check-types`   | Run TypeScript type checking           |

## Project structure

```
developer.zetkin.org/
├── docs/                  # MDX documentation
│   ├── api/               # API docs (generated paths + hand-written guides)
│   ├── contributing/      # Contribution guides
│   └── sdk/               # SDK documentation
├── static/
│   └── spec/              # OpenAPI specifications
│       ├── v1/openapi.json
│       └── v2/openapi.json
├── src/                   # Custom React components and pages
├── plugins/               # Custom Docusaurus plugins
├── sidebars.ts            # Sidebar configuration
└── docusaurus.config.ts   # Docusaurus configuration
```

## CI

GitHub Actions runs linting and TypeScript checks on every push and pull request. See `.github/workflows/`.
