# Zetkin Developer Portal

Zetkin provides APIs, SDKs and platform tooling for building organizing technology. This repo is the developer portal
that documents how to interact with the Zetkin platform as a contributor.

## Running locally

To run the developer portal locally, clone the repository first and install dependencies:

```shell
git clone https://github.com/zetkin/developer.zetkin.org
cd developer.zetkin.org
npm install
```

You'll need the API docs for API v1 and API v2. Place them under `api/v1/openapi.json` and `api/v2/openapi.json`
respectively.

```shell
mkdir -p api/v1
mkdir -p api/v2
mv openapiV1.json api/v1/openapi.json
mv openapiV2.json api/v2/openapi.json
```

Generate api docs from your openapi specs:

```shell
npm run openapi-build
```

Run the development server:

```shell
npm run start
```
