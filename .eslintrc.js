module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    camelcase: 0,
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'next',
      },
    ],
  },
};
