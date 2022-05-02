import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{jsx,tsx,css,vue,md}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  darkMode: 'class',
  plugins: [require('windicss/plugin/line-clamp')],
  theme: {},
})
