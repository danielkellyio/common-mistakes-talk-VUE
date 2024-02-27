<script setup>
const pokemons = ref([
  {
    name: "bulbasaur",
    id: crypto.randomUUID(),
  },
  {
    name: "charmander",
    id: crypto.randomUUID(),
  },
  {
    name: "squirtle",
    id: crypto.randomUUID(),
  },
  {
    name: "caterpie",
    id: crypto.randomUUID(),
  },
  {
    name: "butterfree",
    id: crypto.randomUUID(),
  },
  {
    name: "pikachu",
    id: crypto.randomUUID(),
  },
  {
    name: "ninetales",
    id: crypto.randomUUID(),
  },
  {
    name: "zubat",
    id: crypto.randomUUID(),
  },
  {
    name: "bulbasaur",
    id: crypto.randomUUID(),
  },
]);

function randomId() {
  return crypto.randomUUID();
}
</script>
<template>
  <PageHeading>
    v-for key without state
    <UButton size="xl" @click="shuffleArray(pokemons)">Shuffle</UButton>
  </PageHeading>

  <ul class="grid grid-cols-4 gap-4 mt-3" v-auto-animate>
    <li v-for="(pokemon, index) in pokemons" :key="randomId()">
      <PokemonCard :slug="pokemon.name" />
    </li>
  </ul>
</template>
