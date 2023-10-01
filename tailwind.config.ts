import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
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
        'xl-140-md': ['1.25rem', { fontWeight: 500, lineHeight: '1.4' }],
        'lg-140': ['1.125rem', { fontWeight: 400, lineHeight: '1.4' }],
        'base-160': ['1rem', { fontWeight: 400, lineHeight: '1.6' }],
        'base-140': ['1rem', { fontWeight: 400, lineHeight: '1.4' }],
        'base-140-md': ['1rem', { fontWeight: 500, lineHeight: '1.4' }],
        'sm-160': ['0.875rem', { fontWeight: 400, lineHeight: '1.6' }],
        'sm-140': ['0.875rem', { fontWeight: 400, lineHeight: '1.4' }],
        'sm-140-md': ['0.875rem', { fontWeight: 500, lineHeight: '1.4' }],
        'xs-140': ['0.75rem', { fontWeight: 400, lineHeight: '1.4' }],
      },
      colors: {
        'primary-500': '#7A2F73',
        'primary-400': '#BE59B4',
        'primary-100': '#FFEEFD',

        'red-500': '#AF1111',
        'red-100': '#FFEEEE',

        'orange-500': '#FBA94C',

        'green-500': '#25D366',

        'gray-600': '#29292E',
        'gray-500': '#323238',
        'gray-400': '#7C7C8A',
        'gray-300': '#E6E5E5',

        'white-500': '#F1F1F1',
        'white-400': '#F4F4F4',
        'white-200': '#F7F7F7',
        'white-100': '#FCFCFC',
        white: '#FFFFFF',
      },
      gridTemplateColumns: {
        'book-cards': 'repeat(auto-fill, minmax(18.5rem, 1fr))',
        book: '1fr 19.5rem',
      },
      boxShadow: {
        container: '0px 2px 6px 0px rgba(0, 0, 0, 0.20)',
        'container-lg': '0px 3px 8px rgba(0, 0, 0, 0.24)',
        'solid-white': '0 0 0 1px white',
      },
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(50% 50% at 50% 50%, #7A2F73 0%, #3B1838 100%)',
        'gradient-title':
          'linear-gradient(180deg, #FFF 80.21%, rgba(255, 255, 255, 0.00) 100%)',
      },
      backgroundColor: {
        overlay: 'rgba(0, 0, 0, 0.75)',
      },
      keyframes: {
        slideDownAndFade: {
          '0%': { transform: 'translateY(-2px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          '0%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          '0%': { transform: 'translateY(2px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          '0%': { transform: 'translateX(-2px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
