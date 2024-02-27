<script setup lang="ts">
const data = ref("");
</script>
<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <h1>Data in Parent</h1>
      <pre>{{ data }}</pre>
      <MyInput v-model="data" />
    </div>
  </div>
</template>
