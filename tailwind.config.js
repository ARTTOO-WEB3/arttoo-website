/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // 以下直接覆盖默认的配置
    color: {
      // https://uicolors.app/create
    },
    // fontSize
    fontSize: {},
    extend: {}, // 这个应该是在默认配置的基础上进行扩展的
  },
  plugins: [],
}
