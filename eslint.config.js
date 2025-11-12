const js = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const prettierConfig = require('eslint-config-prettier');
const pluginImport = require('eslint-plugin-import');
const pluginReact = require('eslint-plugin-react');
const globals = require('globals');
const tseslint = require('typescript-eslint');

const tsconfigRootDir = __dirname;
const browserGlobals = globals.browser;
const nodeGlobals = globals.node;

module.exports = defineConfig([
  js.configs.recommended,
  prettierConfig,
  {
    ignores: [
      '**/node_modules/**',
      '**/.tanstack/**',
      '**/.turbo/**',
      '**/dist/**',
      '**/build/**',
      '**/storybook-static/**',
      '**/coverage/**',
      '**/index.html',
      '**/README.md',
      '**/routeTree.gen.ts',
      '**/reportWebVitals.ts',
      'eslint.config.js',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { import: pluginImport },
    languageOptions: {
      globals: browserGlobals,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'antd',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '~/shared/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '~/widgets/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '~/features/**',
              group: 'external',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    files: ['**/*.config.{js,cjs,mjs,ts,mts,cts}'],
    languageOptions: {
      globals: nodeGlobals,
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir,
      },
    },
  },
]);
