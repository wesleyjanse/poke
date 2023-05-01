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
      },
    },
  },
};
