module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    quotes: ['error', 'single'],
    // we want to force semicolons
    semi: 0,
    // we use 2 spaces to indent our code
    indent: ['error', 2],
    // we want to avoid useless spaces
    'no-multi-spaces': ['error'],
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore',
        semi: false,
        singleQuote: true
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ]
  }
}
