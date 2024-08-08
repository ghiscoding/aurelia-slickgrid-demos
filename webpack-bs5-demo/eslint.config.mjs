import eslint from '@eslint/js';
import globals from 'globals';
import n from 'eslint-plugin-n';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '**/*.js',
      '**/*.mjs',
      '**/*/*.d.ts',
      '**/__tests__/*',
      '**/dist',
    ],
  },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      n
    },
    files: ['**/*.ts'],

    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
        Sortable: true,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json', './test/tsconfig.spec.json']
      }
    },
    settings: {
      node: {
        tryExtensions: ['.ts'],
        resolvePaths: ['node_modules/@types']
      }
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' }, // maybe we should turn this on in a new PR
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'destructuredArrayIgnorePattern': '^_', caughtErrors: 'none' }],
      'curly': 'error',
      'eqeqeq': 'error',
      'object-shorthand': 'error',
      'no-async-promise-executor': 'off',
      'no-case-declarations': 'off',
      'no-cond-assign': 'off',
      'no-prototype-builtins': [0],
      'no-extra-boolean-cast': 'off',
      'semi': 'off',
      'keyword-spacing': 'error',
      'space-before-blocks': 'error'
    }
  });
