import eslintRecommended from 'eslint/conf/eslint-recommended.js';
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
    plugins: [],
    rules: {
      ...eslintRecommended.rules
      // You can add more custom rules here
    }
  }
];
