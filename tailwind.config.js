/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    100: '#F2BCD7',
    200: '#624F8F',
  },
  secondary: {
    100: '#F18B82',
    200: '#DAEBF3',
  },
}

const size = {
  xl: '2rem',
  lg: [
    '1.25rem',
    {
      letterSpacing: '0',
      lineHeight: '1.75rem',
    },
  ],
  md: "1.125rem",
  sm: [
    '0.75rem',
    {
      letterSpacing: '0',
      lineHeight: '1.125rem',
    },
  ],
}

const screens = {
  sm: { min: "640px" },
  md: { min: "768px" },
  lg: { min: "1024px" },
  xl: { min: "1216px" },
}

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      jura: 'Jura, sans-serif',
      mono: 'monospace',
    },
    fontSize: {
      huge: '7rem',
      '7xl': '5rem',
      '6xl': '4.5rem',
      '5xl': '4rem',
      '4xl': '3.5rem',
      '3xl': '3rem',
      '2xl': '2.5rem',
      xl: '2rem',
      lg: [
        '1.25rem',
        {
          letterSpacing: '0',
          lineHeight: '1.75rem',
        },
      ],
      base: [
        '1rem',
        {
          letterSpacing: '0',
          lineHeight: '1.5rem',
        },
      ],
      md: "1.125rem",
      sm: [
        '0.75rem',
        {
          letterSpacing: '0',
          lineHeight: '1.125rem',
        },
      ],
      xs: [
        '0.625rem',
        {
          letterSpacing: '0',
          lineHeight: '1rem',
        },
      ],
    },
    screens: {
      "xs-only": { max: "639px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1216px" },
    },
    extend: {
      colors: colors,
      sizes: size,
      screens: screens,
    },
  },
  plugins: [
  ],
}

