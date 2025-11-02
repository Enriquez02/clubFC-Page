/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        iluminacionlogo: {
          '0%': { filter: 'saturate(0.5) brightness(1.5)' },
          '100%': { filter: 'saturate(1) brightness(1)' },
        },
      },
      animation: {
        iluminacionlogo: 'iluminacionlogo 2s forwards',
      },
    },
  },

  plugins: [
 ],
}
