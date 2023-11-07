<script setup>
const post = ref({
  title: "My First Post",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  image: "https://source.unsplash.com/random/400x400",
  date: new Date(),
});

const published = useTimeAgo(post.value.date, {
  showSecond: true,
  updateInterval: 1000,
});
</script>
<template>
  <div>
    <h1 class="text-7xl flex justify-center gap-2 items-center">
      Non Reactive Deps Example 2
    </h1>
    <div class="flex justify-center items-center mt-5">
      <UCard class="w-[250px]">
        <div class="text-center">
          <img
            :src="post.image"
            :alt="post.title"
            class="rounded"
            width="200"
          />
        </div>

        <template #footer>
          <h3 class="font-bold text-lg">{{ post.title }}</h3>
          <UBadge>{{ published }}</UBadge>
          <p>{{ post.description }}</p>
        </template>
      </UCard>
    </div>
  </div>
</template>
