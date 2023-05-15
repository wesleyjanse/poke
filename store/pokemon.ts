import { defineStore } from "pinia";
import { IPokemon } from "~/types";

export const usePokemonStore = defineStore("pokemons", {
  state: () => ({
    pokemons: [] as IPokemon[],
    searchResults: [] as IPokemon[],
  }),
  actions: {
    async fetchPokemons() {
      try {
        const { data } = await useFetch<IPokemon[]>(
          "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
        );

        if (data.value) {
          this.pokemons = data.value;
        }
      } catch (error) {
        return error;
      }
    },
    search(query: string) {
      if (!query) {
        this.searchResults = this.pokemons;
      } else {
        const q = query.trim().toLowerCase();
        this.searchResults = this.pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(q)
        );
      }
    },
  },
});
