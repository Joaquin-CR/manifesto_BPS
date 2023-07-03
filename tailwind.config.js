/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bgColor-Home': '#19192e',
        'bgColor-Navbar': '#1f1f39',
        'Color-M&BTN': '#eea86c'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' }
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      fontFamily: {
        Modern: ['Modern20']
      }
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
