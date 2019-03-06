module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/prop-types': 0,
    'jsx-a11y/no-static-element-interactions': 0
  }
};