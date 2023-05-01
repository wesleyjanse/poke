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
type TPokeType = "water" | "ghost" | "poison" | "grass" | "normal" | "fire";

interface IPokeDetail {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: TPokeType;
    };
  }[];
}

interface IProps {
  item: IPokeDetail;
}

defineProps<IProps>();

const colors = {
  normal: "bg-[#A8A77A]",
  fire: "bg-[#EE8130]",
  water: "bg-[#6390F0]",
  electric: "bg-[#F7D02C]",
  grass: "bg-[#7AC74C]",
  ice: "bg-[#96D9D6]",
  fighting: "bg-[#C22E28]",
  poison: "bg-[#A33EA1]",
  ground: "bg-[#E2BF65]",
  flying: "bg-[#A98FF3]",
  psychic: "bg-[#F95587]",
  bug: "bg-[#A6B91A]",
  rock: "bg-[#B6A136]",
  ghost: "bg-[#735797]",
  dragon: "bg-[#6F35FC]",
  dark: "bg-[#705746]",
  steel: "bg-[#B7B7CE]",
  fairy: "bg-[#D685AD]",
};

const getColor = (name: TPokeType): string => colors[name];
</script>
