import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      dark_bg: '#1E2336',
      dark_border: '#1B1E2E',
      terminal_text: '#a9b1d6',
      white: '#FFF',
      'red-500': '#E51400',
      'gray-300': '#36394A',
      'gray-500': '#C5C5C5',
    },
  },
  plugins: [],
};
export default config;
