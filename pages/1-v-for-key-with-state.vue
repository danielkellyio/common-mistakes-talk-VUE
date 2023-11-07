<script setup>
const pokemons = ref([
  "bulbasaur",
  "charmander",
  "squirtle",
  "caterpie",
  "butterfree",
  "pikachu",
  "ninetales",
  "zubat",
]);
</script>
<template>
  <h1 class="text-7xl flex justify-center gap-2 items-center">
    v-for key without state
    <UButton size="xl" @click="shuffleArray(pokemons)">Shuffle</UButton>
  </h1>

  <ul class="grid grid-cols-4 gap-4 mt-3" v-auto-animate>
    <li v-for="(pokemon, index) in pokemons" :key="index">
      <PokemonCard :slug="pokemon" />
    </li>
  </ul>
</template>
