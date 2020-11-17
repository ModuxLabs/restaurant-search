module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-react'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-unused-vars': 'off', // throws false positives on imported types
    'react/prop-types': 'off', // proper ts makes proptypes somewhat irrelevant
    'no-unused-expressions': 'off' // throws false positives on optional chaining funcs
  }
}
