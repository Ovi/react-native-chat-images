module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'sort-keys': 1,
    'sort-vars': 1,
    'import/named': 0,
    quotes: [2, 'single', 'avoid-escape'],
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'comma-dangle': 2,
  },
};
