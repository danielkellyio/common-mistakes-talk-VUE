<script setup lang="ts">
import { Pokemon } from "@/types";
const props = defineProps<{
  slug: String;
}>();

const { data: pokemon } = await useFetch<Pokemon>(
  `https://pokeapi.co/api/v2/pokemon/${props.slug}`
);
</script>
<template>
  <UCard v-if="pokemon">
    <img
      :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${addLeadingZeros(
        pokemon.id
      )}.png`"
      :alt="pokemon.name"
    />
    <template #footer>
      <h2 class="text-xl">{{ pokemon.name }}</h2>
    </template>
  </UCard>
</template>
