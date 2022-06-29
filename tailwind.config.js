module.exports = {
  content: [
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
      pattern: /text-.*-(300|400|600|700|900)/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern: /(from|to)-.*-(300|800)/,
    },
  ],
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
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(360deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
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
