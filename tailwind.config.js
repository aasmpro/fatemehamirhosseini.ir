module.exports = {
  mode: "jit",
  content: [
    "./src/data/*.js",
    "./src/views/*.{js,jsx}",
    "./src/components/*.{js,jsx}",
    "./src/Main.jsx",
    "./src/index.js",
  ],
  safelist: [
    {
      pattern: /bg-.*-(300|500)/,
    },
    {
      pattern: /ring-.*-300/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern: /border-.*-(300|500)/,
    },
    {
      pattern: /text-.*-(300|600|700|900)/,
      variants: ["hover", "group-hover"],
    },
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
