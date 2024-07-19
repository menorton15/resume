import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '0px',
      md: '431px',
      lg: '1273px',
    },
    extend: {
      colors: {
        'primary': '#FFF099',
        'primary-32': 'rgba(255, 240, 153, 0.32)',
        'accent': '#D33700',
        'primary-light': '#FEF5C1',
        'primary-dark': '#FFBB10',
        'footer': '#967D72',
        'page': '#151212',
        'page-dark': '#1E1B1A'
      },
      borderRadius: {
        '1.25': '20px',
        '3.125': '50px',
        '50': '50%',
      },
      boxShadow: {
        'button': '0px 0px 10px 0px #FFF099',
      },
      fontSize: {
        'nav': ['20px', {
          lineHeight: '1.2',
          fontWeight: '400',
        }],
        'mobile-nav': ['26px', {
          lineHeight: '1.4',
          fontWeight: '400',
        }],
        'contact': ['24px', {
          lineHeight: '150%',
          fontWeight: '400'
        }]
      },
      height: {
        'hero-bg': '600px',
        'hero-bg-md': '500px'
      },
      width: {
        'hero-md': '130%',
        'hero-sm': '160%',
        'hero': '105%'
      },
      spacing: {
        'hero': '160px',
        'hero-md': '100px'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'delay-fade-in': {
          '0%': { opacity: '0' },
          '75%': {opacity: '0' },
          '100%': { opacity: '1' },
        },
        'long-delay-fade-in': {
          '0%': { opacity: '0' },
          '90%': {opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        default: 'fade-in 1s ease-in-out',
        reverse: 'fade-out 1s ease-in-out',
        delay: 'delay-fade-in 1s ease-in-out',
        longdelay: 'long-delay-fade-in 1s ease-in-out'
      },
      translate: {
        'mobile-menu-btn': '4px',
      },
      transitionDuration: {
        '4000': '4000ms'
      },
      scale: {
        '85': '.85',
        '65': '.65'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ]
} satisfies Config;