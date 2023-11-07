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
  <PageHeading>
    v-for key without state
    <UButton size="xl" @click="shuffleArray(pokemons)">Shuffle</UButton>
  </PageHeading>

  <ul class="grid grid-cols-4 gap-4 mt-3" v-auto-animate>
    <li v-for="(pokemon, index) in pokemons" :key="index">
      <PokemonCard :slug="pokemon" />
    </li>
  </ul>
</template>
