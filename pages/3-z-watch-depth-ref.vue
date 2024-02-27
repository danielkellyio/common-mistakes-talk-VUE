<script setup lang="ts">
const data = ref({
  username: "",
  password: "",
});

watch(
  data,
  (newVal) => {
    // won't work without deep
    alert("data changed");
  },
  {
    deep: true,
  }
);
</script>

<template>
  <div class="h-screen flex items-center justify-center scale-150">
    <div>
      <h1 class="text-3xl">Ref</h1>
      <UInput variant="outline" size="xl" v-model="data.username" />
    </div>
  </div>
</template>
