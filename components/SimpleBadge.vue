<template>
  <div
    :class="`${color} px-3 py-1 rounded-full text-white text-small flex justify-center items-center`"
  >
    {{ name }}
  </div>
</template>

<script setup lang="ts">
interface IProps {
  name: string;
  color: string;
}
defineProps<IProps>();
</script>
