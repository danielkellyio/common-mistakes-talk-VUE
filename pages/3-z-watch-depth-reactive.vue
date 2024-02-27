<script setup lang="ts">
const data = reactive({
  username: "",
  password: "",
});

watch(data, (newVal) => {
  alert("refData changed");
});
</script>

<template>
  <div class="h-screen flex items-center justify-center scale-150">
    <div>
      <h1 class="text-3xl">Reactive</h1>
      <UInput variant="outline" size="xl" v-model="data.username" />
    </div>
  </div>
</template>
