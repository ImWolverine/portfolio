const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { NodeNextRequest } = require('next/dist/server/base-http/node')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#617bff',
          200: '#617bff',
          300: '#617bff',
          400: '#617bff',
          500: '#617bff',
          600: '#617bff',
          700: '#617bff',
          800: '#617bff',
          900: '#617bff',
        },
        gray: {
          100: '#ffffff',
          200: '#7e8c9a',
          300: '#7e8c9a',
          400: '#7e8c9a',
          500: '#7e8c9a',
          600: '#7e8c9a',
          700: '#1e262f',
          800: '#1e262f',
          900: '#21232c',
        },
        yellow: '#FFE103',
        background: '#0e141b',
      },
      fontWeight: {
        medium: '600',
        normal: '600',
        light: '600',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            lineHeight: 'calc(1em + 0.725rem)',
            fontWeight: '600',
            a: {
              fontWeight: '900',
              color: theme('colors.primary.500'),
              textUnderlineOffset: '5px',
              textDecoration: 'none',
              '&:hover': {
                borderBottom: '2px solid',
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.white'),
              backgroundColor: theme('colors.gray.800'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
              color: theme('colors.primary.100'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
        dark: {
          css: {
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
