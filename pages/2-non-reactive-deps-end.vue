<script setup lang="ts">
const videoEl = ref<HTMLVideoElement | null>(null);
const { playing } = useMediaControls(videoEl);
</script>
<template>
  <div>
    <PageHeading>Non-Reactive Deps</PageHeading>
    <div class="flex justify-center mt-10">
      <div class="relative aspect-video w-[900px]">
        <video ref="videoEl" class="" src="/fail.mp4"></video>
        <button
          @click="playing = !playing"
          class="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] block text-6xl"
        >
          {{ playing ? "⏸️" : "▶️" }}
        </button>
      </div>
    </div>
  </div>
</template>
