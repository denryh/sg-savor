/** @type {import('prettier').Config} */
const prettierConfig = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  plugins: [require('prettier-plugin-tailwindcss')],
}

module.exports = prettierConfig
