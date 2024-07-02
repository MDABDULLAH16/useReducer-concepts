module.exports = {
  root: true,
  env: { browser: true,Node:true, es2020: true },
  extends: [
    "eslint:all",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:all/react",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
