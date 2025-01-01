/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "serif"],
        "open-sans": ["Open Sans", "serif"],
      },
      colors: {
        dark: "#02040F",
        light: "#FFFAFF",
        primary: "#3772FF",
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: "#3772FF",
          "base-100": "#FFFAFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
