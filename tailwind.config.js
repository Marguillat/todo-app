const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui(
    {
      themes: {
        light: {
          colors: {
            background: '#EFECEC',
            primary: {
              50: '#edf3ff',
              100: '#dfe7ff',
              200: '#c5d3ff',
              300: '#b0c1ff',
              400: '#7d8efc',
              500: '#5e68f6',
              600: '#4341ea',
              700: '#3833cf',
              800: '#2f2ca7',
              900: '#2b2c84',
              950: '#1b194d',
              DEFAULT: '#b0c1ff',
              foreground: 'DEFAULT'
            },
            secondary: {
              50: '#f3f8fc',
              100: '#e7f1f7',
              200: '#c9e0ee',
              300: '#99c8e0',
              400: '#62abce',
              500: '#3e91b9',
              600: '#2d749c',
              700: '#265e7e',
              800: '#235069',
              900: '#224358',
              950: '#162b3b',
              DEFAULT: '#99c8e0'
            },
            orange: {
              light: '#E8A454',
              strong: '#E88054',
              DEFAULT: '#E8A454'
            }
          }
        },
        dark: {
          colors: {
            background: '#0d0c0c',
            primary: {
              50: '#edf3ff',
              100: '#dfe7ff',
              200: '#c5d3ff',
              300: '#b0c1ff',
              400: '#7d8efc',
              500: '#5e68f6',
              600: '#4341ea',
              700: '#3833cf',
              800: '#2f2ca7',
              900: '#2b2c84',
              950: '#1b194d',
              DEFAULT: '#4341ea',
              foreground: 'DEFAULT'
            }
          }
        }
      }
    }
  )]
}
