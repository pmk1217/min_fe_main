module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {ecmaVersion : 'latest', sourceType : 'module', project:'./tsconfig.json',  tsconfigRootDir: __dirname,},
  plugins: ['react-refresh'],
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts", ".env", "vite-env.d.ts"],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/exhaustive-deps' : 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': ['off'],
    'no-debugger': 'off',
    'no-empty' : 'off',
  },
}
