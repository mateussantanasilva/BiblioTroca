import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      fontSize: {
        'title-xl': ['48px', { fontWeight: '800', lineHeight: '1.25' }],
        'title-lg': ['32px', { fontWeight: '700', lineHeight: '1.25' }],
        'title-base': ['24px', { fontWeight: '700', lineHeight: '1.25' }],
        'title-sm': ['20px', { fontWeight: '700', lineHeight: '1.25' }],
        'title-xs': ['18px', { fontWeight: '700', lineHeight: '1.25' }],

        lg: ['1.25rem', { fontWeight: '500', lineHeight: '1.4' }],
        base: ['1rem', { fontWeight: '400', lineHeight: '1.6' }],
        sm: ['0.875rem', { fontWeight: '400', lineHeight: '1.6' }],
        xs: ['0.75rem', { fontWeight: '400', lineHeight: '1.6' }],
      },
      colors: {
        'yellow-500': '#FEB822',
        'yellow-400': '#FECC5F',
        'yellow-300': '#FFE2A5',

        'red-500': '#AB222E',

        'orange-500': '#FBA94C',

        'green-500': '#04D361',

        'gray-800': '#121214',
        'gray-700': '#202024',
        'gray-600': '#29292E',
        'gray-500': '#323238',
        'gray-400': '#7C7C8A',
        'gray-300': '#E6E5E5',
        'gray-200': '#EDEDED',
        'gray-100': '#F3F2F2',

        'white-500': '#F1F1F1',
        'white-400': '#F4F4F4',
        'white-200': '#F7F7F7',
        'white-100': '#FAFAFA',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
export default config
