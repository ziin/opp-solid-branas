module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard-with-typescript'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {}
}
