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

You'll need the API docs for Core v1 and Core v2. Place them under `api/v1/openapi.json` and `api/v2/openapi.json` 
respectively.

```shell
mkdir -p api/v1
mkdir -p api/v2
mv openapiCoreV1.json api/v1/openapi.json
mv openapiCoreV2.json api/v2/openapi.json
```

Generate api docs from your openapi specs:

```shell
npm run docusaurus gen-api-docs all
```

Run the development server:

```shell
npm run start
```
