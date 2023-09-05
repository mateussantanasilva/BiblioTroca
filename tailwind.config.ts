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
        // Titles
        'title-2xl': ['3rem', { fontWeight: 800, lineHeight: '1.25' }],
        'title-xl': ['2.25rem', { fontWeight: 800, lineHeight: '1.25' }],
        'title-lg': ['2rem', { fontWeight: 700, lineHeight: '1.25' }],
        'title-base': ['1.5rem', { fontWeight: 700, lineHeight: '1.25' }],
        'title-sm': ['1.25rem', { fontWeight: 700, lineHeight: '1.25' }],
        'title-xs': ['1.125rem', { fontWeight: 700, lineHeight: '1.4' }],

        'btn-base': ['1rem', { fontWeight: 700, lineHeight: '1.6' }],

        // Text
        'xl-140': ['1.25rem', { fontWeight: 500, lineHeight: '1.4' }],
        'lg-125': ['1rem', { fontWeight: 500, lineHeight: '1.25' }],
        'base-160': ['1rem', { fontWeight: 400, lineHeight: '1.6' }],
        'base-140': ['1rem', { fontWeight: 400, lineHeight: '1.4' }],
        'base-140-md': ['1rem', { fontWeight: 500, lineHeight: '1.4' }],
        'sm-140': ['0.875rem', { fontWeight: 400, lineHeight: '1.4' }],
        'sm-140-md': ['0.875rem', { fontWeight: 500, lineHeight: '1.4' }],
        'sm-160': ['0.875rem', { fontWeight: 400, lineHeight: '1.6' }],
        'xs-140': ['0.75rem', { fontWeight: 400, lineHeight: '1.4' }],
      },
      colors: {
        'primary-500': '#7A2F73',
        'primary-400': '#BE59B4',
        'primary-100': '#FFEEFD',

        'red-500': '#AF1111',
        'red-100': '#FFEEEE',

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
        'white-100': '#FCFCFC',
        white: '#FFFFFF',
      },
      boxShadow: {
        container: '0px 2px 6px 0px rgba(0, 0, 0, 0.20)',
        'container-lg': '0px 4px 12px 0px rgba(0, 0, 0, 0.40)',
      },
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(50% 50% at 50% 50%, #7A2F73 0%, #3B1838 100%)',
        'gradient-title':
          'linear-gradient(180deg, #FFF 80.21%, rgba(255, 255, 255, 0.00) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
