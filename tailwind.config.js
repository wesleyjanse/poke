module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontSize: {
      small: ["12px", "14px"],
      base: ["15px", "22px"],
      large: ["17px", "20px"],
      title: ["34px", "41px"],
    },
    extend: {
      colors: {
        primary: "#1F2029",
        normal: "#A3ACAE",
        fire: "#FD7D25",
        grass: "#95C24D",
        ghost: "#7B62A3",
        water: "#4592C3",
        poision: "#4592C3",
      },
      dropShadow: {
        light: "0px 15px 15px rgba(0, 0, 0, 0.04);",
      },
    },
  },
};
