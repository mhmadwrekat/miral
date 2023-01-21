module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      HERO: "url('/assest/imagesNav/Hero.webp')",
      Mobile_profile: "url('/assest/mobileprofile.jpg')",
      Cella: "url('/assest/carosal1.jpg')",
    },

    extend: {
      colors: {
        Orange: "#ff5200",
      },
      fontFamily: {
        TSExtra: ["TsExtrabold"],
        TSSemi: ["TsSemibold"],
        TSbold: ["Tsbold"],
        TSmedium: ["TsMed"],
        TSthin: ["TsThin"],
        TSlight: ["TsLight"],
        NTbold: ["NotoBold"],
        NTsemibold: ["NotoSemiBold"],
        NTmedium: ["NotoMedium"],
        NTregular: ["NotoRegular"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
