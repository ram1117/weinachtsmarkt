import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './atoms/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        christmas: ['var(--font-christmas)'],
        montserrat: ['var(--font-montserrat)'],
      },
      listStyleType: {
        square: 'square',
      },
      colors: {
        'app-primary': '#c01717',
        'app-secondary': '#fbfbfb',
      },
    },
  },
  plugins: [],
}
export default config
