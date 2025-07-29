import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, prettier: eslintPluginPrettier },
    extends: ['js/recommended', eslintConfigPrettier],
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      'capitalized-comments': ['error', 'always'],
      'prettier/prettier': 'error',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  globalIgnores([
    'dist/*',
    'webpack.config.js',
    'jest.config.js',
    'babel.config.js',
  ]),
]);
