/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },

      boxShadow: {
        normal: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      letterSpacing: {
        thightest: "-0.065em",
      },

      spacing: {
        25: "6.25rem" /* 100px */,
        30: "7.5rem" /* 120px */,
        50: "12.5rem" /* 200px */,
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem" /* 16px */,
          lg: "0.625rem" /* 10px */,
        },
      },

      backgroundImage: {
        "home-mobile": "url('../images/headerBgMobile.webp')",
        "home-desktop": "url('../images/headerBgDesktop.webp')",
      },
    },

    fontFamily: {
      Dana: "Dana",
      DanaDemiBold: "Dana DemiBold",
      DanaMedium: "Dana Medium",
      MorabbaLight: "Morabba Light",
      MorabbaMedium: "Morabba Medium",
      MorabbaBold: "Morabba Bold",
    },

    screens: {
      xs: "480px",
      // => @media (min-width:480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],

  darkMode: "selector",
};
