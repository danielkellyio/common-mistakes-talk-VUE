<script setup lang="ts">
const counter = useInterval(1000);
</script>

<template>
  <div class="flex h-[90vh] justify-center items-center">
    <Transition>
      <div class="text-9xl">
        {{ counter }}
      </div>
    </Transition>
  </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
