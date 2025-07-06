const plugin = require('tailwindcss/plugin')
const colors = require('./tailwindcolors')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './safelist.txt',
    './safelist/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    colors: {
      ...colors,
	  PINK: '#f68b1e',
    },
    fontSize: {
      xs: ['var(--text-size-xs)', '150%'],
      sm: ['var(--text-size-sm)', '150%'],
      base: ['var(--text-size-base)', '150%'],
      lg: ['var(--text-size-lg)', '140%'],
      xl: ['var(--text-size-xl)', '140%'],
      '2xl': ['var(--text-size-2xl)', '130%'],
      '3xl': ['var(--text-size-3xl)', '120%'],
      '4xl': ['var(--text-size-4xl)', '120%'],
      '5xl': ['var(--text-size-5xl)', '120%'],
      '6xl': ['var(--text-size-6xl)', '120%'],
      '7xl': ['var(--text-size-7xl)', '120%'],
      '8xl': ['var(--text-size-8xl)', '120%'],
      '9xl': ['var(--text-size-9xl)', '120%']
    },
    fontFamily: {
      body: 'var(--font-body)',
      heading: 'var(--font-heading)',
      graphic: 'var(--font-graphic)'
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1400px'
    },
    extend: {
      borderRadius: {
        none: 'var(--rounded-none)',
        sm: 'var(--rounded-sm)',
        DEFAULT: 'var(--rounded)',
        lg: 'var(--rounded-lg)',
        xl: 'var(--rounded)',
        full: 'var(--rounded-full)'
      },
      backgroundImage: {
        clouds: "url('/assets/images/labor-day/cloud.jpeg')"
      },
      fontWeight: {
        thin: '300',
        hairline: '300',
        extralight: '300',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '700',
        'extra-bold': '700'
      },
      animation: {
        fadeout: 'fadeOut 1s linear',
        fadein: 'fadeIn 1s linear',
        slidertimer: 'sliderTimer 8s linear'
      },
      keyframes: {
        fadeOut: {
          '0%': {opacity: '1'},
          '100%': {opacity: '0'}
        },
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        sliderTimer: {
          '0%': {width: '0%'},
          '100%': {width: '100%'}
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    plugin(function ({ addBase }: { addBase: (base: Record<string, any>) => void }) {
      addBase({
        button: {borderColor: '#333'}
      })
    })
  ],
  variants: {
    extend: {
      fontWeight: ['hover']
    }
  }
}
