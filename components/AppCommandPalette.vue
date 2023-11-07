import { _scale } from '#tailwind-config/theme'; import { _scale } from
'#tailwind-config/theme';
<script setup>
const isOpen = ref(false);
const pages = [
  { id: 0, label: "Home", path: "/" },
  { id: 1, label: "v-for Key Example 1", path: "/1-v-for-key-no-state" },
  { id: 2, label: "v-for Key Example 2", path: "/1-v-for-key-with-state" },
  { id: 2.5, label: "v-for Key Example 3", path: "/1-v-for-key-z" },
  {
    id: 3,
    label: "Non Reactive Deps Example",
    path: "/2-non-reactive-deps-begin",
  },
];
const selected = ref();

watch(selected, (value) => {
  navigateTo(value.path);
  isOpen.value = false;
});
defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      isOpen.value = !isOpen.value;
    },
  },
});
</script>
<template>
  <div>
    <UModal v-model="isOpen">
      <UCommandPalette
        v-model="selected"
        nullable
        :groups="[{ key: 'people', commands: pages }]"
        :fuse="{ resultLimit: 6, fuseOptions: { threshold: 0.1 } }"
      />
    </UModal>
  </div>
</template>
<style>
[id^="headlessui-dialog-panel"] {
  transform: scale(2);
}
</style>
