<template>
  <label
    :htmlFor="$props.name || $props.id"
    class="relative w-full text-gray-500 focus-within:text-primary block"
  >
    <Icon
      name="tabler:search"
      class="p-2 pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2"
    />

    <input
      :id="$props.id"
      :value="modelValue"
      :name="$props.name || $props.id"
      :type="$props.type"
      :placeholder="$props.placeholder"
      class="bg-[#EFF0F1] outline-0 focus-within:ring-2 ring-primary placeholder-gray-500 w-full h-full p-2 pl-8 rounded-[10px]"
      @input="(event: any) => $emit('update:modelValue', event?.target.value)"
    />
  </label>
</template>

<script setup lang="ts">
import { InputType } from "~/types";

interface IProps {
  id: string;
  type?: InputType;
  name?: string | undefined;
  placeholder?: string;
  modelValue?: any;
}

withDefaults(defineProps<IProps>(), {
  placeholder: "Search Pokemon",
  type: "text",
  name: undefined,
  modelValue: null,
});

defineEmits(["update:modelValue"]);
</script>
