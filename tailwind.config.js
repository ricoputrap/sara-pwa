/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      background: "var(--background)",
      primary: "#0666EB",
      black: {
        "900": "#15171A",
        "700": "#333333",
        "500": "#525252",
        "300": "#616262",
        "200": "#525C66",
        "100": "#828B94"
      },
      grey: "808080"
    },
  },
  plugins: [],
}

