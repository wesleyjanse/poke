<template>
  <div class="flex flex-col gap-4">
    <div class="text-title font-bold">Pokédex</div>
    <FormInput id="search-pokomen" v-model="input" type="search" />

    <DetailCard v-for="item in searchResults" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePokemonStore } from "~/store/pokemon";

const store = usePokemonStore();
const { searchResults } = storeToRefs(store); // use storeToRefs to keep data reactive
const { fetchPokemons, search } = store; // destructure form store for non reactive stuff

await fetchPokemons();
const input = ref("");

watch(input, (newValue) => {
  search(newValue);
});
</script>
