<script setup>
const message = "Hello world!";
</script>
<template>
  <div>
    <h1 class="text-7xl flex justify-center gap-2 items-center">
      Non Reactive Deps Example
    </h1>
    <div class="flex justify-center items-center mt-5">
      <UCard>
        <UInput v-model="message" size="xl" />
        <template #footer> Output: {{ message }} </template>
      </UCard>
    </div>
  </div>
</template>
