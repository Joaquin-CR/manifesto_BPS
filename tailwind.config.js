/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bgColor-Home': '#19192e',
        'bgColor-fullScreenHome': '#1f1f39',
        'bgColor-Navbar': '#1f1f39',
        'Color-M&BTN': '#eea86c',
        'bgColor-SignInForm': '#9393aa',
        'bgColor-Form': '#f5f5f5',
        'ColorBorder-Inputs': '#1f1f39',
        'Color-SubmitForm': '#838bc8',
        'Color-ErrorValidation': '#c01313',
        'Color-Modal-Button': '#6200ee',
        'Color-hr': '#979797',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      fontFamily: {
        Modern: ['Modern20'],
        Inter: ['InterMedium'],
        MonserraM: ['MonserratMedium'],
        MonserratR: ['MonserratRegular'],
      },
      backgroundImage: {
        manifestoWeb: "url('/Images/ImgWeb.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
