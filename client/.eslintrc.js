module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'airbnb-base',
    'prettier',
  ],
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'no-unused-vars': ['error', { args: 'none' }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        htmlWhitespaceSensitivity: 'strict',
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
      },
    ],
    // import
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.d.ts'],
      },
    ],
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'],
  },
};
