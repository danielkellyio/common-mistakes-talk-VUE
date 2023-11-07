<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();
</script>

<template>
  <input id="username" v-model="modelValue" />
</template>
