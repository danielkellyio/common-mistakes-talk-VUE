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
  <div class="h-screen flex items-center justify-center">
    <div>
      <h1 class="text-lg">Reactive</h1>
      <UInput variant="outline" size="2xl" v-model="data.username" />
    </div>
  </div>
</template>
