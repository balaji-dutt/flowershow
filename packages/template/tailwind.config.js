const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // support wider width for large screens >1440px eg. in hero
      maxWidth: {
        "8xl": "88rem",
      },
      fontFamily: {
        sans: ["ui-sans-serif", ...defaultTheme.fontFamily.sans],
        serif: ["ui-serif", ...defaultTheme.fontFamily.serif],
        mono: ["ui-monospace", ...defaultTheme.fontFamily.mono],
        headings: ["-apple-system", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: {
          DEFAULT: colors.slate[50],
          dark: colors.slate[900],
        },
        primary: {
          DEFAULT: colors.slate[900],
          dark: colors.slate[50],
        },
        secondary: {
          DEFAULT: "",
          dark: "",
        },
      },
    },
  },
  /* eslint global-require: off */
  plugins: [require("@tailwindcss/typography")],
};
