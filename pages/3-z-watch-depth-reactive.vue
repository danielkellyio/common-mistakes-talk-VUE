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
    <UInput variant="outline" size="2xl" v-model="data.username" />
  </div>
</template>
