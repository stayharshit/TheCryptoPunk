/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
      },
      colors: {
        black: "#000",
      },
      fontSize: {
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "32px",
        base: "15px",
      },
    },
  },
};


