/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      DarkPurple: "#1b0155",
      LightPurple: "#6c4adc",
      PurpleLightShade: "#f0ecfe",
      Blue: "#2f61f6",
      BluelightShade: "#edf2fe",
      Orange: "#e18335",
      OrangeLightShade: "#fcf0e3",
      Pink: "#e650f7",
      PinkLightShade: "#fbeefe",
      LightGray: "#fcfcfd",
      MidGray: "#f3f6fd",
    },
    fontFamily: {
      sans: ["Roboto"],
    },
  },
  plugins: [],
};
