module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    listStyleType: {
      square: "square",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "26px"],
      xl: ["20px", "30px"],
      "2xl": ["24px", "36px"],
      "3xl": ["32px", "48px"],
      "4xl": ["48px", "72px"],
      "5xl": ["80px", "85px"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
      },
    },
    extend: {
      borderWidth: {
        12: "12px",
      },
      colors: {
        primary: "#E6553B",
        secondary: "#808080",
        green: "#53c139",
        light: "#f0f0f0",
      },
      spacing: {
        25: "6.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
