<script setup>
const isOpen = ref(false);
const pages = [
  { id: 0, label: "Home", path: "/" },
  { id: 1, label: "Mistake #1: v-for Key 1", path: "/1-v-for-key-no-state" },
  {
    id: 2,
    label: "Mistake #1: v-for Key 2",
    path: "/1-v-for-key-with-state-1",
  },
  { id: 3, label: "Mistake #1: v-for Key 3", path: "/1-v-for-key-z" },
  {
    id: 4,
    label: "Mistake #2: Non Reactive Deps Example",
    path: "/2-non-reactive-deps-begin",
  },
  {
    id: 4.5,
    label: "Mistake #2: Non Reactive Deps Example End",
    path: "/2-non-reactive-deps-end",
  },
  {
    id: 5,
    label: "Mistake #3: Replacing Reactive State 1",
    path: "/3-replacing-reactive-state-1",
  },
  {
    id: 6,
    label: "Mistake #3: Replacing Reactive State 2",
    path: "/3-replacing-reactive-state-2",
  },
  {
    id: 7,
    label: "Mistake #3 Bonus: Watch Depth Ref",
    path: "/3-z-watch-depth-ref",
  },
  {
    id: 8,
    label: "Mistake #3 Bonus: Watch Depth Reactive",
    path: "/3-z-watch-depth-reactive",
  },
  {
    id: 9,
    label: "Mistake #4:  Mutating Props 1",
    path: "/4-mutating-props-1-begin",
  },
  {
    id: 10,
    label: "Mistake #4: Mutating Props 2",
    path: "/4-mutating-props-2-begin",
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
