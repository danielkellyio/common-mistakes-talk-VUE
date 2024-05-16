<script setup>
import { useLocalStorage } from "@vueuse/core";
const cookiesAccepted = useLocalStorage("cookiesAccepted", false);
</script>

<template>
  <div class="flex h-[90vh] justify-center items-center scale-150">
    <label>
      <input type="checkbox" v-model="cookiesAccepted" /> {{ cookiesAccepted }}
    </label>
  </div>
</template>
