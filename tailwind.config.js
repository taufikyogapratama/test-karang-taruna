/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addVariant }) {
      // Menambahkan varian custom untuk dark mode
      addVariant("dark", "&:where(.dark, .dark *)");
    },
  ],
};
