<template>
  <div class="flex flex-col gap-4">
    <div class="text-title font-bold">Pokédex</div>
    <FormInput id="search-pokomen" type="search" />

    <DetailCard v-for="item in data" :key="item.id" :item="item" />
  </div>
</template>

<script setup>
const { data } = await useFetch(
  "https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon"
);
</script>
