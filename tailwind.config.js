module.exports = {
  mode: "jit",
  content: [
    "./src/data/*.js",
    "./src/views/*.{js,jsx}",
    "./src/components/*.{js,jsx}",
    "./src/Main.jsx",
    "./src/index.js",
  ],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        JBM: ["JBM"],
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: [],
    },
  },
  plugins: [],
};
