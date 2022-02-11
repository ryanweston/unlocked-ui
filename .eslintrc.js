module.exports = {
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'any'
      },

      'svg': 'always',
      'math': 'always'
    }],
  }
}