// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
      global: true,
    },
  ],
});
