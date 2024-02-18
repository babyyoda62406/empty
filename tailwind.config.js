module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700_cc: "#ffffffcc", A700: "#ffffff" },
        red: { 400: "#eb3f57", "400_90": "#eb3e5d90", "400_99": "#eb3e5d99" },
        blue_gray: {
          400: "#7878aa",
          500: "#67748e",
          800: "#454654",
          900: "#252f40",
        },
        pink: { 900: "#893843" },
        gray: {
          100: "#f5f5fa",
          200: "#f0eded",
          "900_99": "#10084299",
          "900_90": "#10084290",
        },
        black: {
          900: "#000000",
          "900_0f": "#0000000f",
          "900_3f": "#0000003f",
          "900_0c": "#0000000c",
          "900_11": "#00000011",
        },
        indigo: { "200_7f": "#aaaacc7f" },
      },
      boxShadow: {
        bs: "inset -2px -2px  4px 0px #ffffff7f",
        bs1: "10px 10px  20px 0px #aaaacc7f",
        bs2: "0px 4px  4px 0px #0000003f",
        bs4: "0px 8px  9px 0px #0000000f",
        bs3: "0px 20px  27px 0px #0000000c",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#eb3f57,#893843)",
        gradient1: "linear-gradient(140deg ,#eb3e5d90,#10084290)",
        gradient2: "linear-gradient(140deg ,#eb3e5d99,#10084299)",
      },
      fontFamily: { opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
