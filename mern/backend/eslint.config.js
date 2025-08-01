// eslint.config.js
import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    },
    rules: {
      // Core recommended rules adapted manually
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'off',
      'eqeqeq': ['error', 'always'],
      'curly': 'error',
      'no-multi-spaces': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['warn', 'single']
    }
  }
];
