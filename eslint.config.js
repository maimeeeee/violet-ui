import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import sveltePlugin from 'eslint-plugin-svelte'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import typescriptEslintParser from '@typescript-eslint/parser'

const jsRules = {
  'max-len': ['error', { code: 80 }],
  'max-lines': ['error', 200],
  indent: ['error', 2],
  'linebreak-style': ['error', 'unix'],
  quotes: ['error', 'single'],
  semi: ['error', 'never'],
  '@typescript-eslint/no-unused-vars': 'off',
  'unused-imports/no-unused-imports': 'warn',
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling'],
        'object',
        'type',
        'index',
      ],
    },
  ],
}

export default [
  prettierConfig,
  ...compat.extends('plugin:svelte/recommended'),
  { ignores: ['dist', 'node_modules', 'pnpm-lock.yaml'] },
  {
    plugins: { importPlugin, unusedImportsPlugin, sveltePlugin },
  },
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      ...jsRules,
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      ...jsRules,
    },
  },
]
