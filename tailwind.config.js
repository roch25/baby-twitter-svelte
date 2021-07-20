module.exports = {
  purge: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: (_) => ({
        banner: "url('./banner.png')",
      }),
      colors: {
        primary: "#1da1f2",
      },
      minHeight: {
        "94": "94vh",
        "50": "50vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
