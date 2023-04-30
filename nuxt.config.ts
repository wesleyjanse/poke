// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ["@nuxtjs/eslint-module", { lintOnStart: false }],
    "@nuxtjs/tailwindcss",
    "nuxt-typed-router",
    "nuxt-icon",
  ],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
      global: true,
    },
  ],
  app: {
    head: {
      bodyAttrs: {
        class: "text-primary",
      },
    },
  },
});
