const { defineConfig, globalIgnores } = require('eslint/config');

const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');

const { fixupConfigRules } = require('@eslint/compat');

const react = require('eslint-plugin-react');
const importPlugin = require('eslint-plugin-import');
const noSwitchStatements = require('eslint-plugin-no-switch-statements');
const noOnlyTests = require('eslint-plugin-no-only-tests');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },

      ecmaVersion: 8,
      parserOptions: {},
    },

    extends: compat.extends('eslint:recommended', 'prettier'),

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
      },
    },
  },
  globalIgnores(['node_modules/*', '.out/*', '!**/.prettierrc.js', 'docs/api/**/paths/**/*']),
  {
    files: ['**/*.ts', '**/*.tsx', 'src/**/*.js'],

    languageOptions: {
      parser: tsParser,

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    extends: fixupConfigRules(
      compat.extends(
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ),
    ),

    plugins: {
      react: react,
      import: importPlugin,
      'no-switch-statements': noSwitchStatements,
      'no-only-tests': noOnlyTests,
    },

    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
        },
      ],

      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            memberTypes: 'never',
            order: 'alphabetically',
          },

          interfaces: ['signature', 'method', 'constructor', 'field'],
        },
      ],

      curly: 'error',

      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'ignore',
            orderImportKind: 'ignore',
          },

          groups: [['external', 'builtin']],
          'newlines-between': 'always',
        },
      ],

      'jsx-a11y/anchor-is-valid': 'off',
      'no-console': 'error',
      'no-switch-statements/no-switch': 'error',
      'prefer-const': ['error', {}],

      'react/jsx-handler-names': [
        'error',
        {
          eventHandlerPrefix: 'on',
          eventHandlerPropPrefix: 'on',
        },
      ],

      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-useless-fragment': 'error',

      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          reservedFirst: true,
        },
      ],

      'react/no-danger': 'error',
      'react/no-deprecated': 'error',
      'react/no-typos': 'error',
      'react/no-unknown-property': 'error',

      'react/no-unsafe': [
        'error',
        {
          checkAliases: true,
        },
      ],

      'react/no-unused-prop-types': 'error',
      'react/prefer-stateless-function': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'off',

      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],

      'sort-keys': 'error',
      'sort-vars': 'error',
      'no-only-tests/no-only-tests': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', 'src/**/*.js'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@/integrations/**'],
        },
      ],
    },
  },
  {
    files: ['src/integrations/**'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
]);
