// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ["@nuxtjs/eslint-module", { lintOnStart: false }],
    "@nuxtjs/tailwindcss",
  ],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
      global: true,
    },
  ],
});
