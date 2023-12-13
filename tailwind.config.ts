import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c4b5fd", //color: violet300
        secondary: "#5eead4", //color: teal300
        tertiary: "#f1f5f9", //color: slate100
        fourth: "#64748b", // color: slate: 500
      }
    },
  },
  plugins: [],
}
export default config
