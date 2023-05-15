/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: "#7C5DFA", // 1
        light: "#9277FF", // 2
      },
      text: {
        light: "#DFE3FA", // 5
        dark: "#7E88C3", // 7
        DEFAULT: "#0C0E16", // 8
      },
      red: {
        DEFAULT: "#EC5757", // 9
        light: "#FF9797", // 10
      },
      background: {
        light: "#F8F8FB", // 11
        dark: "#141625", // 12
      },
      regular: {
        light: "#888EB0", // 6
        DEFAULT: "#252945", // 4
        dark: "#1E2139", // 3
      },
      white: "#FFFFFF",
      black: "#000000",
    },
    fontSize: {
      hl: [
        "36px",
        {
          lineHeight: "33px",
          letterSpacing: "-1px",
          fontWeight: "bold",
        },
      ],
      hm: [
        "24px",
        {
          lineHeight: "22px",
          letterSpacing: "-0.75px",
          fontWeight: "bold",
        },
      ],
      hs: [
        "15px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.25px",
          fontWeight: "bold",
        },
      ],
      "hs-v": [
        "15px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.25px",
          fontWeight: "bold",
        },
      ],
      body: [
        "13px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.1px",
          fontWeight: "medium",
        },
      ],
      "body-v": [
        "13px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.25px",
          fontWeight: "medium",
        },
      ],
    },
  },
  plugins: [],
};
