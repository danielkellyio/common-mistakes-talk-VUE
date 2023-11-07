<script setup lang="ts">
const data = ref("");
</script>
<template>
  <h1>Data in Parent</h1>
  <pre>{{ data }}</pre>
  <MyInput2 v-model="data" />
</template>
