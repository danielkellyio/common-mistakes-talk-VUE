<script setup lang="ts">
const data = ref("");
</script>
<template>
  <div class="flex items-center justify-center h-screen scale-150">
    <div>
      <h1 class="text-2xl">Data in Parent</h1>
      <pre>{{ data }}</pre>
      <MyInput v-model="data" />
    </div>
  </div>
</template>
