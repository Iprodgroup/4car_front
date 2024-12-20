/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { height: '0' },
          '100%': { height: 'auto' },
        },
      },
      animation: {
        slideDown: 'slideDown 2s ease-out forwards',
      },
      colors: {
        primary: '#1A6EC1',
        darkMain: '#182F43',
        darkPrimary: '#1A6EC1',
        light: '#e2f0ff',
        borderLight: '#D3D3D3',
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '3rem',
        },
      },
      backgroundImage: {
        hero: "url('/hero-pattern.jpg')",
        shini: "url('/ShinaBg.png')",
        diski: "url('/DiskiBg.png')",
        stock: "url('/StockBg.png')",
        contact: "url('/ContactBg.png')",
        checkout: "url('/checkout-orderBG.png')",
        map: "url('/map.jpg')",
        cart: "url('/hero-cart.png')",
      },
      fontFamily: {
        body: ['Montserrat Alternates', 'sans-serif'],
        forms: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
