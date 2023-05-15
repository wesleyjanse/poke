<template>
  <button
    role="link"
    class="bg-white rounded-xl flex py-3 pl-4 pr-1 gap-4 drop-shadow-light outline-primary"
    :aria-label="`Button opens a detail page for the selected pokemon, selected: ${$props.item.name}`"
    @click="
      $router.push({ path: '/poke-detail-:id', params: { id: $props.item.id } })
    "
  >
    <nuxt-img
      loading="lazy"
      width="50"
      height="50"
      :src="$props.item.sprites.front_default"
    />
    <div>
      <p class="text-black font-bold text-large">
        {{ capitalizeString($props.item.name) }}
      </p>
      <p class="text-gray-600 font-medium text-left">
        Nr. {{ $props.item.id }}
      </p>
    </div>
    <div class="flex gap-1 self-start ml-auto">
      <SimpleBadge
        v-for="(itemType, index) in $props.item.types"
        :key="index"
        :name="itemType.type.name"
        :color="getColor(itemType.type.name)"
      />
    </div>
    <Icon
      class="w-fit self-center text-gray-600"
      name="tabler:chevron-right"
    ></Icon>
  </button>
</template>

<script setup lang="ts">
import { IPokemon, TPokeType, TYPE_BY_COLOR } from "~/types";

interface IProps {
  item: IPokemon;
}

defineProps<IProps>();

const getColor = (name: TPokeType): string => TYPE_BY_COLOR[name];
</script>
