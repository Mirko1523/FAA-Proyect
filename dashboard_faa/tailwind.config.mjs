/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'purple-dark': '#756A90',
        'purple-light': '#C1B1D3',
        'turquoise': '#43BFB3',
        'neutral-bg': '#E1E1E1',
        'text-white': '#F2F2F2',
      },
    },
  },
  plugins: [],
};
