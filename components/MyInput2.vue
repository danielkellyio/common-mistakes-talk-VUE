<script setup lang="ts">
const modelValue = defineModel();
</script>

<template>
  <input id="username" v-model="modelValue" />
</template>
