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
  <div class="h-screen flex items-center justify-center">
    <UInput variant="outline" size="2xl" v-model="data.username" />
  </div>
</template>
