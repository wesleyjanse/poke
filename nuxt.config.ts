// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    ["@nuxtjs/eslint-module", { lintOnStart: false }],
    "@nuxtjs/tailwindcss",
    "nuxt-typed-router",
    "nuxt-icon",
    "@nuxt/image-edge",
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
        class: "text-primary bg-[#F9F9F9]",
      },
    },
  },
});
